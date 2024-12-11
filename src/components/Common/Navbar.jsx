"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import appData from "@/data/app.json";

const Navbar = ({ lr, theme }) => {
  const navbar = useRef();

  function handleScroll() {
    if (window.scrollY > 300) {
      navbar?.current?.classList?.add("nav-scroll");
    } else {
      navbar?.current?.classList?.remove("nav-scroll");
    }
  }

  useEffect(() => {
    handleScroll();
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      ref={navbar}
      className={`navbar navbar-expand-lg change px-2 ${
        theme === "light" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link className="logo" href="/">
          {theme ? (
            theme === "light" ? (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )
          ) : (
            <img ref={lr} src={appData.lightLogo} alt="logo" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={`/homepage/home1-light`}>
                  Main Home
                </a>
                <a className="dropdown-item" href={`/homepage/home2-light`}>
                  Creative Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home5-light`}>
                  Digital Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home4-light`}>
                  Business One Page
                </a>
                <a className="dropdown-item" href={`/homepage/home3-light`}>
                  Corporate Business
                </a>
                <a className="dropdown-item" href={`/homepage/home6-light`}>
                  Modern Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home7-light`}>
                  Freelancer
                </a>
                <a className="dropdown-item" href={`/homepage/home8-light`}>
                  Architecture
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href={`/`}>
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/about`}>
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/works`}>
                IMPACT STORIES
              </a>
            </li>
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                WORKS
              </span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={`/showcase/showcase-light`}>
                  Showcase Parallax
                </a>
                <a
                  className="dropdown-item"
                  href={`/showcase4/showcase4-light`}
                >
                  Showcase Carousel
                </a>
                <a
                  className="dropdown-item"
                  href={`/showcase3/showcase3-light`}
                >
                  Showcase Circle
                </a>
                <a className="dropdown-item" href={`/works/works-light`}>
                  Portfolio Masonry
                </a>
                <a className="dropdown-item" href={`/works2/works2-light`}>
                  Portfolio Filtering
                </a>
                <a className="dropdown-item" href={`/works3/works3-light`}>
                  Portfolio Gallery
                </a>
              </div>
            </li> */}
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={`/blog/blog-light`}>
                  Blog Standerd
                </a>
                <a
                  className="dropdown-item"
                  href={`/blog-list/blog-list-light`}
                >
                  Blog List
                </a>
                <a
                  className="dropdown-item"
                  href={`/blog-grid/blog-grid-light`}
                >
                  Blog Grid
                </a>
                <a
                  className="dropdown-item"
                  href={`/blog-details/blog-details-light`}
                >
                  Blog Details
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <a href={`/contact`} className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
