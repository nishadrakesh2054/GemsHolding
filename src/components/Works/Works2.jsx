"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

function Works2() {
  const [loadSwiper, setloadSwiper] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloadSwiper(true);
    }, 0); // No need for delay if you are just toggling the state
  }, []);

  return (
    <section className="work-carousel section-padding caroul position-re pb-0">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                OUR COMPANIES
              </h6>
              <h3 className="wow color-font fw-600">
                Empowering Progress Across <br /> Industries.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              {loadSwiper && (
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  speed={1000}
                  slidesPerView={1}
                  loop={true}
                  spaceBetween={0}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    991: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 0,
                    },
                  }}
                  className="swiper-wrapper"
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: "url(/img/portfolio/gems.jpg)",
                        }}
                      ></div>
                      <div className="cont bgbox">
                        <h6>
                          <Link href="/gems-school">EDUCATION</Link>
                        </h6>
                        <h4>
                          <Link href="/gems-school">GEMS SCHOOL</Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: "url(/img/portfolio/lfes.jpg)",
                        }}
                      ></div>
                      <div className="cont bgbox">
                        <h6>
                          <Link href="/lfes">EDUCATION</Link>
                        </h6>
                        <h4>
                          <Link href="/lfes">LFES</Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: "url(/img/portfolio/kabeli.jpg)",
                        }}
                      ></div>
                      <div className="cont bgbox">
                        <h6>
                          <Link href="/kabeli-hydropower">
                            HYDROPOWER &amp; RENEWABLE
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/kabeli-hydropower">
                            KABELI HYDROPOWER COMPANY LIMITED
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: "url(/img/portfolio/avya.jpg)",
                        }}
                      ></div>
                      <div className="cont bgbox">
                        <h6>
                          <Link href="/avya-club">FITNESS &amp; GYM</Link>
                        </h6>
                        <h4>
                          <Link href="/avya-club">AVYA CLUB</Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: "url(/img/portfolio/sports.jpg)",
                        }}
                      ></div>
                      <div className="cont bgbox">
                        <h6>
                          <Link href="/project-details2/project-details2-dark">
                            SPORTS &amp; E-SPORTS
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            THUNDERBOLTS DEVELOPMENT CENTER
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                      <div
                        className="item-img bg-img wow imago"
                        style={{
                          backgroundImage: "url(/img/portfolio/1or8.jpg)",
                        }}
                      ></div>
                      <div className="cont bgbox">
                        <h6>
                          <Link href="/project-details2/project-details2-dark">
                            TECHNOLOGY &amp; AI
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            ONE OR EIGHT
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              )}
              <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
                <i className="ion-ios-arrow-right"></i>
              </div>
              <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
                <i className="ion-ios-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works2;
