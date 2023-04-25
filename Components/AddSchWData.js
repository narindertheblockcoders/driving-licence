import React, { useEffect, useState } from "react";

const AddSchWData = (trainerId) => {
    const [trainersId, setTrainersId] = useState();
    const [firstType, setFirstType] = useState()
    console.log(trainerId, "trainerID");
  
    useEffect(() => {
      setTrainersId(trainerId);
      if(trainerId == 1){
          console.log("first is here")
          setFirstType(1)
      }
      if(trainerId == 2){
          console.log("second is here")
      }
      if(trainerId == 3){
          console.log("third is here")
      }
    }, []);
  
    console.log(trainerId,"trainersId here")
  

  return (
    <>
      <div
        class="modal snd-modal"
        id="exampleModalToggle4"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel4"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel4">
                Add Schedule
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="snd-body">
              <div class="mainsnd-body">
                <div class="flex-snd">
                  <span>Trainer </span>
                  <small>Brett</small>
                </div>

                <div class="flex-snd">
                  <span>Time Slot </span>
                  <small>07:00 AM </small>
                </div>

                <div class="flex-snd">
                  <span>Date</span>
                  <small> 29 Jan 2023 </small>
                </div>
              </div>

              <div class="snd-input-bottom">
                <div class="input-group " id="input-group">
                  <div class="snd-input-top">
                    <div class="input-group" id="input-group">
                      <div class="autoflexx mb-0">
                        <small>Time Start</small>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="hh:mm"
                          aria-label="Username"
                        />
                      </div>

                      <span class="input-group-text">to</span>
                      <div class="autoflexx mb-0">
                        <small>Time End</small>

                        <input
                          type="text"
                          class="form-control"
                          placeholder="hh:mm"
                          aria-label="Server"
                        />
                      </div>
                    </div>
                  </div>
                  <span class="input-group-text"></span>

                  {trainersId == 3 ? (
                 

                    <div className="autoflexx" id="autoflexx">
                      <small>Select Location</small>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div class="snd-input-bottom">
                {firstType == trainerId ?     console.log(trainerId, "a gya return ch") (
                  <div class="input-group ">
                    <div class="autoflexx">
                      <small>Select Location</small>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>{" "}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <span class="input-group-text"></span>
                    <div class="autoflexx">
                      <small>Select Vehicle Type</small>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                ) : (
                  <div class="input-group ">
                    <div class="autoflexx">
                      <small>Select Vehicle Type</small>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>{" "}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <span class="input-group-text"></span>
                    <div class="autoflexx">
                      <small>Test Time</small>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                )}

                <div class="input-group ">
                  <div class="autoflexx">
                    <small>Client Name</small>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      aria-label="name"
                    />
                  </div>

                  <span class="input-group-text"></span>
                  <div class="autoflexx">
                    <small>Client Mobile</small>

                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      aria-label="Client Mobile"
                    />
                  </div>
                </div>
              </div>
              <div class="snd-input-end">
                <div class="input-group ">
                  <div class="autoflexx">
                    <small>Add Comment</small>
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Select"
                        id="floatingTextarea2"
                        style={{ height: "70px", padding: "10px" }}
                      ></textarea>
                      {/* <label for="floatingTextarea2">Select</label> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary model-add"
                  data-bs-target="#exampleModalToggle8"
                  data-bs-toggle="modal"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- <button class="btn btn-primary" >Open first modal</button> --> */}
      </div>
    </>
  );
};

export default AddSchWData;
