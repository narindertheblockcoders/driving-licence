import React, { useState, useEffect } from "react";
import axios from "axios";
import { Cagliostro } from "@next/font/google";
import $ from "jquery";
import SwapModal from "./SwapModal";
import AddTrainerModal from "./AddTrainerModal";
import Navbar from "./ui/Navbar";
import { DatePicker } from "rsuite";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import Head from "next/head";
import OwlCarousel from 'react-owl-carousel3';
import dynamic from "next/dynamic";

function BookingList() {
  const [scheduleData, setScheduleData] = useState();
  const [vehicleType, setVehicleType] = useState();
  const [booklocation, setBookLocation] = useState();
  const [searchFilter, setSearchFilter] = useState();
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [swapDataId, setSwapDataId] = useState();
  const [searchData, setSearchData] = useState();
  const [datePicker, setDatePicker] = useState();
  // const [convertedDate, setConvertedDate] = useState()
  // const[pickYear,setPickYear] = useState()
  const [yearMonth, setYearMonth] = useState();
  const [leapYear, setLeapYear] = useState();
  const [dataByDate, setDataByDate] = useState();
  const [added, setAdded] = useState(0);
  const [date3, setDate3] = useState();
  const [loading, setLoading] = useState(false);
  const [itemId, setItemId] = useState();
  const [open, setOpen] = React.useState(false);
  const [ selectedId, setSelectedId] = useState(0)
  const [halfHour, setHalfHour] = useState()
  async function schedualDataFn() {
    try {
      const token = localStorage.getItem("token");
      // console.log("hello from get allschedule---------<>");
      const response = await axios.post("/api/getAllSchedule", {
        token: token,
      });
      const responseData = response.data.data.data;
      const result = [].concat.apply([], responseData);
      const numAscending = result?.sort(
        (a, b) => a.dummyBooking - b.dummyBooking
      );
      setScheduleData(numAscending);
      console.log("numAscending---------------->", numAscending);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function vehicalBooking() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/api/vehicalstype", { token });
      setVehicleType(response.data.data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  async function bookingLocation() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/api/location", { token: token });
      setBookLocation(response.data.data.data);
      console.log("first location-->",response.data.data.data)
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function queryFn() {
    $(".owl-carousel")({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }

  useEffect(() => {
    schedualDataFn();
    vehicalBooking();
    bookingLocation();
    currentDatePicker();
  }, [added]);

  useEffect(() => {
    getDataByDate();
  }, [leapYear, scheduleData]);


  function handleModalFn(e) {
    setSwapDataId(e);
    setShow(true);
  }

  function handleModalShowFn(e) {
    setItemId(e);
    setShowModal(true);
  }

  const SearchFn = (e) => {

    const search = e.target.value;
    console.log(search, "searchhhhhhhhh");
    if (search == null || !search) {
      // schedualDataFn()
      setAdded(added + 1);
      return;
    }
    const filterData = dataByDate?.filter((item) => {
      const name = item?.name;
      // const email = item?.email;
      return name?.toLowerCase().includes(search?.toLowerCase());
    });
    // setSearchData(filterData)

    setDataByDate(filterData);

    // if(!e){

    //   setOpen(false);
    // }
  };

  useEffect(() => {
    if (dataByDate) {
    }
  }, []);

  console.log(open, "open here");

  const DatePicker = (e) => {
    console.log("hellloooooooooooo", e.target.value);
    setDate3(null);
    const dateObj = new Date(e.target.value);
    const monthStr = dateObj.toLocaleString("default", { month: "short" });
    const formattedDateStr = `${dateObj.getFullYear()}-${monthStr}`;
    const convertedDate = formattedDateStr.split("-")[1];

    const dateObj1 = new Date(e.target.value);
    const year = dateObj1.getFullYear();
    setLeapYear(year);

    const date2 = new Date(e.target.value).toLocaleDateString();
    const d = date2.split("/");
    // console.log(date2, d, 'date 2222');

    setYearMonth(`${d[2]}-${d[1]}`);

    dayPicker(convertedDate);
  };

  const currentDatePicker = () => {
    const dateObj = new Date();
    const monthStr = dateObj.toLocaleString("default", { month: "short" });
    const formattedDateStr = `${dateObj.getFullYear()}-${monthStr}`;
    const date2 = new Date().toLocaleDateString();
    const d = date2.split("/");
    const convertedDate = formattedDateStr.split("-")[1];
    console.log(convertedDate, "ccccccccccccccccccccnnnnnnn");
    setYearMonth(`${d[2]}-${d[1]}`);
    setDate3(`${d[2]}-${d[1]}`);
    dayPicker(convertedDate);
  };

  const dayPicker = (convertedDate) => {
    var temp = [];
    console.log("hello");
    if (
      convertedDate == "Jan" ||
      convertedDate == "Mar" ||
      convertedDate == "May" ||
      convertedDate == "Jul" ||
      convertedDate == "Aug" ||
      convertedDate == "Oct" ||
      convertedDate == "Dec"
    ) {
      for (let i = 1; i <= 31; i++) {
        temp.push(`${i} ${convertedDate}`);
      }
    }

    if (
      convertedDate == "Jun" ||
      convertedDate == "Nov" ||
      convertedDate == "Apr" ||
      convertedDate == "Sep"
    ) {
      for (let i = 1; i <= 30; i++) {
        temp.push(`${i} ${convertedDate}`);
      }
    }

    if (convertedDate == "Feb") {
      if ((leapYear % 4 == 0 && 0 != leapYear % 100) || 0 == leapYear % 400) {
        for (let i = 1; i <= 29; i++) {
          temp.push(`${i} ${convertedDate}`);
        }
      } else {
        for (let i = 1; i <= 28; i++) {
          temp.push(`${i} ${convertedDate}`);
        }
      }
    }

    console.log(temp, "tempppppppppppppppppp");

    setDatePicker(temp);
  };

  async function filterData(item,i) {
    console.log(item,"iteme herer")

    setSelectedId(i)
    const filterValue = scheduleData?.filter((item2) => {
      const dateValue = item2.dateOfBooking;
      const date = new Date(dateValue);
      const day = date.getUTCDate().toString();
      const month = date.toLocaleString("default", { month: "short" });
      const formattedDate = `${day} ${month}`;

      return formattedDate.includes(item);
    });

    setDataByDate(filterValue);
  }


  async function getDataByDate() {
    const date1 = new Date();
    const day1 = date1.getUTCDate().toString();
    const month1 = date1.toLocaleString("default", { month: "short" });
    const formattedDate1 = `${day1} ${month1}`;

    const filterValue = scheduleData?.filter((item2) => {
      const dateValue = item2.dateOfBooking;
      const date = new Date(dateValue);
      const day = date.getUTCDate().toString();
      const month = date.toLocaleString("default", { month: "short" });
      const formattedDate = `${day} ${month}`;
      return formattedDate === formattedDate1;
    });
    setDataByDate(filterValue);
  }
  console.log("first dataByDate--->", dataByDate);

  return (
    <>
      <Navbar />

<Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/responsive.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/> */}
  {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> */}
  {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> */}
</Head>

      <section className="booking-tabs" id="add-schedule">
        <div className="container">
          <div className="head-booking" id="heading-booking">
            <h2>Bookings</h2>

            <Link href="/newBooking">
              <button type="button" className="newBooking">
                Add New Booking
              </button>
            </Link>
          </div>
          <div className="inner-tabs-head">
            <div className="left-tabss">
              <h6>
                {/* <input type="text" id="datepicker" /> */}
                <span>
                  <img src="img/Path - arrow-expand-left.png" alt="" />
                </span>{" "}
                <input
                  type="month"
                  id="start"
                  onChange={(e) => DatePicker(e)}
                  name="start"
                  min="2018-03"
                  value={yearMonth}
                ></input>
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
  <div className="owl-carousel owl-theme">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <OwlCarousel
    className="owl-theme"
    loop 
    margin={0}
    // wiaddedd={10} 
    autoWidth={100}
    nav
>
                <li className="nav-item" role="presentation">
                  <button
                    className="tabsActive "
                    id="pills-home-tab"
                    // data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    onClick={() => filterData(item)}
                  >
                    {/* today<br> */}
                    {/* 7 Aprl */}
                  </button>
                </li>

                {datePicker?.map((item,i) => {

                  return (
                    <li className="nav-item" role="presentation">
                      <button
                        className={selectedId == i? "nav-link item active" : "nav-link item   "}
                        id="pills-profile-tab"
                        // data-bs-toggle="pill"
                        // onnClick={()=>}
                        // data-bs-target="#pills-profile"
                        // type="button"
                        // role="tab"
                        // aria-controls="pills-profile"
                        // aria-selected="false"
                        onClick={() => filterData(item,i)}
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}

</OwlCarousel>
              </ul>
            </div>
          <div className="main-tabs">

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
                                        {item2?.location === item?.id &&
                                        item2.dummyBooking == 1 ? (
                                          <div className="head-one-one">
                                            <a
                                              href="#"
                                              className="dummy-btn-one"
                                            >
                                              Dummy
                                            </a>
                                          </div>
                                        ) : null}

                                        <div className="head-one-one">
                                          <a href="#">
                                            <img
                                              src="img/Icon feather-edit.svg"
                                              alt=""
                                            />
                                          </a>
                                          <button
                                            onClick={() =>
                                              handleModalFn(item2.id)
                                            }
                                            className="head-one-two"
                                          >
                                            Swap
                                          </button>
                                          <button
                                            onClick={() =>
                                              handleModalShowFn(item2.id)
                                            }
                                            className="head-one-two"
                                          >
                                            Add Trainer
                                          </button>
                                        </div>
                                      </div>

                                      <div className="two-part-head">
                                        <h6>
                                          {new Date(
                                            item2.dateOfBooking
                                          ).toLocaleTimeString("en-IN", {
                                            hour: "numeric",
                                            minute: "numeric",
                                            hour12: true,
                                          })}
                                        </h6>
                                        <h6>{item2.vehicle}</h6>
                                        <small>Client</small>
                                        <span>{item2.name}</span>
                                        <small>Booking Ref. no. </small>
                                        <span>{item2.bookingRefNo}</span>
                                        <small>Driving License no. </small>
                                        <span>{item2.licenseNo}</span>
                                        <small>Date Booking </small>
                                        {/* <p>{}</p> */}
                                        <span>
                                          {" "}
                                          {new Date(
                                            item2.dateOfBooking
                                          ).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                          })}{" "}
                                          <strong>(First Booking)</strong>
                                        </span>
                                        <small>Trainer </small>
                                        <span>{item2.trainerName}</span>
                                      </div>
                                      {item2?.paidAmount < item2?.totalAmount &&
                                      item2.paidAmount > 0 ? (
                                        <div className="schedule_client1">
                                          <small>Client</small>
                                          <span>
                                            {" "}
                                            {item2.name}
                                            <strong>
                                              ({item2.bookingRefNo})
                                            </strong>
                                          </span>
                                          <small>Payment Status</small>
                                          <span> {"Partial Payment"}</span>
                                        </div>
                                      ) : (
                                        <div className="schedule_client2">
                                          <small>Client</small>
                                          <span>
                                            {" "}
                                            {item2.name}
                                            <strong>
                                              ({item2.bookingRefNo})
                                            </strong>
                                          </span>
                                          <small>Payment Status</small>
                                          <span> {"No Payment"}</span>
                                        </div>
                                      )}
                                    </>
                                  );
                                }
                              })}

                              <></>

                       
                        
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <SwapModal
          show={show}
          setShow={setShow}
          schedualDataFn={schedualDataFn}
          swapDataId={swapDataId}
        />
        <AddTrainerModal
          showModal={showModal}
          setShowModal={setShowModal}
          schedualDataFn={schedualDataFn}
          itemId={itemId}
        />

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </section>

      {/*
       */}
    </>
  );
}
export default dynamic(()=> Promise.resolve(BookingList),{ssr:false});

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
