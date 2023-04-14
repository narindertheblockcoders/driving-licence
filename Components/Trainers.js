import React from "react";
import Navbar from "./ui/Navbar";

function Trainers() {

    return(
        <>

 <Navbar/>
  {/* section-traner-tab */}
  <section className="trainers">
    <div className="head-trainers">
      <h2>Trainers</h2>
    </div>
    <div className="trainers-tabs">
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3 trainers-flex"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Brett
          </button>
          <button
            className="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Jashan
          </button>
          <button
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Akbar
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
            tabIndex={0}
          >
            <div className="trainers-box">
              <div className="trainerinnerpart-tabs" id="trainercommon-cls">
                <div className="trainerthree-part">
                  <div className="trainersame-one-part">
                    <div className="trainerhead-one">
                      <h3>27 Jan 2023</h3>
                    </div>
                    <div className="trainerhead-one-main">
                      <div className="trainerhead-one-one">
                        <h5>07:15 AM - 9:15 AM</h5>
                      </div>
                      <div className="trainerhead-one-one">
                        <a href="#" className="trainerhead-one-two">
                          Training &amp; Testing
                        </a>
                      </div>
                    </div>
                    <div className="trainertwo-part-head">
                      <h6>HR Road Ranger</h6>
                      <strong>Test at 9:30</strong>
                      <small>Location</small>
                      <span> Logan</span>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                    </div>
                    {/* copy */}
                    <div className="trainerhead-one-main">
                      <div className="trainerhead-one-one">
                        <h5>9:30 AM</h5>
                      </div>
                      <div className="trainerhead-one-one">
                        <a href="#" className="trainerhead-one-two">
                          Training &amp; Testing
                        </a>
                      </div>
                    </div>
                    <div className="trainertwo-part-head">
                      <h6>HR Auto training</h6>
                      <strong>Test at 9:30</strong>
                      <small>Location</small>
                      <span> Logan</span>
                      <small>Client</small>
                      <span> Anthony (0435906388)</span>
                    </div>
                    <div className="trainer-timings">
                      <span>12 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>01 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>01 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    {/* copy */}
                    <div className="trainerhead-one-main">
                      <div className="trainerhead-one-one">
                        <h5>09:30 AM - 12:30 PM</h5>
                      </div>
                      <div className="trainerhead-one-one">
                        <a href="#" className="trainerhead-one-two">
                          Training &amp; Testing
                        </a>
                      </div>
                    </div>
                    <div className="trainertwo-part-head">
                      <h6>HR Auto training</h6>
                      <strong>Test at 9:30</strong>
                      <small>Location</small>
                      <span> Logan</span>
                      <small>Client</small>
                      <span> Anthony (0435906388)</span>
                    </div>
                    <div className="trainer-timings">
                      <span>03 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>04 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>04 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>05 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>05 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>06 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>06 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>07 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>07 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="trainersame-two-part">
                    <div className="trainerhead-one">
                      <h3>28 Jan 2023</h3>
                    </div>
                    <div className="trainer-timings">
                      <span>7 : 00 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>7 : 30 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>8 : 00 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>8 : 30 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainerhead-one-main">
                      <div className="trainerhead-one-one">
                        <h5>9:30 AM</h5>
                        <div className="trainer-opicty">
                          <a
                            href=""
                            className="trainerhover-btns"
                            data-bs-target="#exampleModalToggle3"
                            data-bs-toggle="modal"
                          >
                            Add Schedule
                          </a>
                        </div>
                      </div>
                      <div className="trainerhead-one-one">
                        <a href="#" className="trainer-training">
                          Training
                        </a>
                      </div>
                    </div>
                    <div className="trainertwo-part-head">
                      <h6>HR Auto</h6>
                      <small>Location</small>
                      <span> Logan</span>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                    </div>
                    <div className="trainer-timings">
                      <span>12 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>12 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>01 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>01 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>02 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>02 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>03 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>03 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>04 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>04 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>05 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>05 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>06 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>06 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>07 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>07 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="trainersame-three-part">
                    <div className="trainerhead-one">
                      <h3>29 Jan 2023</h3>
                    </div>
                    <div className="trainer-timings">
                      <span>7 : 00 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>7 : 30 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>8 : 00 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>8 : 30 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>9 : 00 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>9 : 30 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>10 : 00 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>10 : 30 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>11 : 00 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>11 : 30 AM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>12 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>12 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>01 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>01 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>02 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>02 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>03 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>03 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>04 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>04 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>05 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>05 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>06 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>06 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>07 : 00 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                    <div className="trainer-timings">
                      <span>07 : 30 PM</span>
                      <div className="trainer-opicty">
                        <a
                          href=""
                          className="trainerhover-btns"
                          data-bs-target="#exampleModalToggle3"
                          data-bs-toggle="modal"
                        >
                          Add Schedule
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabIndex={0}
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
            tabIndex={0}
          >
            ...
          </div>
        </div>
      </div>
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
export default Trainers;