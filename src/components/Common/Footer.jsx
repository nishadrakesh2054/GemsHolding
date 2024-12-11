import React from "react";

function Footer({ hideBGCOLOR }) {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Dhapakhel, Lalitpur, Nepal</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hello@gemsholdings.com.np</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+977 1 5275111</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <a href="#">
                      <img src="/img/blog/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a href="#">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2023</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <a href="#">
                      <img src="/img/blog/2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="sm-post">
                    <a href="#">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                      <span className="date">14 sep 2023</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-6">
            <div className="item">
              <div className="logo mb-2">
                <img src="/img/logo/gems-gruop.png" alt="logo" />
              </div>
              {/* <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div> */}
              <div className="copy-right">
                <p>
                  © 2024, GEMS. <a href="#0"> </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
