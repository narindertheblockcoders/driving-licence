import React from "react";

function Traningtest() {

    return(
        <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Driving</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
    integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
    integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html">
        Driving Schedule Software
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="index.html">
              Booking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Schedule
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trainers.html">
              Trainers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="client.html">
              Clients
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search" id="nav-selects">
          <span>
            <a href="#">
              <img src="img/Subtraction 1.svg" alt="" />
            </a>
          </span>
          <select className="form-select" aria-label="Default select example">
            <option selected="">Admin</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </form>
      </div>
    </div>
  </nav>
  {/* booking-tabs*/}
  <section className="booking-tabs" id="training-test">
    <div className="container">
      <div className="head-booking">
        <h2>Schedule</h2>
      </div>
      <div className="inner-tabs-head">
        <div className="left-tabss">
          <h6>
            {/* <input type="text" id="datepicker" /> */}
            <span>
              <img src="img/Path - arrow-expand-left.png" alt="" />
            </span>{" "}
            2023{" "}
            <small>
              <img src="img/arrow-expand-right.png" alt="" />
            </small>
          </h6>
        </div>
        <div className="right-tabss">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <img src="img/Icon feather-search.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="main-tabs">
        <div className="owl-carousel owl-theme">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                {/* today<br> */}
                26 Jan
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                27 Jun
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                28 Jan
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contacts-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contacts"
                type="button"
                role="tab"
                aria-controls="pills-contacts"
                aria-selected="false"
              >
                29 Jan
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contactss-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contactss"
                type="button"
                role="tab"
                aria-controls="pills-contactss"
                aria-selected="false"
              >
                30 Jan
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profilee-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profilee"
                type="button"
                role="tab"
                aria-controls="pills-profilee"
                aria-selected="false"
              >
                31 Jun
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contactt-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contactt"
                type="button"
                role="tab"
                aria-controls="pills-contactt"
                aria-selected="false"
              >
                1 Fab
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fab2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fab2"
                type="button"
                role="tab"
                aria-controls="pills-fab2"
                aria-selected="false"
              >
                2 Fab
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fab3-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fab3"
                type="button"
                role="tab"
                aria-controls="pills-fab3"
                aria-selected="false"
              >
                3 Fab
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fab4-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fab4"
                type="button"
                role="tab"
                aria-controls="pills-fab4"
                aria-selected="false"
              >
                4 Fab
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fab5-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fab5"
                type="button"
                role="tab"
                aria-controls="pills-fab5"
                aria-selected="false"
              >
                5 Fab
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fab6-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fab6"
                type="button"
                role="tab"
                aria-controls="pills-fab6"
                aria-selected="false"
              >
                6 Fab
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fab7-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fab7"
                type="button"
                role="tab"
                aria-controls="pills-fab7"
                aria-selected="false"
              >
                7 Fab
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fab8-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fab8"
                type="button"
                role="tab"
                aria-controls="pills-fab8"
                aria-selected="false"
              >
                8 Fab
              </button>
            </li>
          </ul>
        </div>
        <div className="texts-tab" id="training">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div className="innerpart-tabs" id="common-cls">
                <div className="three-part" id="traing-main">
                  <div className="same-one-part">
                    <div className="head-one">
                      <h3>Brett</h3>
                    </div>
                    <a href="#" className="t-test">
                      Training &amp; Test
                    </a>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>7:30 AM - 9:15 AM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="swap-trainer">
                          Swap Trainer
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Auto training</h6>
                      <h4>Test at 9:30</h4>
                      <small>Location </small>
                      <span>Logan</span>
                      <small>Client</small>
                      <div className="training-booking">
                        <span> William (0435906388)</span>
                        <a href="#" className="view-booking">
                          View Bookings
                        </a>
                      </div>
                      <div className="tt-payment">
                        <ul>
                          <li>
                            <strong>Payment Status</strong>
                          </li>
                          <li>Pending</li>
                        </ul>
                        <ul>
                          <li>
                            <strong>Amount</strong>
                          </li>
                          <li>$500</li>
                        </ul>
                        <ul>
                          <li>
                            <a href="">Payment Done</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="head-one-three">
                        Training
                      </a>
                    </div>
                    {/*  */}
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>09:30 AM - 12:30 PM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="swap-trainer">
                          Swap Trainer
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Location </small>
                      <span>Logan</span>
                      <small>Client</small>
                      <div className="training-booking">
                        <span> William (0435906388)</span>
                        <a href="#" className="view-booking">
                          View Bookings
                        </a>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="head-one-four">
                        Test
                      </a>
                    </div>
                    {/* <a href="#" className="head-one-four">Test</a> */}
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>09:30 AM</h5>
                      </div>
                      <div className="head-one-one">
                        {/* <a href="#" className="head-one-three">Training</a> */}
                        <a href="#" className="swap-trainer">
                          Swap Trainer
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Auto training</h6>
                      <small>Location </small>
                      <span>Logan</span>
                      <small>Client</small>
                      <div className="training-booking">
                        <span> William (0435906388)</span>
                        <a href="#" className="view-booking">
                          View Bookings
                        </a>
                      </div>
                    </div>
                    <div className="timeset">
                      <ul>
                        <li>12:30 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>1:00 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>1:30 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a href="#" className="head-one-four">
                        Test
                      </a>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>02:10 PM - 3:10 PM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="swap-trainer">
                          Swap Trainer
                        </a>
                        {/* <a href="#" className="head-one-four">Test</a> */}
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Auto training</h6>
                      <small>Location </small>
                      <span>Logan</span>
                      <small>Client</small>
                      <div className="training-booking">
                        <span> James (0435906388)</span>
                        <a href="#" className="view-booking">
                          View Bookings
                        </a>
                      </div>
                    </div>
                    {/* copy */}
                    <div className="timeset">
                      <ul>
                        <li>3:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>4:00 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>4:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>5:00 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>5:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>6:00 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>6:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>7:00 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>7:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* -----------------------------------------------------2nd------------------------------------------------------------------- */}
                  <div className="same-two-part">
                    <div className="head-one">
                      <h3>Jashan</h3>
                    </div>
                    <div className="timeset">
                      <ul>
                        <li>7:30 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>8:00 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>8:30 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>9:00 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a href="#" className="head-one-three">
                        Training
                      </a>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>02:10 PM - 3:10 PM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="swap-trainer">
                          Swap Trainer
                        </a>
                        {/* <a href="#" className="head-one-three">Training</a> */}
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Auto</h6>
                      <small>Location </small>
                      <span>Logan</span>
                      <small>Client</small>
                      <div className="training-booking">
                        <span> Sarbjit (0435906388)</span>
                        <a href="#" className="view-booking">
                          View Bookings
                        </a>
                      </div>
                    </div>
                    <div className="timeset">
                      <ul>
                        <li>12:00 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>12:30 AM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>1:00 PM - 2:00 PM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="head-one-three">
                          Training
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Auto</h6>
                      <small>Location </small>
                      <span> Cleveland</span>
                      <small>Client</small>
                      <div className="training-booking">
                        <span> Awais (0435906388)</span>
                        <a href="#" className="view-booking">
                          View Bookings
                        </a>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="head-one-three">
                        Training
                      </a>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>2:00 PM - 4:00 PM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="swap-trainer">
                          Swap Trainer
                        </a>
                        {/* <a href="#" className="head-one-three">Training</a> */}
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Auto</h6>
                      <small>Location </small>
                      <span> Cleveland</span>
                      <small>Client</small>
                      <div className="training-booking">
                        <span> Parm (0435906388)</span>
                        <a href="#" className="view-booking">
                          View Bookings
                        </a>
                      </div>
                    </div>
                    <div className="timeset">
                      <ul>
                        <li>4:00 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>4:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>5:00 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>5:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>6:00 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>6:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>7:00 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                      <ul>
                        <li>7:30 PM</li>
                        <li>
                          <div className="opicty">
                            <a href="#" className="hover-btns">
                              Add Schedule
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="same-three-part">
                    <div className="head-one">
                      <h3>Akbar</h3>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>9:00 AM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="swap-trainer">
                          Swap Trainer
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head" id="new-end">
                      <h6>MC Auto</h6>
                      <small>Location </small>
                      <span> Wynnum</span>
                      <small>Client</small>
                      <div className="training-booking">
                        <span> Harry (0435906388)</span>
                        <a href="#" className="view-booking">
                          View Bookings
                        </a>
                      </div>
                    </div>
                    <div className="timeset"></div>
                    <div className="end-this">
                      <a href="" className="btn-endthis">
                        End this Session
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            ></div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-contacts"
              role="tabpanel"
              aria-labelledby="pills-contacts-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-contactss"
              role="tabpanel"
              aria-labelledby="pills-contactss-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-profilee"
              role="tabpanel"
              aria-labelledby="pills-profilee-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-contactt"
              role="tabpanel"
              aria-labelledby="pills-contactt-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-fab2"
              role="tabpanel"
              aria-labelledby="pills-fab2-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-fab3"
              role="tabpanel"
              aria-labelledby="pills-fab3-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-fab4"
              role="tabpanel"
              aria-labelledby="pills-fab4-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-fab5"
              role="tabpanel"
              aria-labelledby="pills-fab5-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-fab6"
              role="tabpanel"
              aria-labelledby="pills-fab6-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-fab7"
              role="tabpanel"
              aria-labelledby="pills-fab7-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="pills-fab8"
              role="tabpanel"
              aria-labelledby="pills-fab8-tab"
              tabIndex={0}
            >
              ...
            </div>
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
  {/*
   */}
</>

    )

}
export default Traningtest;