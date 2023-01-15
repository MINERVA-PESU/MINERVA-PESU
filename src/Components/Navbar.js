import React from 'react'

export default function Navbar() {
  return (
    <>
    <header className="header">
  <h1 className="h1 fs-2 fw-bolder text-center  m-3 p-2">
    <span id="title"> MINERVA</span>{" "}
  </h1>
  <nav
    className="navbar navbar-expand-lg  "
    style={{ background: "#e0edf3" }}
    id="navbar_top"
  >
    <div className="container-fluid">
      {/* <a class="navbar-brand" href="#">Navbar</a> */}
      <button
        className="navbar-toggler bg-info"
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
        <ul className="navbar-nav me-auto mb-2  mb-lg-0">
          <li className="nav-item ms-1">
            <a
              className="nav-link active ms-4 ps-4 text-dark "
              aria-current="page"
              id="border"
              href="index.html"
            >
              {" "}
              Home
            </a>
          </li>
          <li className="nav-item ms-4 ps-4">
            <a className="nav-link text-dark " id="border" href="news.html">
              Our Timelines
            </a>
          </li>
          <li className="nav-item ms-5 ps-4">
            <a className="nav-link text-dark" id="border" href="#timeline">
              News
            </a>
          </li>
          <li className="nav-item ms-5 ps-4">
            <a className="nav-link text-dark" id="border" href="#">
              Featuring PES
            </a>
          </li>
          <li className="nav-item ms-5 ps-4">
            <a className="nav-link text-dark" id="border" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item ms-5 ps-4">
            <a className="nav-link text-dark" id="border" href="#">
              Our Team
            </a>
          </li>
          <li className="nav-item ms-5 ps-4">
            <a className="nav-link text-dark" id="border" href="#">
              Feedback
            </a>
          </li>
          <li className="nav-item ms-5 ps-5">
            <a className="nav-link text-dark" id="border" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

    </>
  )
}
