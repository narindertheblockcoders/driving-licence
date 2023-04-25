import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const PasswordForget = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [loading, setLoading] = useState(false);

  const router = useRouter()


  async function forgetPassword(data){
    // const data = emaiId
    const res = await axios.post("/api/forgetPassword/emailVerify",data)

    const response = res.data

    console.log(response,"Verify email successfully")
    toast.success("Email verify successfuly")

    setTimeout(()=>{
    router.push("/forgetPassword/passwordForget")
    })
  }



  async function submitHandlerFn(e){
    e.preventDefault()

    setLoading(true)

    if(!password == confirmPassword ){
        toast.error("Password and confirm password dosen't match.")
        setLoading(false)
    }
    console.log(password,"value is here")
   const data ={
    password,
    confirmPassword
   }
    forgetPassword(data)
  }

  return (
    <section className="client" id="login">
        <ToastContainer/>
      <div className="container">
        <form onSubmit={submitHandlerFn}>
          <div className="client-head">
            <h2>Verify Your Email </h2>
          </div>
          <div className="client-content">
            <div className="mb-3 client-row">
              <input
                type="password"
                className="form-control"
                id="book-input"
                placeholder="Password"
                name="emailId"
                defaultValue={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3 client-row">
              <input
                type="password"
                className="form-control"
                id="book-input"
                placeholder="Confirm Password"
                name="emailId"
                defaultValue={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          {/* onClick={(e)=>handleClick(e)} */}
          <div className="client-button">
            <Button className="btn-book" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PasswordForget;
