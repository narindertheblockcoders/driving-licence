import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./ui/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
function UpdateClient() {
  const [formData, setFormData] = useState({
    clientName: "",
    clientMobile: "",
    clientLicenseType: "",
    licenseState: "",
    queryState: "",
    reminderCall: "",
    feedback: "",
  });
  const [loading, setloading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [formError, setFormError] = useState({});
  const [Issubmit, setIsSubmit] = useState(false);

  const router = useRouter();

  const id = router.query;

  async function getAllClients() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("/api/allClients", { token: token });
      const response = res.data.data;

      console.log(response.data, "All clients data here.");

      const filterData = response.data?.filter((item) => {
        const name = item?.id;
        return name?.toLowerCase().includes(id?.toLowerCase());
      });
      console.log(filterData,"value set dataa")
  

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    getAllClients()
  })


  console.log(id, "query id");


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
    setFormError(validate(formData));

    if (formData.licenseState == null) {
      formError.licenseState(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormError(validate(formData));
    setIsSubmit(true);
    console.log("secnd");
    if (Object.keys(formError).length == 0 && Issubmit) {
      // registerUser(data1)
      addClientData(formData);
    }
  };

  async function addClientData(formData) {
    try {
      console.log(formData, "form data here for sneding api");
      setloading(true);
      const token = localStorage.getItem("token");
      const response = await axios.post("/api/updateClient", {
        token: token,
        data: formData,
      });

      console.log("response in add client--->", response.data.data.data);

      toast.success("Client added successfully");
      setTimeout(() => {
        router.push("/client");
      }, [1000]);
      setloading(false);
      setDisable(false);
    } catch (error) {
      console.log("Error-->", error);
      setloading(false);
      setDisable(false);
      toast.error("Please try again");
    }
  }
  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var regex = /^[a-zA-Z ]*$/;
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    if (!values.clientName) {
      errors.clientName = "Name is required";
    } else if (!regex.test(values.clientName)) {
      errors.clientName = "Name should be alphabetical";
    } else if (values.clientName.length < 2 || values.clientName.length > 20) {
      errors.clientName =
        "Name should be greater than 2 and less than 20 character";
    }
    if (!values.clientMobile) {
      errors.clientMobile = "Mobile number is required";
    } else if (values.clientMobile.length != 10) {
      errors.clientMobile = "Enter valid mobile number";
    } else if (!phoneRegExp.test(values.clientMobile)) {
      errors.clientMobile = "Mobile number is not valid";
    }
    if (!values.clientLicenseType) {
      errors.clientLicenseType = "License type is required";
    } else if (!regex.test(values.clientLicenseType)) {
      errors.clientLicenseType = "Enter valid license type";
    }

    if (!values.licenseState) {
      errors.licenseState = "License state is required";
    } else if (!regex.test(values.licenseState)) {
      errors.licenseState = "Enter valid state ";
    }
    if (!values.queryState) {
      errors.queryState = "Query state is required";
    } else if (!regex.test(values.queryState)) {
      errors.queryState = "Enter valid query state";
    }
    if (!values.reminderCall) {
      errors.reminderCall = "Reminder call is required";
    }
    if (!values.feedback) {
      errors.feedback = "Feedback is required";
    }
    return errors;
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <section className="client">
        <div className="container">
          <div className="client-head">
            <h2>Update Client</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="client-content">
              <div className="mb-3 client-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"
                  placeholder="Name"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                />
                <p className={"input-error"}>{formError.clientName}</p>
              </div>
              <div className="mb-3 client-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"
                  placeholder="Mobile"
                  name="clientMobile"
                  maxLength="10"
                  value={formData.clientMobile}
                  onChange={handleChange}
                />
                <p className={"input-error"}>{formError.clientMobile}</p>
              </div>
              <div className="mb-3 client-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"
                  placeholder="License Type"
                  name="clientLicenseType"
                  value={formData.clientLicenseType}
                  onChange={handleChange}
                />
                <p className={"input-error"}>{formError.clientLicenseType}</p>
              </div>
              <div className="mb-3 client-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"
                  placeholder="License State"
                  name="licenseState"
                  value={formData.licenseState}
                  onChange={handleChange}
                />
                <p className={"input-error"}>{formError.licenseState}</p>
              </div>
              <div className="mb-3 client-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"
                  placeholder="Query Status"
                  name="queryState"
                  value={formData.queryState}
                  onChange={handleChange}
                />
                <p className={"input-error"}>{formError.queryState}</p>
              </div>
              <div className="mb-3 client-row" id="client-reminder">
                <label htmlFor="">Reminder Call</label>
                <div>
                  <input
                    type="date"
                    className="form-control"
                    id="client-input"
                    placeholder="Date of client"
                    name="reminderCall"
                    value={formData.reminderCall}
                    onChange={handleChange}
                  />
                  <p className={"input-error"}>{formError.reminderCall}</p>
                </div>
              </div>
              <div className="mb-3 client-textarea">
                <textarea
                  type="text"
                  className="form-control"
                  id="client-text"
                  placeholder="Feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                />
                <p className={"input-error"}>{formError.feedback}</p>
              </div>
              <div className="client-button">
                <button className="btn-book" type="submit" disabled={disable}>
                  {loading ? "Loading..." : "Update Client"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default UpdateClient;
