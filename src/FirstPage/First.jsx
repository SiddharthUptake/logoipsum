import React from "react";
import "./first.css";
import apple from "../assets/applay.png";
import mobile1 from "../assets/Gold.png";
import { Download, Stars, ThumbsUp } from "lucide-react";
import goggle from "../assets/gplay.png"
const First = () => {
  return (
    <section className="first_page">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="container"></div>
          <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
            <div className="left-first-page">
              <span>Lorem Ipsum text </span> <span className="never">never</span> <span>been</span> <span className="simpler">simpler</span>
              <p className="pt-3"> 
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
            <div className="home-apples">
              <div className="row bg-black first-side-app p-2 rounded">
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                  <img src={apple} alt="" />
                </div>
                <div className="col-lg-9">
                  <span className="text-white">Download on the</span>
                  <h6 className="text-white">App store</h6>
                </div>
              </div>
              <div className="row bg-black first-side-app p-2 rounded">
                <div className="col-lg-3  d-flex justify-content-center align-items-center">
                  <img src={goggle} alt="" />
                </div>
                <div className="col-lg-9">
                  <span className="text-white">Download on the</span>
                  <h6 className="text-white">Google Play</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mobile-1">
              <img className="pt-5 mobile" src={mobile1} alt="mobile" />
            </div>
          </div>
        </div>
      </div>
      <div className="impression pt-5 pb-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="counter">10M</span>
          <span className="pt-2 counter-names">
            <Download /> &nbsp;Downloads
          </span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="counter">9045</span>
          <span className="pt-2 counter-names">
            <ThumbsUp /> &nbsp;Likes
          </span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="counter">4.5/5</span>
          <span className="pt-2 counter-names">
            <Stars /> &nbsp;Ratings
          </span>
        </div>
      </div>
    </section>
  );
};

export default First;
