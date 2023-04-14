import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";




function Login() {

    const [loading , setLoading] = useState(false)
    const [formData, setFormData] = useState({
        emailId: "",
        password: "",
      });
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(values => ({ ...values, [name]: value }))
      }
      async function loginUser() {
        try {
          const response = await axios.post("/api/login", {
            data: formData,
          });

          toast.success("Login Successfully")
          localStorage.setItem("token",response.data.data.data)
          setLoading(false)
          setTimeout(()=>{
              Router.push("/getUsers")

          },[1000])

        } catch (error) {
          console.log(error);
          setLoading(false)
          toast.error("Invalid Credentials")

        }
      }

    async function submitHandlerFn(e) {
        e.preventDefault();
        setLoading(true)
         var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!formData?.emailId || !formData?.password ) {
        toast.error("Please Provide all the credentials");
        setLoading(false)
        return;
  
      }
  
      if (!formData?.emailId.includes(".com")) {
        toast.error("Please provide valid email Address");
        setLoading(false)
        return;
      }
  
      if (!regularExpression.test(formData?.password)) {
  
        toast.error(
          "Passowrd must contain 8 characters (one uppercase and lowercase letter and number are required."
        );
        setLoading(false)
        return;
      }
        
        loginUser()
        
    }

    return (
        <>
                <ToastContainer />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="css/responsive.css" />
            
            <section className="client" id="login">
                <div className="container">

                    <form onSubmit={submitHandlerFn}>
                        <div className="client-head">
                            <h2>LogIn Form</h2>
                        </div>
                        <div className="client-content">


                            <div className="mb-3 client-row">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="book-input"
                                    placeholder="EmailId" name="emailId"
                                    value={formData.emailId}
                                    onChange={handleChange}
                                />
                               

                            </div>
                            <div className="mb-3 client-row">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="book-input"
                                    placeholder="Password" name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                               
                            </div>
                        </div>
                        {/* onClick={(e)=>handleClick(e)} */}
                        <div className="client-button">
                        <Button className="btn-book" type="submit" disabled={loading} >
                            {loading ?"Loading...":"Login"}
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

export default Login