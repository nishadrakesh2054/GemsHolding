"use client";
import React, { useEffect } from "react";
//= Scripts
import thumparallaxDown from "@/common/thumparallaxDown";
import "./message.scss";

function MessageFromExicutive() {
  useEffect(() => {
    thumparallaxDown();
  }, []);

  return (
    <section className="message-exu sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">
                A Message from Our Executive Director
              </h4>
              <p className="wow txt" data-splitting>
                As the Director of GEMS Group, I am privileged to share the
                essence of who we are and what drives us. For over 45 years, our
                passion has been to contribute positively to the growth of Nepal
                and its economy. Across sectors such as education, energy,
                health, sports, and technology, our commitment has been
                unwavering: to create jobs, impact lives, and build a brighter
                future for all. <br /> <br /> At GEMS Group, our motto, "Lead,
                Kindly Light," encapsulates our vision to lead with empathy,
                integrity, and a long-term perspective. We believe in
                sustainable and meaningful growth, which is why we are dedicated
                to initiatives that add enduring value to our customers,
                employees, and stakeholders. Our mission is to foster an
                environment where we grow together, creating opportunities for
                employment and nurturing capable citizens who can make a
                difference in the world. <br /> <br /> Our philosophy draws us
                towards long-term projects where the creation of lasting brands
                and sustained value far outweighs the pursuit of short-term
                gains. We are here to build, not just for today, but for the
                future. <br /> <br /> Thank you for being a part of our journey.
                Together, let us continue to illuminate the path forward,
                fostering growth and prosperity for Nepal and beyond. <br />
                <br /> Regards, <br />
                Barun Khadka
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img about-us-img-chairman pb-0">
              <img
                // className="thumparallax-down"
                src="/img/team/no-bg-barun-sir.png"
                alt="chairman"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageFromExicutive;
