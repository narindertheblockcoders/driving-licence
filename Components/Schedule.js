import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./ui/Navbar";
import ReactPaginate from "react-paginate";
import $ from "jquery"
import OwlCarousel from 'react-owl-carousel3';
import Head from "next/head";
import AddScheduleModal from "./AddScheduleModal";
import dynamic from "next/dynamic";


function Schedule() {
  const [scheduleData, setScheduleData] = useState();
  const [dataByDate, setDataByDate] = useState();
  const [datePicker, setDatePicker] = useState();
  const [leapYear, setLeapYear] = useState();
  const [added, setAdded] = useState();
  const [yearMonth, setYearMonth] = useState();
  const [date3, setDate3] = useState();
  const [convertedDate, setConvertedDate] = useState();
  const [yearList, setYearList] = useState();
  const [lenghtOfMatches,setLenghtOfMatches] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const [show ,setShow] = useState()



  console.log(convertedDate, "converter month  data");

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
      // console.log("numAscending---------------->", numAscending);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function filterData(item) {
    // console.log(" filterData object item-->",item);
    const filterValue = scheduleData?.filter((item2) => {
      const dateValue = item2.dateOfBooking;
      const date = new Date(dateValue);
      const day = date.getUTCDate().toString();
      const month = date.toLocaleString("default", { month: "short" });
      const formattedDate = `${day} ${month}`;

      return formattedDate.includes(item);
    });

    setDataByDate(filterValue);
    // setSearchData(filterValue)

    // setScheduleData(filterValue)
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
    // setSearchData(filterValue)
  }

  useEffect(() => {
    getDataByDate();
  }, [leapYear, scheduleData]);

  async function dateFilter() {

    // Define the number of years per page
    const yearsPerPage = 10;
    // Define the current page number
    const currentPage = 3;

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Calculate the starting and ending year for the current page
    const startingYear = currentYear - yearsPerPage * currentPage + 1;
    const endingYear = startingYear + (yearsPerPage - 1);

    // Create an array to store the list of past years
    const pastYearList = [];

    // Generate the list of past years for the current page
    for (let i = startingYear; i <= endingYear; i++) {
      pastYearList.push(i);
    }

    console.log("Past Year List (Page " + currentPage + "):", pastYearList);

    setYearList(pastYearList);

    console.log("Past Year List:", pastYearList);
  }

  useEffect(() => {
    dateFilter();
  }, []);

  // useEffect(()=>{

  // },[])

  const currentDatePicker = () => {
    const dateObj = new Date();
    const monthStr = dateObj.toLocaleString("default", { month: "short" });
    const formattedDateStr = `${dateObj.getFullYear()}-${monthStr}`;
    // console.log(formattedDateStr, monthStr, dateObj, 'fffffffffffffffffffffffffff')

    //     const dateObj1 = new Date();
    // const monthStr1 = dateObj1.toLocaleString('default', { month: 'long' });
    // const formattedDateStr1 = `${monthStr1} ${dateObj1.getFullYear()}`;

    const date2 = new Date().toLocaleDateString();
    const d = date2.split("/");

    const convertedDate = formattedDateStr.split("-")[1];
    console.log(convertedDate, "ccccccccccccccccccccnnnnnnn");
    console.log(formattedDateStr, "<=========@@@@@@@@@@@@@@====formattexd");
    // const formattedDate = formattedDateStr?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) ?? "Invalid Date";

    if (formattedDateStr instanceof Date) {
      const formattedDate = formattedDateStr.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
      console.log("Formatted date:", formattedDate);
    } else {
      console.error("formattedDateStr is not a valid Date object.");
    }

    setYearMonth(`${d[2]}-${d[1]}`);
    setDate3(`${d[2]}-${d[1]}`);
    // setConvertedDate(formattedDate)
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
      // console.log("onlyYear------@###@@@@@@@@@@@@@@@@@@@@@#######################---->>>",leapYear);
      if ((leapYear % 4 == 0 && 0 != leapYear % 100) || 0 == leapYear % 400) {
        // console.log("onlyYear---------->>>",leapYear);
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

  useEffect(() => {
    schedualDataFn();
    currentDatePicker();
  }, [added]);




  



  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts = yearList?.slice(indexOfFirstPost, indexOfLastPost);

  const Pagination = ({ selected }) => {
    setCurrentPage(selected + 1);
    setSearchData(null);
    setUsers(users);
  };



async function modalShowFn(e){
  setShow(e)
}




  return (
    <>


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
</Head>
      <Navbar />
      {/* booking-tabs*/}
      <section className="booking-tabs" id="schedule-booking">
        <div className="container">
          <div className="head-booking">
            <h2>Schedule</h2>
          </div>
          <div className="inner-tabs-head">
            <div className="left-tabss">
              <h6>
                <span>
                  <img src="img/Path - arrow-expand-left.png" alt="" />
                </span>{" "}
                
               
                {currentPosts}
                {/* <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={lastIndex >= products.length}>Next</button> */}
                <small>
                  <img src="img/arrow-expand-right.png" alt="" />
                </small>
              </h6>

              {lenghtOfMatches <= 10 || lenghtOfMatches == null ? null :(
     
                  <div className="paginate-sec">
                    <ReactPaginate 
                    previousLabel = "back"
                    nextLabel = "next"
                    onPageChange= {Pagination}
                    pageCount={Math.ceil(yearList?.lenght / postsPerPage)}
                    containerClassName="pagination"
                    previousLinkClassName="pagination__link"
                    nextLinkClassName="pagination__link"
                    disabledClassName="pagination__link--disabled"
                    activeClassName="pagination_link--active"
                    className="page-link"/>
                  </div>
                )}

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
          <div className="owl-carousel owl-theme">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <OwlCarousel
    className="owl-theme"
    loop 
    margin={0}
    width={10} 
    autoWidth={100}
    nav
>
                <li className="nav-item" role="presentation">
                  <button
                    className="tabsActive "
                    id="pills-home-tab"
                    data-bs-toggle="pill"
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

                {datePicker?.map((item) => {
                  return (
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link item"
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
                                        <option selected="">
                                          Select Client
                                        </option>
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
                                  <option selected="">
                                    {" "}
                                    William (0435906388)
                                  </option>
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
                      <div className="same-three-part">
                        <div className="head-one">
                          <h3>Logan</h3>
                        </div>
                        <div className="timeset">
                          <ul>
                          <div className="trainer-timings">
                          <span>9 : 30 PM</span>
                          <div className="trainer-opicty">
                            <a href=""
                              className="trainerhover-btns"
                              data-bs-target="#exampleModalToggle3"
                              data-bs-toggle="modal"
                            >
                              Add Schedule
                            </a>
                          </div>
                        </div>
                        <div className="trainer-timings">
                          <span>10 : 00 PM</span>
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
                          <span>11 : 00 PM</span>
                          <div className="trainer-opicty">
                            <a
                              href=""
                              className="trainerhover-btns"
                              onClick={()=>setShow(trie)}
                            >
                              Add Schedule
                            </a>
                          </div>
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
                          <span>12 : 30 PM</span>
                          <div className="trainer-opicty">
                            <a
                              href=""
                              className="trainerhover-btns"
                              data-bs-target="#exampleModalToggle3"
                              data-bs-toggle={show}
                              onClick={()=>modalShowFn("modal")}
                            >
                              Add Schedule
                            </a>
                          </div>
                        </div>       <div className="trainer-timings">
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
                        </div>       <div className="trainer-timings">
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
                          </ul>
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
      {/*
       */}
       <AddScheduleModal props={show}/>
    </>
  );
}
export default dynamic(()=> Promise.resolve(Schedule),{ssr:false});

