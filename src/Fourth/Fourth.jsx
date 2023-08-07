import React from "react";
import "./fourth.css";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.png";
import apple from "../assets/applay.png";
import android from "../assets/gplay.png";
const Fourth = () => {
  return (
    <section className="sec-4" id="features">
      <div className="container-fluid px-5">
        <div className="third-title mt-5">
          <span className="text-center">
            Lorem Ipsum text never <span className="be-last-simpler"> been simpler </span>
          </span>
          <p className="text-center pt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-2 d-flex justify-content-center align-items-center">
            <img className="mobiles-1" src={m1} alt="" data-aos="fade-right"/>
          </div>
          <div className="col-lg-2  mm2 ">
            <img className="mobiles-2" src={m2} alt="" data-aos="fade-right"/>
          </div>
          <div className="col-lg-4  d-flex justify-content-center align-items-center">
            <img className="mobiles-main" src={m3} alt="" data-aos="fade"/>
          </div>
          <div className="col-lg-2 mm4">
            <img className="mobiles-2" src={m4} alt="" data-aos="fade-left"/>
          </div>
          <div className="col-lg-2  d-flex justify-content-center align-items-center">
            <img className="mobiles-1" src={m5} alt="" data-aos="fade-left"/>
          </div>
        </div>
      </div>
      <div className="sec-5 mt-5 d-flex justify-content-center align-items-center">
        <div className="downloadapp" data-aos="fade-up">
          <span className="get-started text-center">Download This App To Get Started</span>
          <div>
            <div className="apple-side mt-4">
              <div className="row app-store">
                <div className="col-lg-3 col-3">
                  <img src={apple} alt="apple" />
                </div>
                <div className="col-lg-9 col-9">
                  <span>Download on the</span>
                  <h6>App Store</h6>
                </div>
              </div>

              <div className="row app-store">
                <div className="col-lg-3 col-3">
                  <img src={android} alt="apple" />
                </div>
                <div className="col-lg-9 col-9">
                  <span>Download on the</span>
                  <h6>Goggle Play</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Fourth;
