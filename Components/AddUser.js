import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import Navbar from "./ui/Navbar";
function AddUser() {

  const [inputs, setInputs] = useState({
    emailId:"",
    password:"",
    confirmPassword:"",
    name:"",
    roleId:"",
    contactNo:"",
    status:""
  });


  const [loading , setLoading] = useState(false)
  const [rollname, setRollname] = useState();
  const handleChange = (event) => {
   
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))

  }


  async function addUser() {
    try {
      const res = await axios.post("/api/addUser", { data: inputs })
      const response = res.data.data.data;
      localStorage.setItem("token", response)
      toast.success("data inserted Successfully")
      setLoading(false)
      setTimeout(()=>{
          Router.push("/getUsers")
      },[1000])
    } catch (error) {
      console.log("Error in adduser---->",error);
      if (error.response.status == "500") {
        toast.error("Email already exist");
        return;
      }
    }
  }
  async function getRollname() {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("/api/getrollname", { token })
      setRollname(response.data.data.data)

    } catch (error) {
      console.log("Error:", error);
     
    }
  }

  useEffect(() => {
    getRollname()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
  setLoading(true)

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var regex = /^[a-zA-Z ]*$/;
    if (!inputs.emailId || !inputs.password || !inputs.confirmPassword || !inputs.name || !inputs.roleId || !inputs.contactNo || !inputs.status) {
      toast.error("Please Provide all the credentials");
      setLoading(false)
      return;
    }

    if (!inputs.emailId.includes(".com")) {
      toast.error("Please provide valid email Address");
      setLoading(false)
      return;
    }

    if (!regularExpression.test(inputs.password)) {
      
      toast.error(
        "Passowrd must contain 8 characters (one uppercase and lowercase letter and number are required." );
        setLoading(false)
      return;
    }
    if (inputs.password !== inputs.confirmPassword) {
      
      toast.error(
        "Passowrd must contain 8 characters (one uppercase and lowercase letter and number are required."
      );
      setLoading(false)
      return;
    }
    if(!regex.test(inputs.name) )
    {
      toast.error("Name shoule be alphabetical");
      setLoading(false)
      return;
    }
    
    if(inputs.name.length < 2 || inputs.name.length > 25 )
    {
     
      toast.error("Name should have valid length");
      setLoading(false)
      return;
    }
    if(inputs.contactNo.length != 10 )
    {
      toast.error("Please enter 10 digits mobile number");
      setLoading(false)
      return;
    }
    
    addUser();
  }

  return (
    <>
    <Navbar/>
    <ToastContainer />
     
      <section className="client">
        <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="client-head">
                <h2>Add User</h2>
              </div>
              <div className="client-content">


                <div className="mb-3 client-row">
                  <input
                    type="email"
                    className="form-control"
                    id="book-input"
                    placeholder="EmailId"  name="emailId" value={inputs.emailId}  onChange={handleChange}
                  />
                 
                </div>
                <div className="mb-3 client-row">
                  <input
                    type="password"
                    className="form-control"
                    id="book-input"
                    placeholder="Password" name="password" value={inputs.password}   onChange={handleChange}
                  />
                 
                </div>
                <div className="mb-3 client-row">
                  <input
                    type="password"
                    className="form-control"
                    id="book-input"
                    placeholder="Confirm Password" name="confirmPassword" value={inputs.confirmPassword} onChange={handleChange}
                  />
                  
                </div>
                <div className="mb-3 client-row">
                  <input
                    type="name"
                    className="form-control"
                    id="book-input"
                    placeholder="Name" name="name" value={inputs.name} onChange={handleChange}
                  />
                
                </div>
                <div className="mb-3 client-row">

                  <select type="select" className="form-roleName" aria-label="Default select example" name="roleId"  value={inputs.roleId} onChange={handleChange}>
                  <option selected>Role</option>
                    {rollname?.map((item) => {
                     
                      return (
                        <>
                          <option key={item} value={item.id}>{item.roleName}</option>
                        </>
                      )
                    })}

                  </select>
                 
                </div>
                <div className="mb-3 client-row">
                  <input
                    type="number"
                    className="form-control"
                    id="book-input"
                    placeholder="ContactNo"  name="contactNo" value={inputs.contactNo} onChange={handleChange}
                  />
                  
                </div>
                <div className="mb-3 client-row">
                <select type="select" className="form-select w-100" aria-label="Default select example" name="status" value={inputs.status} onChange={handleChange}>
                  <option selected>Status</option>
                  <option value="1">Active</option>
                  <option value="0">Disable</option>
                </select>
               
                </div>
              </div>
              <div className="client-button">
               
                <Button className="btn-book" type="submit" disabled={loading}>
                            {loading ?"Loading...":"Add User"}
                        </Button>
              </div>
            </form>
        
        </div>
      </section>
      <section className="footer">
        <div className="container">
          <p>© 2023 Driving Schedule Software. All Rights Reserved.</p>
        </div>
      </section>
    </>
  )
}
export default AddUser;