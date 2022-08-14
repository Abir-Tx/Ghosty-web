import React from "react";
import logo from "../images/ghosty_logo.jpg";
import { initHome } from "../scripts/js";
import { releaseFetch } from "../scripts/js/fetch";

export default function Home() {
  return (
    <div>
      <div className="container-sm">
        <section className="welcome">
          <div className="h-100 welcome-box">
            <div className="row h-100 align-items-center">
              <div className="col order-2 order-lg-1 order-md-1">
                <h3 className="h3 welcome-title">Welcome To</h3>
                <h1 className="h1 title-text">Ghosty Developement</h1>
              </div>
              <div className="col order-1 order-lg-2 order-md-2">
                <img
                  className="ghosty-logo rounded mx-auto d-block"
                  src={logo}
                  alt="Ghosty Organization Logo"
                />
              </div>
            </div>
          </div>
        </section>
        {/* End of Welcome/Landing section */}
      </div>

      {/* Scripts */}
      {initHome()}
    </div>
  );
}
