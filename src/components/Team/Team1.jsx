"use client";
import React, { useEffect } from "react";
//= Scripts
import teamSkillsProgress from "@/common/teamSkillsProgress";
import tooltipEffect from "@/common/tooltipEffect";
//= Static Data
import teamsDate from "@/data/sections/team.json";

const Team = () => {
  useEffect(() => {
    teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 500);
  }, []);

  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-5 valign">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>Our Staff</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit mb-15">
                We help to create visual strategies.
              </h3>
              <p>
                We are Vie. We create award-winning websites, remarkable brands
                and cutting-edge apps.Nullam imperdie.
              </p>
              <div className="skills-box mt-40">
                {teamsDate.skills.map((skill) => (
                  <div className="skill-item" key={skill.id}>
                    <h6 className="custom-font">{skill.text}</h6>
                    <div className="skill-progress">
                      <div className="progres" data-value={skill.value}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="col-lg-12 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div>
                      <div
                        className="img sizxl
                          mb-30"
                        data-tooltip-tit="Mr. Rajesh Khadka"
                        data-tooltip-sub="Founder Chairman"
                      >
                        <div className="image-teams">
                          <img
                            src="/img/team/chairman.jpg"
                            alt="teams"
                            className="imago wow core-team"
                            style={{ filter: "grayscale(100%)" }}
                          />
                        </div>
                        <p className="m-0 p-0 font-weight-bold">
                          Mr. Rajesh Khadka
                        </p>
                        <p>Founder Chairman</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div>
                      <div
                        className="img sizxl
                          mb-30"
                        data-tooltip-tit="Mr. Barun Khadka"
                        data-tooltip-sub="Executive Director"
                      >
                        <div className="image-teams">
                          <img
                            src="/img/team/barunsir.jpg"
                            alt="teams"
                            className="imago wow core-team"
                            style={{ filter: "grayscale(100%)" }}
                          />
                        </div>
                        <p className="m-0 p-0 font-weight-bold">
                          Mr. Barun Khadka
                        </p>
                        <p>Executive Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div>
                      <div
                        className="img sizxl
                          mb-30"
                        data-tooltip-tit="Ms. Uma Khadka"
                        data-tooltip-sub="Co-Founder"
                      >
                        <div className="image-teams ">
                          <img
                            src="/img/team/placeholder-image.png"
                            alt="teams"
                            className="imago wow core-team"
                            style={{ filter: "grayscale(100%)" }}
                          />
                        </div>
                        <p className="m-0 p-0 font-weight-bold">
                          Ms. Uma Khadka
                        </p>
                        <p>Co-Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div>
                      <div
                        className="img sizxl
                          mb-30"
                        data-tooltip-tit="Dr. Pujan Khadka"
                        data-tooltip-sub="Executive Director"
                      >
                        <div className="image-teams">
                          <img
                            src="/img/team/placeholder-image.png"
                            alt="teams"
                            className="imago wow core-team"
                            style={{ filter: "grayscale(100%)" }}
                          />
                        </div>
                        <p className="m-0 p-0 font-weight-bold">
                          Dr. Pujan Khadka
                        </p>
                        <p>Executive Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
