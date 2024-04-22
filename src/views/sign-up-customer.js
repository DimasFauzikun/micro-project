import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./sign-up-customer.css";

const SignUpCustomer = (props) => {
  return (
    <div className="sign-up-customer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="sign-up-customer-sign-up-customer">
        <img
          src="/external/rectangle9484123-ycup-800h.png"
          alt="Rectangle9484123"
          className="sign-up-customer-rectangle948"
        />
        <div className="sign-up-customer-create-account">
          <Link to="/home" className="event-nav-link">
            <span className="sign-up-customer-text">
              <span>Create Account</span>
            </span>
          </Link>
        </div>
        <div className="sign-up-customer-pasword">
          <span className="sign-up-customer-text02">
            <span>Password</span>
          </span>
          <img
            src="/external/line364123-fdpc.svg"
            alt="Line364123"
            className="sign-up-customer-line36"
          />
        </div>
        <div className="sign-up-customer-nohandphone">
          <span className="sign-up-customer-text04">
            <span>No Handphone</span>
          </span>
          <img
            src="/external/line364123-xa758.svg"
            alt="Line364123"
            className="sign-up-customer-line361"
          />
        </div>
        <div className="sign-up-customer-email">
          <span className="sign-up-customer-text06">
            <span>Email</span>
          </span>
          <img
            src="/external/line364123-xqfg.svg"
            alt="Line364123"
            className="sign-up-customer-line362"
          />
        </div>
        <div className="sign-up-customer-name">
          <span className="sign-up-customer-text08">
            <span>Name</span>
          </span>
          <img
            src="/external/line364123-i08w.svg"
            alt="Line364123"
            className="sign-up-customer-line363"
          />
        </div>
        <div className="sign-up-customer-sign-up">
          <span className="sign-up-customer-text10">
            <span>Sign Up Customer</span>
          </span>
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
            <Link to="/search" className="event-nav-link">
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

export default SignUpCustomer;
