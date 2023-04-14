import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Router from "next/router";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./ui/Navbar";

function UpdateUser({ itemData }) {

  const [rollName, setRollName] = useState()
  const [userById, setUserById] = useState([])
  const [roleID, setRoleID] = useState(0)
  const [loading, setLoading] = useState(false)
  

  const emailId1 = useRef()
  const password1 = useRef()
  const confirmPassword1 = useRef()
  const name1 = useRef()
  const roleId1 = useRef()
  const contactNo1 = useRef()
  const status1 = useRef()

  const getUserById = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("/api/getUserById", { token: token, id: `${itemData.id}` })
      setUserById(response.data.data.data[0])
      setRoleID(response.data.data.data[0].roleName)
console.log("getuser by id ---------->",response.data.data.data[0])
    } catch (error) {
      console.log("Error:::-->", error)
    }
  }

  const updateUserById = async (data) => {
    try {
      console.log("data in updateUser By Id---data", data)
      const token = localStorage.getItem("token")
      const response = await axios.post("/api/updateUser", { token, data })
      console.log("updateUserById by id response ---------->",response.data)
      toast.success("data updated Successfully")
      setLoading(false)

      setTimeout(() => {
        Router.push("/getUsers")
      }, [2000])

    } catch (error) {
      console.log("Error:", error)
    }
  }

  async function handleEditProfile(e) {
    e.preventDefault()
    console.log(emailId1.current.value);
    const emailId = emailId1.current.value
    const password = password1.current.value
    const confirmPassword = confirmPassword1.current.value
    const name = name1.current.value
    const roleId = roleID
    const contactNo = contactNo1.current.value
    const status = status1.current.value
    const data = {
      emailId,
      password,
      confirmPassword,
      name,
      roleId,
      contactNo,
      status,
      id: itemData?.id
    }

    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var regex = /^[a-zA-Z ]*$/;

    if (!emailId || !password || !confirmPassword || !name || !roleId || !contactNo || !status) {
      toast.error("Please Provide all the credentials");
      return;

    }

    if (!data?.emailId.includes(".com")) {
      toast.error("Please provide valid email Address");
      return;
    }

    if (!regularExpression.test(data?.password)) {

      toast.error(
        "Passowrd must contain 8 characters (one uppercase and lowercase letter and number are required."
      );
      return;
    }
    if (data?.password !== data?.confirmPassword) {

      toast.error(
        "Passowrd must contain 8 characters (one uppercase and lowercase letter and number are required."
      );
      return;
    }

    if (data?.contactNo?.length != 10) {
      toast.error("Please enter 10 digits mobile number");
      return;
    }

    if (!regex.test(data.name)) {
      toast.error("Name shoule be alphabetical");
      return;
    }

    if (data.name.length < 2 || data.name.length > 25) {

      toast.error("Name should have valid length");
      return;
    }

    updateUserById(data)
  }

  async function getRoleName() {

    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("/api/getrollname", { token })
      setRollName(response.data.data.data)
      console.log("response for rolename in update page", response.data.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getRoleName()
    getUserById()

  }, [])


  console.log("user detail in state ---------->",userById)
  return (
    <>
      <ToastContainer />
      <Navbar />
      <section className="client">
        <div className="container">
          <form onSubmit={handleEditProfile}>
            <div className="client-head">
              <h2>Update User</h2>
            </div>
            <div className="client-content">


              <div className="mb-3 client-row">
                <input
                  type="email"
                  className="form-control"
                  id="book-input"
                  placeholder="EmailId" name="emailId" ref={emailId1} defaultValue={userById?.emailId}
                />
              </div>

              <div className="mb-3 client-row">
                <input
                  type="password"
                  className="form-control"
                  id="book-input"
                  placeholder="Password" name="password" ref={password1} />
              </div>
              <div className="mb-3 client-row">
                <input
                  type="password"
                  className="form-control"
                  id="book-input"
                  placeholder="Confirm Password" name="confirmPassword" ref={confirmPassword1} defaultValue={userById?.confirmPassword}
                />

              </div>
              <div className="mb-3 client-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"
                  placeholder="Name" name="name" ref={name1} defaultValue={userById?.name}
                />
              </div>
              <div className="mb-3 client-row">

                <select className="form-roleName" aria-label="Default select example" onChange={e => setRoleID(e.target.value)} name="roleId" ref={roleId1}  >


                  {rollName?.map((item, idx) => {
                    return (
                      <>
                        <option value={item?.id} selected={item?.roleName == userById?.roleName ? true : false}  > {item?.roleName}</option>
                      </>
                    )
                  }
                  )}
                </select>
              </div>

              <div className="mb-3 client-row">
                <input
                  type="number"
                  className="form-control"
                  id="book-input"
                  placeholder="ContactNo" name="contactNo" ref={contactNo1} defaultValue={userById?.contactNo} />
              </div>
              <select class="form-select" aria-label="Default select example" name="status" ref={status1}  >
                <option selected={userById?.status == 1 ? true : false} value="1">Active</option>
                <option selected={userById?.status == 0 ? true : false} value="0" >Disable</option>
              </select>
            </div>
            <div className="client-button">
              <Button className="btn-book" type="submit">
                {loading == true ? "Loading..." : "Update User"}
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
export default UpdateUser;