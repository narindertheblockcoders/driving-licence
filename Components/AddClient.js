import React from "react";

function AddClient() {

    return(

      <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Driving</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/responsive.css" />
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
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
            <a className="nav-link active" aria-current="page" href="">
              Bookings
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="schedule.html">
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
  <section className="client">
    <div className="container">
      <div className="client-head">
        <h2>Add Client</h2>
      </div>
      <div className="client-content">
        <div className="mb-3 client-row">
          <input
            type="email"
            className="form-control"
            id="book-input"
            placeholder="Name"
          />
        </div>
        <div className="mb-3 client-row">
          <input
            type="email"
            className="form-control"
            id="book-input"
            placeholder="Mobile"
          />
        </div>
        <div className="mb-3 client-row">
          <input
            type="email"
            className="form-control"
            id="book-input"
            placeholder="License Type"
          />
        </div>
        <div className="mb-3 client-row">
          <input
            type="email"
            className="form-control"
            id="book-input"
            placeholder="License State"
          />
        </div>
        <div className="mb-3 client-row">
          <input
            type="email"
            className="form-control"
            id="book-input"
            placeholder="Query Status"
          />
        </div>
        <div className="mb-3 " id="client-reminder">
          <label htmlFor="">Reminder Call</label>
          <input
            type="date"
            className="form-control"
            id="client-input"
            placeholder="Date of client"
          />
        </div>
        <div className="mb-3 client-textarea">
          <input
            type="text"
            className="form-control"
            id="client-text"
            placeholder="Feedback"
          />
        </div>
      </div>
      <div className="client-button">
        <button className="btn-book">Add Client</button>
      </div>
    </div>
  </section>
  <section className="footer">
    <div className="container">
      <p>© 2023 Driving Schedule Software. All Rights Reserved.</p>
    </div>
  </section>
</>

//         <>
//   <meta charSet="UTF-8" />
//   <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Driving</title>
//   <link
//     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
//     rel="stylesheet"
//     integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
//     crossOrigin="anonymous"
//   />
//   <link rel="stylesheet" href="css/style.css" />
//   <link rel="stylesheet" href="css/responsive.css" />
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="#">
//         Driving Schedule Software
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="">
//               Bookings
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="schedule.html">
//               Schedule
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="trainers.html">
//               Trainers
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Clients
//             </a>
//           </li>
//         </ul>
//         <form className="d-flex" role="search" id="nav-selects">
//           <span>
//             <a href="#">
//               <img src="img/Subtraction 1.svg" alt="" />
//             </a>
//           </span>
//           <select className="form-select" aria-label="Default select example">
//             <option selected="">Admin</option>
//             <option value={1}>One</option>
//             <option value={2}>Two</option>
//             <option value={3}>Three</option>
//           </select>
//         </form>
//       </div>
//     </div>
//   </nav>
//   <section className="client">
//     <div className="container">
//       <div className="client-head">
//         <h2>Add Client</h2>
//       </div>
//       <div className="client-content">
//         <div className="mb-3 client-row">
//           <input
//             type="email"
//             className="form-control"
//             id="book-input"
//             placeholder="Name"
//           />
//         </div>
//         <div className="mb-3 client-row">
//           <input
//             type="email"
//             className="form-control"
//             id="book-input"
//             placeholder="Mobile"
//           />
//         </div>
//         <div className="mb-3 client-row">
//           <input
//             type="email"
//             className="form-control"
//             id="book-input"
//             placeholder="License Type"
//           />
//         </div>
//         <div className="mb-3 client-row">
//           <input
//             type="email"
//             className="form-control"
//             id="book-input"
//             placeholder="License State"
//           />
//         </div>
//         <div className="mb-3 client-row">
//           <input
//             type="email"
//             className="form-control"
//             id="book-input"
//             placeholder="Query Status"
//           />
//         </div>
//         <div className="mb-3 " id="client-reminder">
//           <label htmlFor="">Reminder Call</label>
//           <input
//             type="date"
//             className="form-control"
//             id="client-input"
//             placeholder="Date of client"
//           />
//         </div>
//         <div className="mb-3 client-textarea">
//           <input
//             type="text"
//             className="form-control"
//             id="client-text"
//             placeholder="Feedback"
//           />
//         </div>
//       </div>
//       <div className="client-button">
//         <button className="btn-book">Add Client</button>
//       </div>
//     </div>
//   </section>
//   <section className="footer">
//     <div className="container">
//       <p>© 2023 Driving Schedule Software. All Rights Reserved.</p>
//     </div>
//   </section>
// </>

    )

}
export default AddClient;