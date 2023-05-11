import axios from "axios";
import React, { useEffect, useState } from "react";
import TimePicker from "react-time-picker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { useRouter } from "next/router";

const AddSchWData = (trainerId) => {
  const [timeStart, setTimeStart] = useState("00:00");
  const [timeEnd, setTimeEnd] = useState("00:00");
  const [location, setLocation] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [clientName, setClientName] = useState();
  const [clientMobile, setClientMobile] = useState();
  const [comment, setComment] = useState();
  const [testTime, setTestTime] = useState();
  const [bookLocation, setBookLocation] = useState();
  const [bookVehicle, setBookvehicle] = useState();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  // console.log(trainerId, "trainer id here")
  //errorMessage
  const [locationErr, setLocationErr] = useState(false);
  const [vehicleErr, setVehicleErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [nameErr1, setNameErr1] = useState(false);
  const [nameErr2, setNameErr2] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [mobileErr1, setMobileErr1] = useState(false);
  const [testTimeErr, setTestTimeErr] = useState(false);

  const date = new Date(trainerId?.trainerId?.year);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;

  console.log(formattedDate);

  var timeSlot = trainerId?.trainerId?.date;
  const timeSlote1 = timeSlot?.split(" ")[0];

  const router = useRouter();
  async function onlyTraining(data) {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post("/api/onlyTraining", { token, data });
      const response = res.data;
      console.log("response for only training-->", response);
      toast.success("Data added successfully");
      // setTimeout(() => {
      //   router.push("/schedule");
      // }, [1000]);
      setLoading(false);
      setDisable(false);
      console.log(response);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setDisable(false);
      toast.error("Please try again.");
    }
  }

  async function trainingTest(data) {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      const res = await axios.post("/api/trainingTest", { token, data });
      const response = res.data;
      toast.success("Data added successfully");
      setTimeout(() => {
        router.push("/schedule");
      }, [1000]);
      setLoading(false);
      setDisable(false);
      console.log(response);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setDisable(false);
      toast.error("Please try again.");
    }
  }

  async function onlyTest(data) {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.post("/api/onlyTest", { token, data });
      const response = res.data;
      console.log(response);
      toast.success("Data added successfully");
      // setTimeout(() => {
      //   router.push("/schedule");
      // }, [1000]);
      setLoading(false);
      setDisable(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setDisable(false);
      toast.error("Please try again.");
    }
  }

  async function formSubmitFirst() {
    var regex = /^[a-zA-Z ]*$/;
    const phoneRegExp = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

    setLocationErr(false);
    if (!location) {
      setLocationErr(true);
      return;
    }
    setVehicleErr(false);
    if (!vehicleType) {
      setVehicleErr(true);
      return;
    }
    setNameErr(false);
    if (!clientName) {
      setNameErr(true);
      setNameErr1(false);
      setNameErr2(false);
      return;
    }
    setNameErr1(false);
    if (!regex.test(clientName)) {
      setNameErr1(true);
      setNameErr2(false);
      setNameErr(false);
      return;
    }
    setNameErr2(false);
    if (clientName.length <= 2 || clientName.length >= 20) {
      setNameErr2(true);
      setNameErr1(false);
      setNameErr(false);
      return;
    }
    setMobileErr(false);
    if (!clientMobile) {
      setMobileErr(true);
      setMobileErr1(false);
      return;
    }
    setMobileErr1(false);
    if (!phoneRegExp.test(clientMobile)) {
      setMobileErr1(true);
      return;
    }

    const data = {
      scheduleId: trainerId.trainerId.selectTrainer,
      timeslot: timeSlote1,
      trainerId: trainerId.trainerId.trainerId,
      locationsch: location,
      vehicleTypesch: vehicleType,
      clientName: clientName,
      mobilesch: clientMobile,
      datesch: formattedDate,
      startTime: timeStart,
      endTime: timeEnd,
      comment: comment,
    };

    console.log("object data-->", data);
    if (
      !locationErr &&
      !vehicleErr &&
      !nameErr &&
      !nameErr1 &&
      !nameErr2 &&
      !mobileErr &&
      !mobileErr1
    ) {
      console.log(" hellooooooooooooooooo ji");
      onlyTraining(data);
    }
  }

  async function formSubmitSecond() {
    var regex = /^[a-zA-Z ]*$/;
    const phoneRegExp = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

    setLocationErr(false);
    if (!location) {
      setLocationErr(true);
      return;
    }
    setVehicleErr(false);
    if (!vehicleType) {
      setVehicleErr(true);
      return;
    }
    setNameErr(false);
    if (!clientName) {
      setNameErr(true);
      setNameErr1(false);
      setNameErr2(false);
      return;
    }
    setNameErr1(false);
    if (!regex.test(clientName)) {
      setNameErr1(true);
      setNameErr2(false);
      setNameErr(false);
      return;
    }
    setNameErr2(false);
    if (clientName.length <= 2 || clientName.length >= 20) {
      setNameErr2(true);
      setNameErr1(false);
      setNameErr(false);
      return;
    }
    setMobileErr(false);
    if (!clientMobile) {
      setMobileErr(true);
      setMobileErr1(false);
      return;
    }
    setMobileErr1(false);
    if (!phoneRegExp.test(clientMobile)) {
      setMobileErr1(true);
      return;
    }
    setTestTimeErr(false);
    if (!testTime) {
      setTestTimeErr(true);
      return;
    }

    const data = {
      scheduleId: trainerId.trainerId.selectTrainer,
      timeslot: timeSlote1,
      trainerId: trainerId.trainerId.trainerId,
      locationsch: location,
      vehicleTypesch2: vehicleType,
      testtime: testTime,
      clientName: clientName,
      mobilesch: clientMobile,
      datesch: formattedDate,
      startTime: timeStart,
      endTime: timeEnd,
      comment: comment,
    };

    console.log("object data2222222-->", data);
    // trainingTest(data);
    if (
      !locationErr &&
      !vehicleErr &&
      !nameErr &&
      !nameErr1 &&
      !nameErr2 &&
      !mobileErr &&
      !mobileErr1 &&
      !testTimeErr
    ) {
      console.log(" hellooooooooooooooooo ji");
      trainingTest(data);
    }
  }

  async function formSubmitThird() {
    var regex = /^[a-zA-Z ]*$/;
    const phoneRegExp = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

    setLocationErr(false);
    if (!location) {
      setLocationErr(true);
      return;
    }
    setVehicleErr(false);
    if (!vehicleType) {
      setVehicleErr(true);
      return;
    }
    setNameErr(false);
    if (!clientName) {
      setNameErr(true);
      setNameErr1(false);
      setNameErr2(false);
      return;
    }
    setNameErr1(false);
    if (!regex.test(clientName)) {
      setNameErr1(true);
      setNameErr2(false);
      setNameErr(false);
      return;
    }
    setNameErr2(false);
    if (clientName.length <= 2 || clientName.length >= 20) {
      setNameErr2(true);
      setNameErr1(false);
      setNameErr(false);
      return;
    }
    setMobileErr(false);
    if (!clientMobile) {
      setMobileErr(true);
      setMobileErr1(false);
      return;
    }
    setMobileErr1(false);
    if (!phoneRegExp.test(clientMobile)) {
      setMobileErr1(true);
      return;
    }

    const data = {
      scheduleId: trainerId.trainerId.selectTrainer,
      timeslot: timeSlote1,
      locationsch: location,
      vehicleTypesch3: vehicleType,
      testtime: testTime,
      clientName: clientName,
      mobilesch: clientMobile,
      datesch: formattedDate,
      comment: comment,
    };

    console.log("object data33333333-->", data);
    if (
      !locationErr &&
      !vehicleErr &&
      !nameErr &&
      !nameErr1 &&
      !nameErr2 &&
      !mobileErr &&
      !mobileErr1 &&
      !testTimeErr
    ) {
      console.log(" hellooooooooooooooooo ji");
      onlyTest(data);
    }
    // onlyTest(data);
  }

  async function getAllLocation() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/api/location", { token: token });
      setBookLocation(response.data.data.data);
    } catch (error) {
      console.log("error:", error);
    }
  }

  async function getAllVehicle() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/api/vehicalstype", { token: token });
      setBookvehicle(response.data.data.data);
    } catch (error) {
      console.log("error:", error);
    }
  }

  async function hideNameFunction() {
    setNameErr(false);
    setNameErr1(false);
    setNameErr2(false);
  }
  async function hideMobileFunction() {
    setMobileErr(false);
    setMobileErr1(false);
  }
  async function hideLocationFunction() {
    setLocationErr(false);
  }
  async function hideVehicleFunction() {
    setVehicleErr(false);
  }
  async function hideTestTimeFunction() {
    setTestTimeErr(false);
  }

  useEffect(() => {
    getAllLocation();
    getAllVehicle();
  }, [trainerId]);





  return (
    <>
      <ToastContainer />
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
                id="sch-modal"
              ></button>
            </div>
            <div class="modal-body" id="snd-body">
              <div class="mainsnd-body">
                {trainerId?.trainerId?.selectTrainer == 3 ? (
                  ""
                ) : (
                  <div class="flex-snd">
                    <span>Trainer </span>
                    <small>{trainerId?.trainerId?.trainerName}</small>
                  </div>
                )}

                <div class="flex-snd">
                  <span>Time Slot </span>
                  <small>{trainerId?.trainerId?.date} </small>
                </div>

                <div class="flex-snd">
                  <span>Date</span>
                  <small>{trainerId?.trainerId?.year} </small>
                </div>
              </div>

              <div class="snd-input-bottom">
                <div class="input-group " id="input-group">
                  {trainerId?.trainerId?.selectTrainer == 3 ? (
                    ""
                  ) : (
                    <>
                      <div class="snd-input-top">
                        <div class="input-group" id="input-group">
                          <div class="autoflexx mb-0">
                            <small>Time Start</small>
                            <TimePicker
                              onChange={(e) => setTimeStart(e)}
                              value={timeStart}
                              format="h:mm a"
                              disableClock={true}
                              clearIcon={null}
                            />
                          </div>

                          <span class="input-group-text">to</span>
                          <div class="autoflexx mb-0">
                            <small>Time End</small>
                            <TimePicker
                              onChange={(e) => setTimeEnd(e)}
                              value={timeEnd}
                              format="h:mm a"
                              disableClock={true}
                              clearIcon={null}
                            />
                          </div>
                        </div>
                      </div>
                      <span class="input-group-text"></span>
                    </>
                  )}

                  {trainerId?.trainerId?.selectTrainer == 1 ? (
                    ""
                  ) : (
                    <div className="autoflexx" id="autoflexx">
                      <small>Select Location</small>

                      <select
                        class="form-select"
                        onClick={hideLocationFunction}
                        aria-label="Default select example"
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option selected>Select</option>
                        {bookLocation?.map((item) => {
                          return (
                            <option value={item?.id}>{item?.location}</option>
                          );
                        })}
                      </select>
                      {locationErr && (
                        <span className="input-error">
                          Location is required
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div class="snd-input-bottom">
                {trainerId?.trainerId?.selectTrainer == 1 ? (
                  (console.log(trainerId, "trainer id this"),
                  (
                    <div class="input-group ">
                      <div class="autoflexx">
                        <small>Select Location</small>
                        <select
                          class="form-select"
                          onClick={hideLocationFunction}
                          aria-label="Default select example"
                          onChange={(e) => setLocation(e.target.value)}
                        >
                          <option selected>Select</option>{" "}
                          {bookLocation?.map((item) => {
                            return (
                              <option value={item?.id}>{item?.location}</option>
                            );
                          })}
                        </select>
                        {locationErr && (
                          <span className="input-error">
                            Location is required
                          </span>
                        )}
                      </div>
                      <span class="input-group-text"></span>
                      <div class="autoflexx">
                        <small>Select Vehicle Type</small>
                        <select
                          class="form-select"
                          onClick={hideVehicleFunction}
                          aria-label="Default select example"
                          onChange={(e) => setVehicleType(e.target.value)}
                        >
                          <option selected>Select</option>
                          {bookVehicle?.map((item) => {
                            return (
                              <option value={item?.id}>{item?.vehicle}</option>
                            );
                          })}
                        </select>
                        {vehicleErr && (
                          <span className="input-error">
                            Vehicle type is required
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div class="input-group ">
                    <div class="autoflexx">
                      <small>Select Vehicle Type</small>
                      <select
                        class="form-select"
                        onClick={hideVehicleFunction}
                        aria-label="Default select example"
                        onChange={(e) => setVehicleType(e.target.value)}
                      >
                        <option selected>Select</option>{" "}
                        {bookVehicle?.map((item) => {
                          return (
                            <option value={item?.id}>{item?.vehicle}</option>
                          );
                        })}
                      </select>
                      {vehicleErr && (
                        <span className="input-error">
                          Vehicle type is required
                        </span>
                      )}
                    </div>
                    <span class="input-group-text"></span>
                    <div class="autoflexx">
                      <small>Test Time</small>
                      {/* <select
                        class="form-select"
                        onClick={hideTestTimeFunction}
                        aria-label="Default select example"
                        onChange={(e) => setTestTime(e.target.value)}
                      >
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select> */}
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        onClick={hideTestTimeFunction}
                        format="h:mm a"
                        aria-label="Test Time"
                        defaultValue={testTime}
                        onChange={(e) => setTestTime(e.target.value)}
                      />
                      {testTimeErr && (
                        <span className="input-error">
                          Test time is required
                        </span>
                      )}
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
                      onClick={hideNameFunction}
                      aria-label="name"
                      defaultValue={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                    {nameErr && (
                      <span className="input-error">
                        Client name is required
                      </span>
                    )}
                    {nameErr1 && (
                      <span className="input-error">
                        Client name should be alphabetical
                      </span>
                    )}
                    {nameErr2 && (
                      <span className="input-error">
                        Name should be greater than 2 or less than 20 character
                      </span>
                    )}
                  </div>

                  <span class="input-group-text"></span>
                  <div class="autoflexx">
                    <small>Client Mobile</small>

                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      onClick={hideMobileFunction}
                      aria-label="Client Mobile"
                      defaultValue={clientMobile}
                      maxLength={10}
                      onChange={(e) => setClientMobile(e.target.value)}
                    />
                    {mobileErr && (
                      <span className="input-error">
                        Mobile number is required
                      </span>
                    )}
                    {mobileErr1 && (
                      <span className="input-error">
                        Mobile number is not valid
                      </span>
                    )}
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
                        defaultValue={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                {trainerId.trainerId.selectTrainer == 1 ? (
                  <button
                    class="btn btn-primary model-add"
                    onClick={() => formSubmitFirst()}
                    disabled={loading}
                  >
                    {" "}
                    {loading ? "Loading..." : "Add"}
                  </button>
                ) : (
                  ""
                )}

                {trainerId.trainerId.selectTrainer == 2 ? (
                  <button
                    class="btn btn-primary model-add"
                    onClick={() => formSubmitSecond()}
                    disabled={loading}
                  >
                    {" "}
                    {loading ? "Loading..." : "Add"}
                  </button>
                ) : (
                  ""
                )}

                {trainerId.trainerId.selectTrainer == 3 ? (
                  <button
                    class="btn btn-primary model-add"
                    onClick={() => formSubmitThird()}
                    disabled={loading}
                  >
                    {" "}
                    {loading ? "Loading..." : "Add"}
                  </button>
                ) : (
                  ""
                )}
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
