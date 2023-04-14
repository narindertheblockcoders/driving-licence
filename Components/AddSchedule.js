import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cagliostro } from "@next/font/google";
import $ from 'jquery';
import SwapModal from './SwapModal'
import AddTrainerModal from './AddTrainerModal'
import Navbar from "./ui/Navbar";
import { DatePicker } from "rsuite";
// import {FullCalendar} from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function AddSchedule() {

  const [scheduleData, setScheduleData] = useState()
  const [vehicleType, setVehicleType] = useState()
  const [booklocation, setBookLocation] = useState()
  const [searchFilter, setSearchFilter] = useState()
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [swapDataId, setSwapDataId] = useState()
  const [searchData, setSearchData] = useState()
  const [datePicker, setDatePicker] = useState()
  // const [convertedDate, setConvertedDate] = useState()
  // const[pickYear,setPickYear] = useState()
  const [yearMonth, setYearMonth] = useState()
  const [leapYear, setLeapYear] = useState()
  const [dataByDate, setDataByDate] = useState();
  const [added, setAdded] = useState(0)
  const [date3, setDate3] = useState();
  const [loading, setLoading] = useState(false);
const [itemId,setItemId] = useState()
const [open, setOpen] = React.useState(false);

  async function schedualDataFn() {
    try {

      const token = localStorage.getItem("token")
      // console.log("hello from get allschedule---------<>");
      const response = await axios.post("/api/getAllSchedule", { token: token })
      const responseData = response.data.data.data
      const result = [].concat.apply([], responseData);
      const numAscending = result?.sort((a, b) => a.dummyBooking - b.dummyBooking);
      setScheduleData(numAscending)
      // console.log("numAscending---------------->", numAscending);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function vehicalBooking() {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("/api/vehicalstype", { token })
      setVehicleType(response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }
  async function bookingLocation() {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("/api/location", { token: token })
      setBookLocation(response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }


  async function queryFn() {
    $('.owl-carousel')({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })
  }


  useEffect(() => {

    schedualDataFn()
    vehicalBooking()
    bookingLocation()
    currentDatePicker()

  }, [added])



  useEffect(() => {

   
    getDataByDate()

  }, [ leapYear, scheduleData])

  // useEffect(() => {

  //   dayPicker()
   

  // }, [convertedDate])

  function handleModalFn(e) {
    setSwapDataId(e)
    setShow(true)


  }

  function handleModalShowFn(e) {
    setItemId(e)                            
    setShowModal(true)
  }

  const SearchFn = (e) => {
 
    //  if(e.target.value ){
    //    setOpen(true);
    // }

      
    
    const search = e.target.value;
    console.log(search, 'searchhhhhhhhh');
    if (search == null || !search) {
      // schedualDataFn()
      setAdded(added + 1)
      return;
    }
    const filterData = dataByDate?.filter((item) => {
      const name = item?.name;
      // const email = item?.email;
      return name?.toLowerCase().includes(search?.toLowerCase())
    })
    // setSearchData(filterData)


    setDataByDate(filterData)

    // if(!e){

    //   setOpen(false);
    // }

   
  }

  useEffect(()=>{
    if(dataByDate){
 
      }
  },[])

  console.log(open,"open here")


  const DatePicker = (e) => {
    // console.log("hellloooooooooooo", e.target.value);
    setDate3(null)
    const dateObj = new Date(e.target.value);
    const monthStr = dateObj.toLocaleString('default', { month: 'short' });
    const formattedDateStr = `${dateObj.getFullYear()}-${monthStr}`;
    const convertedDate = formattedDateStr.split('-')[1];


    const dateObj1 = new Date(e.target.value);
    const year = dateObj1.getFullYear();
    setLeapYear(year)


    const date2 = new Date(e.target.value).toLocaleDateString();
    const d = date2.split('/')
    // console.log(date2, d, 'date 2222');

    setYearMonth(`${d[2]}-${d[1]}`)

    dayPicker(convertedDate)   
  }


  const currentDatePicker = () => {

    const dateObj = new Date();
    const monthStr = dateObj.toLocaleString('default', { month: 'short' });
    const formattedDateStr = `${dateObj.getFullYear()}-${monthStr}`;
    // console.log(formattedDateStr, monthStr, dateObj, 'fffffffffffffffffffffffffff')

    //     const dateObj1 = new Date();
    // const monthStr1 = dateObj1.toLocaleString('default', { month: 'long' });
    // const formattedDateStr1 = `${monthStr1} ${dateObj1.getFullYear()}`;

    const date2 = new Date().toLocaleDateString();
    const d = date2.split('/')
    // console.log(date2, d, 'date 2222');




    const convertedDate = formattedDateStr.split('-')[1];
    console.log(convertedDate,'ccccccccccccccccccccnnnnnnn')
    // console.log(formattedDateStr, '<=========@@@@@@@@@@@@@@====formattexd');
    // const formattedDate = formattedDateStr?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    setYearMonth(`${d[2]}-${d[1]}`);
    setDate3(`${d[2]}-${d[1]}`)
    // setConvertedDate(monthName)
    dayPicker(convertedDate)
    

  }

  const dayPicker = (convertedDate) => {
    var temp = []
    console.log('hello');
    if (convertedDate == "Jan" || convertedDate == "Mar" || convertedDate == "May" || convertedDate == "Jul" || convertedDate == "Aug" || convertedDate == "Oct" || convertedDate == "Dec") {
      for (let i = 1; i <= 31; i++) {
        temp.push(`${i} ${convertedDate}`)
      }
    }


    if (convertedDate == "Jun" || convertedDate == "Nov" || convertedDate == "Apr" || convertedDate == "Sep") {
      for (let i = 1; i <= 30; i++) {
        temp.push(`${i} ${convertedDate}`)
      }
    }


    if (convertedDate == "Feb") {
      // console.log("onlyYear------@###@@@@@@@@@@@@@@@@@@@@@#######################---->>>",leapYear);
      if (leapYear % 4 == 0 && (0 != leapYear % 100) || (0 == leapYear % 400)) {
        // console.log("onlyYear---------->>>",leapYear);
        for (let i = 1; i <= 29; i++) {
          temp.push(`${i} ${convertedDate}`)
        }
      }
      else {
        for (let i = 1; i <= 28; i++) {
          temp.push(`${i} ${convertedDate}`)
        }
      }
    }
 
    console.log(temp,'tempppppppppppppppppp');

    setDatePicker(temp)
  }

  // console.log(" yearMonth value out side function -->", yearMonth)


  async function filterData(item) {

    // console.log(" filterData object item-->",item);
    const filterValue = scheduleData?.filter((item2) => {
      const dateValue = item2.dateOfBooking
      const date = new Date(dateValue);
      const day = date.getUTCDate().toString();
      const month = date.toLocaleString('default', { month: 'short' });
      const formattedDate = `${day} ${month}`;

      return formattedDate.includes(item)

    })

   
    setDataByDate(filterValue)
    // setSearchData(filterValue)

    // setScheduleData(filterValue)
  }

  async function getDataByDate() {
    const date1 = new Date();
    const day1 = date1.getUTCDate().toString();
    const month1 = date1.toLocaleString('default', { month: 'short' });
    const formattedDate1 = `${day1} ${month1}`;

    const filterValue = scheduleData?.filter((item2) => {
      const dateValue = item2.dateOfBooking
      const date = new Date(dateValue);
      const day = date.getUTCDate().toString();
      const month = date.toLocaleString('default', { month: 'short' });
      const formattedDate = `${day} ${month}`;
      return formattedDate === formattedDate1
    })
    setDataByDate(filterValue)
    // setSearchData(filterValue)

  }
 
  return (
    <>
      <Navbar />
      <section className="booking-tabs" id="add-schedule">
        <div className="container">
          <div className="head-booking">
            <h2>Bookings</h2>
          </div>
          <div className="inner-tabs-head">
            <div className="left-tabss">
              <h6>
                {/* <input type="text" id="datepicker" /> */}
                <span>

                  <img src="img/Path - arrow-expand-left.png" alt="" />


                </span>{" "}



                <input type="month" id="start" onChange={(e) => DatePicker(e)} name="start"

                  min="2018-03" value={yearMonth}></input>


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
                  placeholder="Search by name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => SearchFn(e)}
                
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
                {datePicker?.map((item) => {
                  return (
                    <li className="nav-item" role="presentation">

                      <button
                        className="nav-link "
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                        onClick={() => filterData(item)}
                      >
                        {item}
                      </button>

                    </li>
                  )
                })}

                {/* <li className="nav-item" role="presentation">
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
                </li> */}
                {/* <li className="nav-item" role="presentation">
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
                </li> */}
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
                  <div className="innerpart-tabs" id="common-cls">
                    <div className="three-part">

                      <div className="same-one-part">
                        {/* <div className="head-one">
                          <h3>Cleveland</h3>
                        </div> */}
                        <div className="head-one-main">
                          {/* <div className="head-one-one">
                            <h5>9:30 AM</h5>
                            <a href="#" className="dummy-btn-one">
                              Dummy
                            </a>
                          </div> */}
                          {/* <div className="head-one-one">
                            <a href="#">
                              <img src="img/Icon feather-edit.svg" alt="" />
                            </a>
                            <a href="#" className="head-one-two">
                              Swap
                            </a>
                          </div> */}
                          {/* <div className="head-one-one">
                            <a href="#" className="head-one-two">
                              Add Trainer
                            </a>
                          </div> */}
                        </div>

                        {/* <div className="timeset">
                          <ul>
                            <li>9:30 AM</li>
                            <li>10:00 AM</li>
                            <li>10:30 AM</li>
                            <li>11:00 AM</li>
                            <li>11:30 AM</li>
                            <li>12:00 PM</li>
                            <li>12:30 PM</li>
                          </ul>
                        </div> */}
                        {/* copy */}
                        <div className="head-one-main">
                          {/* <div className="head-one-one">
                            <h5>9:30 AM</h5>
                            <a href="#" className="dummy-btn-one">
                              Dummy
                            </a>
                          </div> */}
                          {/* <div className="head-one-one">
                            <a href="#">
                              <img src="img/Icon feather-edit.svg" alt="" />
                            </a>
                            <a href="#" className="head-one-two">
                              Swap
                            </a>
                          </div> */}
                        </div>

                        {/* <div className="timeset">
                          <ul>
                            <li>01:30 AM</li>
                            <li>02:00 AM</li>
                            <li>02:30 AM</li>
                            <li>03:00 AM</li>
                            <li>03:30 AM</li>
                            <li>04:00 PM</li>
                            <li>04:30 PM</li>
                          </ul>
                        </div> */}
                      </div>

                      {booklocation?.map((item, idx) => {
                        return (
                          <>

                            <div key={idx} className="same-two-part ">
                              <div className="head-one">
                                <h3>{item.place}</h3>
                              </div>

                              {dataByDate?.map((item2, idx2) => {
                                if (item2?.location === item?.id) {
                                  return (
                                    <>
                                      <div key={idx2} className="head-one-main">
                                        {item2?.location === item?.id && item2.dummyBooking == 1 ?
                                          <div className="head-one-one">
                                            <a href="#" className="dummy-btn-one">
                                              Dummy
                                            </a>
                                          </div> : null}

                                        <div className="head-one-one">
                                          <a href="#">
                                            <img src="img/Icon feather-edit.svg" alt="" />
                                          </a>
                                          <button onClick={() => handleModalFn(item2.id)} className="head-one-two">
                                            Swap
                                          </button>
                                          <button onClick={()=>handleModalShowFn(item2.id)} className="head-one-two">
                                            Add Trainer
                                          </button>
                                        </div>
                                      </div>

                                      <div className="two-part-head">
                                      <h6>
                                          {new Date(item2.dateOfBooking).toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})  }
                                        </h6>
                                        <h6>{item2.vehicle}</h6>
                                        <small>Client</small>
                                        <span>{item2.name}</span>
                                        <small>Booking Ref. no. </small>
                                        <span>{item2.bookingRefNo}</span>
                                        <small>Driving License no. </small>
                                        <span>{item2.licenseNo}</span>
                                        <small>Date Booking </small>
                                        <p>{item2.dateOfBooking}</p>
                                        <span>
                                          {" "}
                                          {item2.dateOfBooking} <strong>(First Booking)</strong>
                                        </span>
                                      </div>
                                    </>
                                  )
                                }

                              })
                              }

                              <>

                              </>

                              <div className="timeset">
                                <ul>
                                  <li>9:30 AM</li>
                                  <li>10:00 AM</li>
                                  <li>10:30 AM</li>
                                </ul>
                              </div>
                              {/* <div className="two-part-head">
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
                        </div> */}
                              <div className="timeset">
                                <ul>
                                  <li>9:30 AM</li>
                                  <li>10:00 AM</li>
                                  <li>10:30 AM</li>
                                  <li>11:00 AM</li>
                                  <li>11:30 AM</li>
                                  <li>12:00 PM</li>
                                  <li>12:30 PM</li>
                                  <li>01:30 AM</li>
                                  <li>02:00 AM</li>
                                  <li>02:30 AM</li>
                                  <li>03:00 AM</li>
                                  <li>03:30 AM</li>
                                  <li>04:00 PM</li>
                                  <li>04:30 PM</li>
                                </ul>
                              </div>
                            </div>
                          </>
                        )
                      })}





                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <SwapModal show={show} setShow={setShow} schedualDataFn={schedualDataFn} swapDataId={swapDataId} />
        <AddTrainerModal showModal={showModal} setShowModal={setShowModal}  itemId={itemId} />


      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
</Backdrop>

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
export default AddSchedule;


// export async function getServerSideProps(context) {
//   const { params } = await context;

//   console.log(params,"param here");

//   const {uid}= await params;
//   console.log(uid,"id here");

//     return {
//       props: {
//         id:uid,
//       },
//     };

// }