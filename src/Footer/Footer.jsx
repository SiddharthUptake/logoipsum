import React from "react";
import "./footer.css";
import logo from "../assets/mainlogo.png";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container-fluid px-5 pb-3">
        <div className="row mt-5 pt-5">
          <div className="col-lg-3 d-flex flex-column">
            <img src={logo} alt="logo" className="logo" />
            <p className="pt-4 footer-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae eveniet ipsum nostrum pariatur sed{" "}
            </p>
            <div className="icons pt-2">
              <div className="blue">
                <Facebook color="white" />
              </div>
              <div className="blue">
                <Twitter color="white" />
              </div>
              <div className="blue">
                <Instagram color="white" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 quick-section">
            <span className="quick">Quick Links</span>
            <div className="d-flex flex-column mt-4 links">
              <a href="">Home</a>
              <a href="">About us</a>
              <a href="">Contact us</a>
              <a href="">Features</a>
            </div>
            <div></div>
          </div>
          <div className="col-lg-3 quick-section">
            <span className="quick">Follow Us</span>
            <div className="mt-4 d-flex flex-column">
              <div>
                <Phone color="#336699" /> <span> &nbsp; +91 123456789</span>
              </div>
              <div className="pt-3">
                <Mail color="#336699" /> <span> &nbsp; info@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 quick-section">
            <span className="quick">Get in Touch</span>
            
            <div className="d-flex mt-3 flex-column">
              <div class="input-group input-group-lg">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your email address"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </div>
              <button className="p-2 mt-3 subscribe">Subscribe Now</button>
              </div>
          </div>
        </div>
      </div>
      <div className="copyright pt-4 pb-3">
        <div className="container-fluid px-5">
        <div className="row">
            <div className="col-lg-6">
            <span className="text-center">© 2023. All Rights Reserved</span>
            </div>
            <div className="col-lg-6 tpl">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Legal Disclaimer</span>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
