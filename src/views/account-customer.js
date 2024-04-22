import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./account-customer.css";

const AccountCustomer = (props) => {
  return (
    <div className="account-customer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="account-customer-account-customer">
        <img
          src="/external/ellipse14123-mjk-300h.png"
          alt="Ellipse14123"
          className="account-customer-ellipse1"
        />
        <span className="account-customer-text">
          <span>NAME</span>
        </span>
        <img
          src="/external/rectangle634123-6whp-200h.png"
          alt="Rectangle634123"
          className="account-customer-rectangle63"
        />
        <img
          src="/external/rectangle644123-ofpf-200h.png"
          alt="Rectangle644123"
          className="account-customer-rectangle64"
        />
        <img
          src="/external/rectangle654123-a2kn-200h.png"
          alt="Rectangle654123"
          className="account-customer-rectangle65"
        />
        <img
          src="/external/rectangle664123-g20r-200h.png"
          alt="Rectangle664123"
          className="account-customer-rectangle66"
        />
        <div className="account-customer-ok">
          <Link to="/home" className="event-nav-link">
            <span className="account-customer-text02">
              <span>OK</span>
            </span>
          </Link>
        </div>
        <div className="account-customer-ok1">
          <Link to="/home" className="event-nav-link">
            <span className="account-customer-text04">
              <span>Log Out</span>
            </span>
          </Link>
        </div>
        <div className="event-group151">
          <div className="event-group148">
            <Link to="/home" className="event-nav-link">
              <img
                src="/external/rectangle935i147-4mqq-200h.png"
                alt="Rectangle935I147"
                className="event-rectangle935"
              />
            </Link>
            <Link to="/" className="event-nav-link">
              <img
                src="/external/ellipse21i147-8lvp-200h.png"
                alt="Ellipse21I147"
                className="event-ellipse21"
              />
            </Link>
            <Link to="/pesan" className="event-nav-link">
              <img
                src="/external/ellipse22i147-3km5.svg"
                alt="Ellipse22I147"
                className="event-ellipse22"
              />
            </Link>
            <Link to="/create" className="event-nav-link">
              <img
                src="/external/vectori147-wrjb.svg"
                alt="VectorI147"
                className="event-vector"
              />
            </Link>
            <img
              src="/external/vectori147-kcrp.svg"
              alt="VectorI147"
              className="event-vector1"
            />
            <img
              src="/external/vectori147-4wpo.svg"
              alt="VectorI147"
              className="event-vector2"
            />
          </div>
          <img
            src="/external/rectangle934i147-i5dh-200h.png"
            alt="Rectangle934I147"
            className="event-rectangle934"
          />
          <img
            src="/external/logoi147-xtit-300h.png"
            alt="LogoI147"
            className="event-logo"
          />
          <span className="event-text26">
            <Link to="/home" className="event-nav-link">
              <span>Home</span>
            </Link>
          </span>
          <span className="event-text28">
            <Link to="/event" className="event-nav-link">
              <span>Event</span>
            </Link>
          </span>
          <span className="event-text30">
            <Link to="/pesan" className="event-nav-link">
              <span>Pesanan</span>
            </Link>
          </span>
          <span className="event-text32">
            <Link to="/halaman-catering" className="event-nav-link">
              <span>Catering</span>
            </Link>
          </span>
          <img
            src="/external/vectori147-354p.svg"
            alt="VectorI147"
            className="event-vector3"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountCustomer;
