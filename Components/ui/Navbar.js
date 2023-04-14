import React from 'react'
import { useRouter } from 'next/router';

const Navbar = () => {

  const router = useRouter()
  async function logOut() {
    localStorage.clear()
    router.push("/login")

  }
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Driving</title>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/getUsers">
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
                <a className="nav-link " aria-current="page" href="/newBooking">
                  Booking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/addSchedule">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/trainers">
                  Trainers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/client">
                  Clients
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  " href="getUsers">
                  Users
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" id="nav-selects">
              <span>
                <a href="#">
                  <img src="img/Subtraction 1.svg" alt="" />
                </a>
              </span>
              <div className='dropdown'>

              </div>

              <div class="dropdown" id='dropdownLogout'>
                <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" onClick={logOut}>Logout</a></li>
                  <li><a class="dropdown-item" >Logout</a></li>
                  <li><a class="dropdown-item" >Logout</a></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar