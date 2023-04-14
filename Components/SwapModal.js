import React from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { DatePicker } from 'rsuite';
import { swapModalSchema } from './Utils/Schema'
import {
  Formik,
  Field,
  ErrorMessage,
  useFormik,
  validateYupSchema,
} from "formik";

const SwapModal = ({ show, setShow, swapDataId, schedualDataFn}) => {
  // console.log("swapData value--->", swapDataId)
  const [booklocation, setBookLocation] = useState()
  const [vehicleType, setVehicleType] = useState()
  const [inputData, setInputData] = useState()
  const [formInput, setFormInput] = useState()
  const [dateInputs, setDateInputs] = useState()
  const [loading , setLoading] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [errMsg, setErrMsg] = useState(false);

  async function onSubmit(values) {
    setLoading(true)
    setErrMsg(false)
    if (!dateInputs) {
      setErrMsg(true)
      return
    }
    console.log(errMsg, "errMsgsubmmitedddddddddd");
    let newData = {
      name: values?.name,
      mobile: values?.mobile,
      bookingRefNo: values?.bookingRefNo,
      location: values?.location,
      vehicleType: values?.vehicleType,
      changeBookingDate: dateInputs,
      id: swapDataId
    }
    // console.log(newData, '########################form data')
    getSwapData(newData)
  }

  const { values, errors, handleBlur,resetForm, handleChange, handleSubmit, touched } =

    useFormik({
      initialValues: {
        name: "",
        mobile: "",
        bookingRefNo: "",
        location: "",
        vehicleType: "",
      },
      validationSchema: swapModalSchema,
      onSubmit,

    });

  async function bookingLocation() {
    try {
      const token = localStorage.getItem("token")
      // console.log("token in new booking----->");
      const response = await axios.post("/api/location", { token: token })
      // console.log("response in  swap modal for bookingLocation response=========>", response.data.data.data);
      setBookLocation(response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }
  async function vehicalBooking() {
    try {
      const token = localStorage.getItem("token")
      // console.log("token in new booking----->", token);
      const response = await axios.post("/api/vehicalstype", { token })
      // console.log("response in  swap modal for vehicaltype-->", response.data)
      setVehicleType(response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }

  const getSwapData = async (newData) => {
    try {
      
      // const allData ={newData,swapData}
      const token = localStorage.getItem("token")
      const response = await axios.post("/api/swapBooking", { token: token, data: newData })
      console.log("response Data for single user in getDataById", response.data.data.data);
      setLoading(false)
          resetForm();
          setDateInputs(null)
       
      setShow(false)
      // schedualDataFn()

    } catch (error) {
      console.log("Error:::-->", error)
      setShow(false)

    }

  }


  const handleChangedofBooking = (e) => {
    if(e){
      setErrMsg(false)
      setLoading(false)
    }
    console.log("hello from  handleChangedofBooking1", e)
    const options = {
      second: '2-digit',
      minute: '2-digit',
      hour: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
    const date = new Intl.DateTimeFormat('en-US', options).format(e) // '12/02/2021'
    setDateInputs(date)
  }

  useEffect(() => {
    bookingLocation()
    vehicalBooking()

  }, [show])



  return (
    <div>

      <Modal
        show={show} onHide={handleClose} animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className='swap-modal-head custom-modell'
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Swap Booking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <h4>Current Booking Date</h4>
          <span className='dateText'>date:{dateInputs}</span>
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <div> */}
            <div class="input-main">
                                                                                                          
                                                                    <div class="sclient-box">
                 <div className='sclient-div'>
              <input type="text"
                className="form-control"
                id="book-input"
                placeholder="Client Name" name="name"
               
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.name && touched?.name && (
                <p className="input-error">{errors?.name}</p>
              )}
              </div>
          
          <div className='sclient-div'>
              <input type="text"
                className="form-control"
                id="book-input"
                placeholder="Client Phone" name="mobile"
                
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.mobile && touched?.mobile && (
                <p className="input-error">{errors?.mobile}</p>
              )}
            </div>
            
            </div>

                                                                      
            <div class="sclient-box">
                 <div className='sclient-div'>
              <input type="text"
                className="form-control input-group"
                id="book-input"
                placeholder="Booking Ref.no." name="bookingRefNo"
              
                value={values.bookingRefNo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors?.bookingRefNo && touched?.bookingRefNo && (
                <p className="input-error">{errors?.bookingRefNo}</p>
              )}
            </div>

            <div className='sclient-div'>
              <select className="form-select" id="book-select" name="location"
               
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option selected="">Select Location</option>
                {booklocation?.map((item, idx) => {
                  return (
                    <option value={item.id}>{item.place}</option>
                  )
                })}
              </select>
              {errors?.location && touched?.location && (
                <p className="input-error">{errors?.location}</p>
              )}

            </div>
            </div>

                                                             
            <div class="sclient-box">
                 <div className='sclient-div'>
              <select className="form-select" id="book-select" name="vehicleType"
                value={values.vehicleType}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option selected="">Select Vehicle Type</option>
                {vehicleType?.map((item, idx) => {
                  return (
                    <option value={item.id}>{item.vehicle}</option>
                  )
                })}
              </select>
              {errors?.vehicleType && touched?.vehicleType && (
                <p className="input-error">{errors?.vehicleType}</p>
              )}

            </div>

            <div className='sclient-div'>
              <DatePicker
              className='datePicker'
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
                name="changeBookingDate"
                onChange={(e) => handleChangedofBooking(e)}

              />

              {errMsg && <span className='input-error'>*This is a mandatory Field</span>}

            </div>
                                                          
                 </div>
            <Button type='submit' className='mt-2' disabled={loading} >
            {loading ? "Loading" : "Swap"}
            </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleClose}>Close</Button>   */}
          {/* <Button onClick={vehicalBooking}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SwapModal

// {value == apidat ?
// return(

//   map 

// )
// }