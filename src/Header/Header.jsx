import React, { useState, useEffect } from "react";
import "./header.css";
// import smallogo from "../assets/smallogo.png";
import biglogo from "../assets/mainlogo.png";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
const Header = () => (
  <>
    <section className="destktop-navbar-only">
      <div className="container-fluid px-5 first-nav p-2">
      <div className="nav-contact">
        <span><Phone color="#336699"/> &nbsp;+91 1234567890</span>
        <span><Mail color="#336699"/> &nbsp;info@gmail.com</span>
      </div>
      {/*  */}
      <div>
        <div className="nav-contact">
          <Facebook color="gray"/>
          <Instagram color="gray"/>
          <Twitter color="gray"/>
        </div>
      </div>
      </div>
    </section>
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          <img src={biglogo} alt="logo" className="pt-3 pb-3" />
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
          <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#aboutus">
                About us
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item px-3 mobile-view">
            <span><Phone color="#336699"/> &nbsp;+91 1234567890</span>
            </li>
            <li className="nav-item px-3 mobile-view">
            <span><Mail color="#336699"/> &nbsp;info@gmail.com</span>
            </li>

          </ul>
          <form className="d-flex" role="search">

            <button className="contact-btn" type="submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
