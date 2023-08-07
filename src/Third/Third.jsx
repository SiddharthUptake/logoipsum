import React, { useRef } from "react";
import "./Third.css";
import message from "../assets/message.png";
import recycle from "../assets/recycle.png"
import mobileicon from "../assets/mobileicon.png"
import bingo from "../assets/bingo.png"
import speaker from "../assets/speaker.png"
import headphones from "../assets/headphone.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import stars from "../assets/star 1.png";
import avatar from "../assets/person.png";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Third = () => {
  const slides = useRef()
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="sec-3" >
      <div className="container-fluid px-5">
        <div className="third-title">
          <span className="text-center n-simple">
            Lorem Ipsum text never been simpler
          </span>
          <p className="text-center pt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="mybox p-2">
              <img src={message} alt="message" />
              <span>Free Chat</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mybox p-2">
              <img src={recycle} alt="message" />
              <span>High Features</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mybox p-2">
              <img src={mobileicon} alt="message" />
              <span>Multiple Platform</span>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="mybox p-2">
              <img src={bingo} alt="message" />
              <span>Modern UI</span>
            </div>
          </div>
          <div className="col-lg-4">
            {" "}
            <div className="mybox p-2">
              <img src={speaker} alt="message" />
              <span>Good Graphic</span>
            </div>
          </div>
          <div className="col-lg-4">
            {" "}
            <div className="mybox p-2">
              <img src={headphones} alt="message" />
              <span>Live Support</span>
            </div>
          </div>
        </div>
      </div>
      <div className="blue-frame mt-5 mb-5 p-5 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 mil-cust">
              <span>Trusted By 
                Million of Customers
              </span>
              <div>
                <button onClick={() => slides.current.slickPrev()}><ArrowLeft/></button>
                <button onClick={() => slides.current.slickNext()}><ArrowRight/></button>
              </div>
            </div>
            <div className="col-lg-6 slides-for-mobile">
              <Slider {...settings} className="main-slider" ref={slides}>
                <div class="card card1">
                  <div class="card-body">
                    <h5 class="card-title d-flex">
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                    </h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                      Card subtitle
                    </h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex">
                    <img src={avatar} alt="" />
                    <div className="d-flex flex-column ">
                    <h6> &nbsp; Abi Mac</h6>
                    <span> &nbsp; Actress</span>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="card card2">
                  <div class="card-body">
                    <h5 class="card-title d-flex">
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                    </h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                      Card subtitle
                    </h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex">
                    <img src={avatar} alt="" />
                    <div className="d-flex flex-column ">
                    <h6>&nbsp; Abi Mac</h6>
                    <span>&nbsp; Actress</span>
                    </div>
                    </div>
                  </div>
                </div>
                <div class="card card3">
                  <div class="card-body">
                    <h5 class="card-title d-flex">
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                        <img src={stars} alt="" />
                    </h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                      Card subtitle
                    </h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <div className="d-flex">
                    <img src={avatar} alt="" />
                    <div className="d-flex flex-column ">
                    <h6>&nbsp; Abi Mac</h6>
                    <span> &nbsp; Actress</span>
                    </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
