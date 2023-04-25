import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import Navbar from "./ui/Navbar";
import { DatePicker } from 'rsuite';

function NewBooking() {
  const router = useRouter()
  const [formInputs, setFormInputs] = useState({
    bookingRefNo: "",
    licenseNo: "",
    name: "",
    mobile: "",
    totalAmount: "",
    paidAmount: "",
    dummyBooking: false,
  });
  const [loading, setLoading] = useState(false)
  const [disbale, setDisable] = useState()
  const [booklocation, setBookLocation] = useState()
  const [vehicleType, setVehicleType] = useState()
  const [paymentResult, setPaymentResult] = useState("")
 
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs(values => ({ ...values, [name]: value }))

  }

const handleChangeDate = (e) => {
    const options = {
      second:'2-digit',
      minute:'2-digit',
      hour:'2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
   const date= new Intl.DateTimeFormat('en-US', options).format(e) // '12/02/2021'
    formInputs['dateOfBooking']=date
  }

  const handleChangedofPayment = (e) => {
  
    const options = {
      second:'2-digit',
      minute:'2-digit',
      hour:'2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
   const date= new Intl.DateTimeFormat('en-US', options).format(e) // '12/02/2021'
    formInputs['dateOfPayment']=date
  }

  function onchangeFn(e) {
    setFormInputs({ ...formInputs, dummyBooking: e.target.checked })
  }

  async function bookingLocation() {
    try {
      const token = localStorage.getItem("token")
      console.log("token in new booking----->");
      const response = await axios.post("/api/location", { token: token })
      console.log("bookingLocation response=========>", response.data.data.data);
      setBookLocation(response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }
  async function vehicalBooking() {
    try {
      const token = localStorage.getItem("token")
      console.log("token in new booking----->", token);
      const response = await axios.post("/api/vehicalstype", { token })
      setVehicleType(response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function newBooking() {
    try {
      // setLoading(true)
      const token = localStorage.getItem("token")
      const response = await axios.post("/api/newBooking", { formInputs, token })
      console.log("newBooking response=========>", response.data);
      console.log(response, 'response')
      setLoading(false)
      
      toast.success("data inserted Successfully")
      setTimeout(() => {
        router.push("/bookingList")
      }, [1000])

    } catch (error) {
      console.log(error);
    }

  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    setDisable(true)
    var regex = /^[a-zA-Z ]*$/;
    var alphaNumeric = /^[a-zA-Z0-9]*$/;

    if (!formInputs.bookingRefNo || !formInputs.licenseNo || !formInputs.name || !formInputs.mobile || !formInputs.dateOfBooking || !formInputs.dateOfPayment || !formInputs.totalAmount) {
      toast.error("Please Provide all the credentials");
      setLoading(false)
      setDisable(false)
      return;
    }

    if (formInputs.mobile.length != 10) {
      toast.error("Please enter 10 digits mobile number");
      setLoading(false)
      setDisable(false)
      return;
    }
    if (formInputs.bookingRefNo.length != 10) {
      toast.error("Please enter 10 alphanumeric bookingRefNo ");
      setLoading(false)
      setDisable(false)
      return;
    }
    if (formInputs.licenseNo.length != 10) {
      toast.error("Please enter 10 alphanumeric license number");
      setLoading(false)
      setDisable(false)
      return;
    }
    if (!alphaNumeric.test(formInputs.bookingRefNo)) {
      toast.error("BookingRefNo shoule be alphanumeric");
      setLoading(false)
      setDisable(false)
      return;
    }
    if (!alphaNumeric.test(formInputs.licenseNo)) {
      toast.error("LicenseNo shoule be alphanumeric");
      setLoading(false)
      setDisable(false)
      return;
    }
    if (!regex.test(formInputs.name)) {
      toast.error("Name shoule be alphabetical");
      setLoading(false)
      setDisable(false)
      return;
    }

    if (formInputs.name.length < 2 || formInputs.name.length > 25) {

      toast.error("Name should have valid length");
      setLoading(false)
      setDisable(false)
      return;
    }
    if (formInputs.paidAmount > formInputs.totalAmount) {

      toast.error("Invalid paid amount");
      setLoading(false)
      setDisable(false)
      return;
    }
    newBooking()

  }

  useEffect(() => {
    bookingLocation()
    vehicalBooking()
  }, [])

  useEffect(() => {

    let { totalAmount, paidAmount } = formInputs
    if (Number(totalAmount) - Number(paidAmount) == 0) {
      setPaymentResult("")
    } else {
      setPaymentResult(Number(totalAmount) - Number(paidAmount));
      formInputs["paymentBalance"] = Number(totalAmount) - Number(paidAmount)
    }

  }, [formInputs.paidAmount])


  return (
    <>
      <ToastContainer />
      <Navbar />
      <section className="booking">
        <div className="container">
          <div className="booking-head">
            <h2>Add New booking</h2>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="dummyBooking"
              onChange={onchangeFn}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Dummy Booking
            </label>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="booking-content">
              <div className="mb-3 booking-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"
                  name="bookingRefNo"
                  value={formInputs.bookingRefNo}
                  onChange={handleChange}
                  placeholder="Booking Ref No."
                  maxLength={10}
                />

              </div>
              <div className="mb-3 booking-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"
                  name="licenseNo"
                  value={formInputs.licenseNo}
                  onChange={handleChange}
                  placeholder="License No."
                />

              </div>
              <div className="mb-3 booking-row">
                <select className="form-select" id="book-select" name="location" 
                // value={formInputs.location} 
                onChange={handleChange}>
                  <option >Select Location</option>
                  {booklocation?.map((item) => {

                    return (
                      <option value={item.id}>{item.place}</option>
                    )
                  })}

                </select>
              </div>
              <div className="mb-3 booking-row">
                <select className="form-select" id="book-select" name="vehicleType" value={formInputs.vehicleType} onChange={handleChange}>
                  <option selected="">Select Vehicle Type</option>
                  {vehicleType?.map((item) => {
                    return (
                      <option value={item.id}>{item.vehicle}</option>
                    )
                  })}
                </select>
              </div>
              <div className="mb-3 booking-row">
                <input
                  type="text"
                  className="form-control"
                  id="book-input"

                  name="name"
                  value={formInputs.name}
                  onChange={handleChange}
                  placeholder="Name"
                />

              </div>
              <div className="mb-3 booking-row">
                <input
                  type="number"
                  className="form-control"
                  id="book-input"
                  name="mobile"
                  value={formInputs.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                />
              </div>
              <div className="mb-3 booking-row">
               
                <div className="field only-date">
                  <DatePicker
                    format="yyyy-MM-dd HH:mm:ss"
                    placeholder="Date of booking"
                    style={{ width: 260 }}
                    locale={{
                      sunday: 'Su',
                      monday: 'Mo',
                      tuesday: 'Tu',
                      wednesday: 'We',
                      thursday: 'Th',
                      friday: 'Fr',
                      saturday: 'Sa',
                      ok: 'OK',
                      today: 'Today',
                      yesterday: 'Yesterday',
                      hours: 'Hours',
                      minutes: 'Minutes',
                      seconds: 'Seconds'
                    }}
                    name="dateOfBooking"
                  onChange={(e)=>handleChangeDate(e)}
                  />
                </div>

              </div>
              <div className="mb-3 booking-row">
              
                <div className="field only-date">
                  <DatePicker
                    format="yyyy-MM-dd HH:mm:ss"
                    placeholder="Date of payment"
                    style={{ width: 260 }}
                    locale={{
                      sunday: 'Su',
                      monday: 'Mo',
                      tuesday: 'Tu',
                      wednesday: 'We',
                      thursday: 'Th',
                      friday: 'Fr',
                      saturday: 'Sa',
                      ok: 'OK',
                      today: 'Today',
                      yesterday: 'Yesterday',
                      hours: 'Hours',
                      minutes: 'Minutes',
                      seconds: 'Seconds'
                    }}
                    name="dateOfPayment"
                  onChange={(e)=>handleChangedofPayment(e)}
                  />
                </div>
              </div>
              <div className="mb-3 booking-row">
                <input
                  type="number"
                  className="form-control"
                  id="book-input"
                  name="totalAmount"
                  value={formInputs.totalAmount}
                  onChange={handleChange}
                  min="0"

                  placeholder="Total Amount"
                />

              </div>
              <div className="mb-3 booking-row">
                <input
                  type="number"
                  className="form-control"
                  id="book-input"
                  name="paidAmount"
                  value={formInputs.paidAmount}
                  onChange={handleChange}
                  min="0"

                  placeholder="Paid Amount"
                />

              </div>
              <div className="mb-3 booking-row">
                <input
                  type="number"
                  className="form-control"
                  id="book-input"
                  name="paymentBalance"
                  min="0"
                  defaultValue={paymentResult}
                  placeholder="Payment Balance"
                  readonly='true'
                />
              </div>
            </div>

            <div className="booking-button">

              <Button className="btn-book" type="submit" disabled={disbale}>
                {loading  ? "Loading..." : "Book Now"}
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

export default NewBooking;