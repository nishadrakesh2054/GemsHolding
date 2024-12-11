"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import initIsotope from "@/common/initIsotope";

function Works4({ classText }) {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
      // Trigger click on the EDUCATION filter to show only EDUCATION items on load
      const educationFilter = document.querySelector(
        '[data-filter=".EDUCATION"]'
      );
      if (educationFilter) {
        educationFilter.click();
      }
    }, 500);
  }, []);

  return (
    <section
      className={`portfolio-cr section-padding pb-50 ${
        classText ? classText : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="filtering text-center col-12">
            <div className="filter">
              <span data-filter=".EDUCATION" className="active">
                EDUCATION
              </span>
              <span data-filter=".ENERGY">RENEWABLE</span>
              <span data-filter=".FITNESS">FITNESS</span>
              <span data-filter=".SPORTS">SPORTS & E-SPORTS</span>
              <span data-filter=".TECHNOLOGY">TECHNOLOGY</span>
            </div>
          </div>

          <div className="gallery-mons full-width">
            <div className="items graphic wow  EDUCATION" data-wow-delay=".4s">
              <div className="item-img">
                <Link href="/gems-school" className="imago wow">
                  <img src="/img/portfolio/gems.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">GEMS School</h6>
                <span>
                  <a href="https://gems.edu.np/" target="_blank">
                    Education
                  </a>
                </span>
              </div>
            </div>

            <div className="items EDUCATION wow " data-wow-delay=".4s">
              <div className="item-img">
                <Link href="/lfes" className="imago wow">
                  <img src="/img/portfolio/lfes.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont flex">
                <h6 className="color-font">LFES</h6>
                <span>
                  <a href="https://lfes.edu.np/" target="_blank">
                    Education
                  </a>
                </span>
              </div>
            </div>

            <div
              className="items   wow  ENERGY col-12"
              data-wow-delay=".4s"
              style={{ display: "none" }} // Hide initially
            >
              <div className="item-img">
                <Link href="/kabeli-hydropower" className="imago wow">
                  <img src="/img/portfolio/kabeli.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">
                  KABELI HYDROPOWER COMPANY LIMITED
                </h6>
                <span>
                  <a href="https://kabelihydro.com/">ENERGY</a>
                </span>
              </div>
            </div>

            <div
              className="items   wow  FITNESS"
              data-wow-delay=".4s"
              style={{ display: "none" }} // Hide initially
            >
              <div className="item-img">
                <Link href="/avya-club" className="imago wow">
                  <img src="/img/portfolio/avya.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">AVYA CLUB</h6>
                <span>
                  <a href="https://avya.club/">FITNESS</a>
                </span>
              </div>
            </div>

            <div
              className="items  graphic wow  TECHNOLOGY"
              data-wow-delay=".4s"
              style={{ display: "none" }} // Hide initially
            >
              <div className="item-img">
                <Link
                  href="/project-details2/project-details2-dark"
                  className="imago wow"
                >
                  <img src="/img/portfolio/1or8.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">ONE OR EIGHT</h6>
                <span>
                  <a href="#0">TECHNOLOGY</a>
                </span>
              </div>
            </div>
            <div
              className="items width2 graphic wow  TECHNOLOGY"
              data-wow-delay=".4s"
              style={{ display: "none" }} // Hide initially
            >
              {/* <div className="item-img">
                <Link
                  href="/project-details2/project-details2-dark"
                  className="imago wow"
                >
                  <img src="/img/portfolio/1or8.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6 className="color-font">Technology Design</h6>
                <span>
                  <a href="#0">Technology</a>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works4;
