import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { addTrainerModalSchema } from './Utils/Schema'
import axios from 'axios';
import {
  Formik,
  Field,
  ErrorMessage,
  useFormik,
  validateYupSchema,
} from "formik";

const AddTrainerModal = ({ showModal, setShowModal, itemId }) => {
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [allTrainer, setAllTrainer] = useState()
  const [addTrainer, setAddTrainer] = useState()
  const [allSchedule,setAllScheduled] = useState()
  const [matchDataItem,setmatchDataItem] = useState()
  const [loading , setLoading] = useState(false)
// console.log("object-------->>>",itemId);
  async function onSubmit(values) {
    setLoading(true)
    let newData = {
      id: values?.trainer,
    }
    console.log(newData, '########################form data')
    addTrainerFn(newData)
  }


  const { values, errors, handleBlur, resetForm, handleChange, handleSubmit, touched } =

    useFormik({
      initialValues: {
        trainer: "",
      },
      validationSchema: addTrainerModalSchema,
      onSubmit,

    });


  async function getAllTrainer() {
    try {
      const token = localStorage.getItem("token")
      // console.log("token in new booking----->", token);
      const response = await axios.post("/api/getAllTrainer", { token })
      // console.log("response in  add trainer modal for addTrainer-->", response.data.data.data)
      setAllTrainer(response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function getAllScheduleData() {
    try {
      const token = localStorage.getItem("token")
      // console.log("token in new booking----->", token);
      const response = await axios.post("/api/getAllSchedule", { token })
      // console.log("response in  add trainer modal for addTrainer-->", response.data.data.data)
      setAllScheduled(response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function getScheduleDataFn(){

    const filterData = allSchedule?.filter((item) => {
      const matchData = item?.id;
      return matchData?.includes(itemId)
    })      
      setmatchDataItem(filterData)
  }

  async function addTrainerFn(newData) {
    try {
      const token = localStorage.getItem("token")
      console.log("token in new  addTrainerFn----->", token);
      const response = await axios.post("/api/addTrainer", { token:token,data:newData })
      console.log("response in  add trainer modal for addTrainer-->", response.data)
      setLoading(false)
      resetForm();
      setShowModal(false)
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getAllTrainer()
    // getAllScheduleData()
  }, [showModal])

  // useEffect(() => {
  //   getScheduleDataFn()
  // }, [itemId])

  // console.log("matchDataItem------?>>>",matchDataItem)

  return (
    <div>

      <Modal
        show={showModal} onHide={handleClose} animation={false}
        size="small"
        aria-labelledby="contained-modal-title-vcenter"
        className='swap-modal-head trainer-modal'
        id="trainer-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Trainer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p> */}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <select className="form-select" id="book-select" name="trainer"
                value={values.trainer}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option >Add Trainer</option>
                {allTrainer?.map((item, idx) => {
                  return (
                    <option value={item.id} >{item.trainerName}</option>
                  )
                })}
              </select>
              {errors?.trainer && touched?.trainer && (
                <p className="input-error">{errors?.trainer}</p>
              )}
            </div>
            
            <div  id='add-btnset'>
            <Button  type='submit' disabled={loading} >
            {loading ?"Loading...":"Add"}</Button>
            </div>

            {/* <div className="two-part-head">
                                      <h6>
                                          {new Date(addTrainer.dateOfBooking).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})  }
                                        </h6>
                                        <h6>{addTrainer.vehicle}</h6>
                                        <small>Client</small>
                                        <span>{addTrainer.name}</span>
                                        <small>Booking Ref. no. </small>
                                        <span>{addTrainer.bookingRefNo}</span>
                                        <small>Driving License no. </small>
                                        <span>{addTrainer.licenseNo}</span>
                                        <small>Date Booking </small>
                                        <p>{addTrainer.dateOfBooking}</p>
                                        <span>
                                          {" "}
                                          {addTrainer.dateOfBooking} <strong>(First Booking)</strong>
                                        </span>
                                      </div> */}
          </form>
        </Modal.Body>
      
      </Modal>
    </div>
  )
}

export default AddTrainerModal