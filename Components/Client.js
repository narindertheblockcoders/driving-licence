import React, { useEffect, useState } from "react";
import Navbar from "./ui/Navbar";
import { Link } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import DeleteClientModal from "./DeleteClientModal";
import FeedbackModal from "./FeedbackModal";

function Client() {
  const [dataSearch, setDataSearch] = useState();
  const [searchData, setSearchData] = useState();
  const [inputLength, setInputLength] = useState();
  const [show, setShow] = useState();
  const [id, setId] = useState();
  const [allClientData, setAllClientData] = useState()
  const  [message , setMessage] =  useState()



  async function getAllClients() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("/api/allClients", { token: token });
      const response = res.data.data;

      console.log(response.data, "All clients data here.");
      setAllClientData(response.data)
      setInputLength(response.data.length)

    } catch (err) {
      console.log(err);
    }
  }



  const SearchFn = (e) => {
    console.log(e.target.value, "for seach input type");
    const search = e.target.value;
    if (search == null) {
      getAllClients();
      return;
    }

    setDataSearch(search);
    const filterData = allClientData?.filter((item) => {
      const name = item?.clientName;
      return name?.toLowerCase().includes(search?.toLowerCase());
    });

    console.log(filterData,"filtered Data")
    setSearchData(filterData);
    setInputLength(filterData.length);
  };


  useEffect(() => {
    setAllClientData(allClientData)

    getAllClients();
  }, []);

  async function deleteFn(e) {
    setShow(true);
    setId(e);
  }

  async function getFeedback(e){
    try{
      const id = e

      console.log(id,"id ehere")

    const token = localStorage.getItem("token");
    
    const res = await axios.post("/api/getFeedback",{token:token,id:id})
    const response = res.data.data
    console.log(response.message,"getFeedback")
    setMessage(response)

  }catch(err){
    console.log(err)
  }
  }

  

  return (
    <>
      <ToastContainer />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Driving</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/responsive.css" />

      <Navbar />
      <section className="Clients">
        <div className="container-fluid">
          <div className="client-head">
            <div className="clienthead-upper">
              <span>Clients</span>
              <a href="/addClient" className="add-new">
                Add New Client
              </a>
            </div>
            <div className="clienthead-lower">
              <span>
                Total Clients: <strong>{inputLength}</strong>
              </span>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name"
                  onChange={(e) => SearchFn(e)}
                />
                <span className="input-group-text" id="basic-addon2">
                  <img src="img/Icon feather-search.svg" alt="" />
                </span>
              </div>
            </div>
          </div>
          <div className="client-table">
            <table className="table ">
              <thead>
                <tr className="ctable-head">
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Vehicle Type</th>
                  <th scope="col">License No.</th>
                  <th scope="col">License Type</th>
                  <th scope="col">Reminder Call</th>
                  <th scope="col" />
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {searchData == null?
                allClientData?.map((item)=>{
                  return(
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.clientName}</td>
                    <td>{item.clientMobile}</td>
                    <td>HR Auto</td>
                    <td>0285372275</td>
                    <td>{item.clientLicenseType} </td>
                    <td>{new Date(item?.reminderCall).toLocaleDateString()}</td>
                    <td className="view-schedule">
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        id="vclient-schedule"
                        onClick={()=>getFeedback(item.id)}
                      >
                        View Schedule
                      </button>
                      {/* Modal */}
             
                    </td>
                    <td>
                      <img
                        onClick={() => deleteFn(item.id)}
                        src="img/Icon feather-trash-2.png"
                        alt=""
                      />
  
                      <Link href={"/updateClient/" +item.id}>
                        <img src="img/Icon feather-edit.png" alt="" />
                      </Link>
                    </td>
                  </tr>
                  )
                })  :
                searchData?.map((item)=>{
                  return(
                  <tr>
    
                  <td>{item.id}</td>
                  <td>{item.clientName}</td>
                  <td>{item.clientMobile}</td>
                  <td>HR Auto</td>
                  <td>0285372275</td>
                  <td>{item.clientLicenseType} </td>
                  <td>{new Date(item?.reminderCall).toLocaleDateString()}</td>
                  <td className="view-schedule">
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      id="vclient-schedule"
                    >
                      View Schedule
                    </button>
                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" id="client-dialog">
                        <div className="modal-content">
                          <div className="modal-header" id="client-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Feedback
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body" id="client-body">
                            <span>
                              {" "}
                              The training program was extremely helpful in
                              improving my driving skills. The instructors were
                              knowledgeable and patient, and the practical
                              exercises helped me gain confidence behind the
                              wheel. The program was well-organized and
                              structured. It covered all the important aspects
                              of driving, from basic maneuvers to more advanced
                              techniques. The instructors were also able to
                              answer all my questions and provide helpful
                              feedback.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      onClick={(e) => deleteFn(e)}
                      src="img/Icon feather-trash-2.png"
                      alt=""
                    />

                    <Link href={"/updateClient/" + item.id}>
                      <img src="img/Icon feather-edit.png" alt="" />
                    </Link>
                  </td>
                </tr>
                )
                })
              }
        
       
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <DeleteClientModal
        show={show}
        setShow={setShow}
        id={id}
        getAllClients={getAllClients}
      />

      <FeedbackModal  props={message}/>
    </>
  );
}
export default Client;
