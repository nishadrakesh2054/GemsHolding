import React from "react";
//= Components
import Split from "@/components/Common/Split";
//= Static Data
import ClientsData from "@/data/sections/clients.json";

function Clients2({ theme }) {
  return (
    <section className="clients sub-bg pt-50 pb-50">
      <h2 style={{ display: "none" }}>&nbsp;</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {ClientsData.slice(0, 6).map((item) => (
                <div key={item.id} className="col-lg-3 brands">
                  <div className="item no-bord wow fadeIn" data-wow-delay=".3s">
                    <div className="img">
                      {theme === "light" ? (
                        <img src={item.lightImage} alt="gems" />
                      ) : (
                        <img src={item.darkImage} alt="gems" />
                      )}
                      <Split>
                        <a
                          href={item?.url}
                          className="link words chars splitting"
                          data-splitting
                          target="_blank"
                        >
                          {item.url}
                        </a>
                      </Split>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients2;
