import React from "react";
function Schedule() {

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
            <a className="nav-link" aria-current="page" href="index.html">
              Booking
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">
              Schedule
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="trainers.html">
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
  <section className="booking-tabs" id="schedule-booking">
    <div className="container">
      <div className="head-booking">
        <h2>Bookings</h2>
      </div>
      <div className="inner-tabs-head">
        <div className="left-tabss">
          <h6>
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
        <div className="texts-tab">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex={0}
            >
              <div className="innerpart-tabs Schedule" id="common-cls">
                <div className="three-part">
                  <div className="same-one-part">
                    <div className="head-one">
                      <h3>Cleveland</h3>
                      <a href="">View Schedule</a>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>9:30 AM</h5>
                        {/* <a href="#" class="dummy-btn-one">Dummy</a> */}
                      </div>
                      <div className="head-one-one">
                        <a href="#">
                          <img src="img/Icon feather-edit.svg" alt="" />
                        </a>
                        <a href="#" className="head-one-two">
                          Swap
                        </a>
                        <a
                          href="#"
                          className="head-one-two"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Add Trainer
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog train-dialog">
                              <div className="modal-content train-content">
                                <div className="modal-header train-header">
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body addtrain-select">
                                  <h2>Add Trainer</h2>
                                  <select
                                    className="form-select form-select-lg mb-3 train-select"
                                    aria-label=".form-select-lg example"
                                  >
                                    <option selected="">Select Client</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                  </select>
                                  <div className="example-modal">
                                    {/* Button trigger modal */}
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal11"
                                    >
                                      Launch demo modal
                                    </button>
                                    {/* Modal */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                      <small>Booking Ref. no. </small>
                      <span>3253066220</span>
                      <small>Driving License no. </small>
                      <span>109534908</span>
                      <small>Date Booking </small>
                      <p>11 Dec 2023</p>
                      <span>
                        {" "}
                        8 Dec 2021 <strong>(First Booking)</strong>
                      </span>
                      <div className="schedule_client1">
                        <small>Client</small>
                        <span> James (0435906388)</span>
                        <div className="schedule_payment">
                          <div className="left-payment">
                            <small>Payment Status</small>
                            <span>Partial Payment</span>
                          </div>
                          <div className="right-payment">
                            <a href="">Payment</a>
                          </div>
                        </div>
                      </div>
                      <div className="schedule_client2">
                        <small>Client</small>
                        <span> Clare (0435906388)</span>
                        <div className="schedule_payment1">
                          <div className="left-payment1">
                            <small>Payment Status</small>
                            <span>Partial Payment</span>
                          </div>
                          <div className="right-payment1">
                            <a href="">Payment</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Next modal Html Starts */}
                    <div
                      className="modal fade"
                      id="exampleModal11"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel11"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog trainnext-dialog">
                        <div className="modal-content trainnext-content">
                          <div className="modal-header trainnext-header">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body trainnext-body">
                            <h2>Add Trainer</h2>
                            <select
                              className="form-select form-select-lg mb-3 trainnext-select"
                              aria-label=".form-select-lg example"
                            >
                              <option selected=""> William (0435906388)</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                            <div className="trainnext-box">
                              <h5>9:30 AM</h5>
                              <h6>HR Road Ranger</h6>
                              <small>Client</small>
                              <span> William (0435906388)</span>
                              <small>Booking Ref. no. </small>
                              <span>3253066220</span>
                              <small>Driving License no. </small>
                              <span>109534908</span>
                              <small>Date Booking </small>
                              <p>11 Dec 2023</p>
                              <p>8 Dec 2021 (First Booking)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Next modal Html ends */}
                    {/* copy */}
                    <a href="#" className="dummy-btn-one">
                      Dummy
                    </a>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>9:30 AM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#">
                          <img src="img/Icon feather-edit.svg" alt="" />
                        </a>
                        <a href="#" className="head-one-two">
                          Swap
                        </a>
                        <a href="#" className="head-one-two">
                          Add Trainer
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                      <small>Booking Ref. no. </small>
                      <span>3253066220</span>
                      <small>Driving License no. </small>
                      <span>109534908</span>
                      <small>Date Booking </small>
                      <p>11 Dec 2023</p>
                      <span>
                        {" "}
                        8 Dec 2021 <strong>(First Booking)</strong>
                      </span>
                    </div>
                  </div>
                  <div className="same-two-part">
                    <div className="head-one">
                      <h3>Wynnum</h3>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>9:30 AM</h5>
                        {/* <a href="#" class="dummy-btn-one">Dummy</a> */}
                      </div>
                      <div className="head-one-one">
                        <a href="#">
                          <img src="img/Icon feather-edit.svg" alt="" />
                        </a>
                        <a href="#" className="head-one-two">
                          Swap
                        </a>
                        <a href="#" className="head-one-two">
                          Add Trainer
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                      <small>Booking Ref. no. </small>
                      <span>3253066220</span>
                      <small>Driving License no. </small>
                      <span>109534908</span>
                      <small>Date Booking </small>
                      <p>11 Dec 2023</p>
                      <span>
                        {" "}
                        8 Dec 2021 <strong>(First Booking)</strong>
                      </span>
                    </div>
                    <a href="#" className="dummy-btn-one">
                      Dummy
                    </a>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>9:30 AM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#">
                          <img src="img/Icon feather-edit.svg" alt="" />
                        </a>
                        <a href="#" className="head-one-two">
                          Swap
                        </a>
                        <a href="#" className="head-one-two">
                          Add Trainer
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                      <small>Booking Ref. no. </small>
                      <span>3253066220</span>
                      <small>Driving License no. </small>
                      <span>109534908</span>
                      <small>Date Booking </small>
                      <p>11 Dec 2023</p>
                      <span>
                        {" "}
                        8 Dec 2021 <strong>(First Booking)</strong>
                      </span>
                    </div>
                  </div>
                  <div className="same-three-part">
                    <div className="head-one">
                      <h3>Logan</h3>
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
            >
              <div className="innerpart-tabs" id="common-cls">
                <div className="three-part">
                  <div className="same-one-part">
                    <div className="head-one">
                      <h3>Cleveland</h3>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>9:30 AM</h5>
                      </div>
                      <div className="head-one-one">
                        <a
                          href=""
                          className="head-one-two"
                          data-bs-target="#exampleModalToggle"
                          data-bs-toggle="modal"
                        >
                          Reschedule
                        </a>
                        {/* model */}
                        <div
                          className="modal custom-modell fade"
                          id="exampleModalToggle"
                          aria-hidden="true"
                          aria-labelledby="exampleModalToggleLabel"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id="exampleModalToggleLabel"
                                >
                                  Swap Bookings
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />
                              </div>
                              <div className="modal-body" id="modal-mains">
                                <div className="modall-bodys">
                                  <small>Current Booking Date </small>
                                  <span>16 Dec 2021</span>
                                </div>
                                <div className="input-main">
                                  <div className="sclient-box">
                                    <div className="input-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Client Name"
                                        aria-describedby="basic-addon1"
                                      />
                                    </div>
                                    <div className="input-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Client Phone"
                                        aria-describedby="basic-addon1"
                                      />
                                    </div>
                                  </div>
                                  <div className="sclient-box">
                                    <div className="input-group mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Booking Ref. no."
                                        aria-describedby="basic-addon1"
                                      />
                                    </div>
                                    <div className="input-group">
                                      <select
                                        className="form-select"
                                        aria-label="Default select example mb-3"
                                      >
                                        <option selected="">Logan</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="sclient-box">
                                    <div className="mb-3 booking-row">
                                      <input
                                        type="date"
                                        className="form-control"
                                        id="book-input"
                                        placeholder="Date of Booking"
                                      />
                                    </div>
                                    <div className=" booking-row">
                                      <input
                                        type="time"
                                        className="form-control"
                                        id="book-input"
                                        placeholder="Time"
                                      />
                                    </div>
                                  </div>
                                  <div className="modal-btn-custom">
                                    <a
                                      href="add-schedule.html"
                                      className="reschedule"
                                    >
                                      Reschedule Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="modal fade"
                          id="exampleModalToggle2"
                          aria-hidden="true"
                          aria-labelledby="exampleModalToggleLabel2"
                          tabIndex={-1}
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id="exampleModalToggleLabel2"
                                >
                                  Modal 2
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                />
                              </div>
                              <div className="modal-body">
                                Hide this modal and show the first with the
                                button below.
                              </div>
                              <div className="modal-footer">
                                <button
                                  className="btn btn-primary"
                                  data-bs-target="#exampleModalToggle"
                                  data-bs-toggle="modal"
                                >
                                  Back to first
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button> */}
                        {/* model */}
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                      <small>Booking Ref. no. </small>
                      <span>3253066220</span>
                      <small>Driving License no. </small>
                      <span>109534908</span>
                      <small>Date Booking </small>
                      <p>11 Dec 2023</p>
                      <span>
                        {" "}
                        8 Dec 2021 <strong>(First Booking)</strong>
                      </span>
                    </div>
                    {/* copy */}
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>9:30 AM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="head-one-two">
                          Reschedule
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                      <small>Booking Ref. no. </small>
                      <span>3253066220</span>
                      <small>Driving License no. </small>
                      <span>109534908</span>
                      <small>Date Booking </small>
                      <p>11 Dec 2023</p>
                      <span>
                        {" "}
                        8 Dec 2021 <strong>(First Booking)</strong>
                      </span>
                    </div>
                  </div>
                  <div className="same-two-part">
                    <div className="head-one">
                      <h3>Wynnum</h3>
                    </div>
                    <div className="head-one-main">
                      <div className="head-one-one">
                        <h5>9:30 AM</h5>
                      </div>
                      <div className="head-one-one">
                        <a href="#" className="head-one-two">
                          Reschedule
                        </a>
                      </div>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                      <small>Booking Ref. no. </small>
                      <span>3253066220</span>
                      <small>Driving License no. </small>
                      <span>109534908</span>
                      <small>Date Booking </small>
                      <p>11 Dec 2023</p>
                      <span>
                        {" "}
                        8 Dec 2021 <strong>(First Booking)</strong>
                      </span>
                    </div>
                    <div className="two-part-head">
                      <h6>HR Road Ranger</h6>
                      <small>Client</small>
                      <span> William (0435906388)</span>
                      <small>Booking Ref. no. </small>
                      <span>3253066220</span>
                      <small>Driving License no. </small>
                      <span>109534908</span>
                      <small>Date Booking </small>
                      <p>11 Dec 2023</p>
                      <span>
                        {" "}
                        8 Dec 2021 <strong>(First Booking)</strong>
                      </span>
                    </div>
                  </div>
                  <div className="same-three-part">
                    <div className="head-one">
                      <h3>Logan</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
export default Schedule;