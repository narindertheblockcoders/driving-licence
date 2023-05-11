import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AddSchWData from "./AddSchWData";
import $ from "jquery"

const AddScheduleModal = ({ show, setShow, trainerName, trainerId, date, year }) => {
  // console.log(trainerName,"to see props are working or not")
  // console.log(date,"to  date")
  // console.log(year,"to see year")
  // console.log(date,name,year,"date___________")

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // show={show} onHide={handleClose} animation={false}

  const [secondShow, setSecondShow] = useState()
  const [selectTrainer, setSelectSchedul] = useState()


  async function modalShowFn(e) {
    console.log(e, "class here")
    if (selectTrainer == null) {
      toast.error("Please select schedule type.")
    } else {
      setSecondShow(e)
    }

  }

  console.log(secondShow, "second toggle")

  return (
    <>
      <ToastContainer />
      <div class="modal add-first-modal" id="exampleModalToggle3"
        aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">
                Add Schedule
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="first-body">
              <span> Select Type of Schedule</span>
              <div class="main-redio">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="1"
                    onClick={(e) => setSelectSchedul(e.target.value)}
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Only Training
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="2"
                    onClick={(e) => setSelectSchedul(e.target.value)}
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Training and Test
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="3"
                    onClick={(e) => setSelectSchedul(e.target.value)}
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    Only Test
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                onClick={() => modalShowFn("modal")}
                data-bs-target="#exampleModalToggle4"
                data-bs-toggle={secondShow ? "modal" : ""}
                class="btn btn-primary model-next"
              >

                Next
              </button>
            </div>
          </div>
        </div>
      </div>


      <AddSchWData trainerId={{ selectTrainer, date, year, trainerName, trainerId }} />
    </>

  );
};

export default AddScheduleModal;
