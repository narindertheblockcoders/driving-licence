import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const EmailVerify = () => {
  const [emailId, setEmailId] = useState();
  const [loading, setLoading] = useState(false);



  async function emailVerify(emaiId){
    // const data = emaiId
    const res = await axios.post("/api/forgetPassword/emailVerify",{emaiId:emaiId})

    const response = res.data

    console.log(response,"Verify email successfully")
    toast.success("Email verify successfuly")
  }



  async function submitHandlerFn(e){
    e.preventDefault()

    setLoading(true)

    if(emailId == null ){
        toast.error("Please enter email address.")
        setLoading(false)
    }
    console.log(emailId,"value is here")
   
    emailVerify(emailId)
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
                type="email"
                className="form-control"
                id="book-input"
                placeholder="Email Id"
                name="emailId"
                defaultValue={emailId}
                onChange={(e)=>setEmailId(e.target.value)}
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

export default EmailVerify;
