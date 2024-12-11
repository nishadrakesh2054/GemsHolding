"use client";
import React, { useEffect } from "react";
//= Scripts
import thumparallaxDown from "@/common/thumparallaxDown";

function MinimalArea1() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="min-area sub-bg pb-0 mb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img about-us-img-chairman pb-0">
              <img
                // className="thumparallax-down"
                src="/img/about/founder.png"
                alt="chairman"
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">A Message from Our Chairman</h4>
              <p className="wow txt" data-splitting>
                As Chairman, I am honored to lead our organization into a future
                full of promise and possibility. Our commitment to excellence
                drives us to excel in education, energy, technology, and
                wellness. We strive to make a meaningful impact on the
                communities we serve, guided by innovation and integrity. Our
                dedicated team works tirelessly to foster growth and create
                value, ensuring that our initiatives not only meet but exceed
                expectations. Together, we are building a legacy of positive
                change and progress. Thank you for your continued support and
                trust as we embark on this journey towards a brighter future.
              </p>
              {/* <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MinimalArea1;
