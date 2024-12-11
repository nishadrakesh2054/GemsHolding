"use client";
import React, { useRef, useEffect } from "react";

function WorksHeader() {
  const fixedSlider = useRef();

  useEffect(() => {
    if (fixedSlider.current) {
      const MainContent = document.querySelector(".main-content");
      const slideHeight = fixedSlider.current.offsetHeight;
      MainContent.style.marginTop = slideHeight + "px";
    }
  }, []);

  return (
    <header
      ref={fixedSlider}
      className="works-header fixed-slider hfixd valign "
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font fw-700">Impact Driven</h1>
                <p>
                  Our company is committed to corporate social responsibility,
                  focusing on sustainable practices, community engagement, and
                  ethical business operations for a better future.
                </p>
              </div>
              {/* <div className="bactxt custom-font valign">
                <span className="full-width">Works</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default WorksHeader;
