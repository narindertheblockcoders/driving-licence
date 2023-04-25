import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AddSchWData from "./AddSchWData";

const AddScheduleModal = (show, setShow) => {
  const handleClose = () => setShow(false);
  const [secondShow, setSecondShow] = useState()
  const [selectTrainer, setSelectTrainer] = useState()


  async function modalShowFn(e){
    console.log(e,"class here")
    if(selectTrainer == null){
      toast.error("Please select schedule type.")
    }else{
      setSecondShow(e)
    }
  }

  console.log(selectTrainer,"second toggle")

  return (
    <>
    <ToastContainer/>
      <div  class="modal add-first-modal" id="exampleModalToggle3"
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
                    onClick={(e)=>setSelectTrainer(e.target.value)}
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
                    onClick={(e)=>setSelectTrainer(e.target.value)}
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
                    onClick={(e)=>setSelectTrainer(e.target.value)}
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    Only Test
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary model-next"
                data-bs-toggle={secondShow}
                data-bs-target="#exampleModalToggle4"
                onClick={()=> modalShowFn("modal")}
              >
                {" "}
                Next
              </button>
            </div>
          </div>
        </div>
      </div>


<AddSchWData trainerId={selectTrainer} />
    </>

  );
};

export default AddScheduleModal;
