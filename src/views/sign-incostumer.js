import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./sign-incostumer.css";

const SignIncostumer = (props) => {
  return (
    <div className="sign-incostumer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="sign-incostumer-sign-incostumer">
        <img
          src="/external/rectangle474128-sdg-800h.png"
          alt="Rectangle474128"
          className="sign-incostumer-rectangle47"
        />
        <img
          src="/external/image1c7bce6b8a674268a1b08321fd4ebce514128-tuk8-700w.png"
          alt="IMAGE1c7bce6b8a674268a1b08321fd4ebce514128"
          className="sign-incostumer-image1c7bce6b8a674268a1b08321fd4ebce51"
        />
        <span className="sign-incostumer-text">
          <span>LIGHT FOOD SOLUSI TEPAT</span>
        </span>
        <span className="sign-incostumer-text02">
          <span>SAAT LAPAR !!!</span>
        </span>
        <img
          src="/external/rectangle484128-30a8-200h.png"
          alt="Rectangle484128"
          className="sign-incostumer-rectangle48"
        />
        <span className="sign-incostumer-text04">
          <span>Sign Up</span>
        </span>
        <img
          src="/external/rectangle494128-zlwll-200h.png"
          alt="Rectangle494128"
          className="sign-incostumer-rectangle49"
        />
        <span className="sign-incostumer-text06">
          <span>Sign In</span>
        </span>
        <div className="sign-incostumer-group147">
          <img
            src="/external/rectangle9464128-paik-600w.png"
            alt="Rectangle9464128"
            className="sign-incostumer-rectangle946"
          />
          <img
            src="/external/rectangle9474128-abig-600w.png"
            alt="Rectangle9474128"
            className="sign-incostumer-rectangle947"
          />
          <div className="sign-incostumer-password">
            <span className="sign-incostumer-text08">
              <span>Password</span>
            </span>
          </div>
          <div className="sign-incostumer-email">
            <span className="sign-incostumer-text10">
              <span>Email / No HP</span>
            </span>
          </div>
        </div>
        <div className="sign-incostumer-login">
          <Link to="/account-customer" className="event-nav-link">
            <span className="sign-incostumer-text12">
              <span>Login</span>
            </span>
          </Link>
        </div>
        <div className="sign-incostumer-create-acc">
          <Link to="/sign-up-customer" className="event-nav-link">
            <span className="sign-incostumer-text14">
              <span>Create Account</span>
            </span>
          </Link>
        </div>
        <span className="sign-incostumer-text16">
          <span>Login</span>
        </span>
        <div className="sign-incostumer-group155">
          <div className="sign-incostumer-group148">
            <img
              src="/external/rectangle935i412-irel-200h.png"
              alt="Rectangle935I412"
              className="sign-incostumer-rectangle935"
            />
            <img
              src="/external/ellipse21i412-2038-200h.png"
              alt="Ellipse21I412"
              className="sign-incostumer-ellipse21"
            />
            <img
              src="/external/ellipse22i412-rrbr.svg"
              alt="Ellipse22I412"
              className="sign-incostumer-ellipse22"
            />
            <img
              src="/external/vectori412-87k.svg"
              alt="VectorI412"
              className="sign-incostumer-vector"
            />
            <img
              src="/external/vectori412-tsvd.svg"
              alt="VectorI412"
              className="sign-incostumer-vector1"
            />
            <img
              src="/external/vectori412-b6yf.svg"
              alt="VectorI412"
              className="sign-incostumer-vector2"
            />
          </div>
          <img
            src="/external/rectangle934i412-ldbe-200h.png"
            alt="Rectangle934I412"
            className="sign-incostumer-rectangle934"
          />
          <img
            src="/external/logoi412-vl01i-300w.png"
            alt="LogoI412"
            className="sign-incostumer-logo"
          />
          <span className="event-text26">
            <Link to="/home" className="event-nav-link">
              <span>Home</span>
            </Link>
          </span>
          <span className="event-text28">
            <span>Event</span>
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
            src="/external/vectori412-8zn.svg"
            alt="VectorI412"
            className="sign-incostumer-vector3"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIncostumer;
