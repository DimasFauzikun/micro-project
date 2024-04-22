import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./create.css";

const CREATE = (props) => {
  return (
    <div className="create-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="create-create">
        <img
          src="/external/rectangle9511422-ha2q-800w.png"
          alt="Rectangle9511422"
          className="create-rectangle951"
        />
        <div className="create-pedagang">
          <span className="create-text">
            <span>
              PEDAGANG
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
          <div className="create-frameiconshoppingcartoutline">
            <div className="create-group">
              <img
                src="/external/vector1422-34u.svg"
                alt="Vector1422"
                className="create-vector"
              />
              <img
                src="/external/vector1422-j9e.svg"
                alt="Vector1422"
                className="create-vector01"
              />
              <img
                src="/external/vector1422-q156.svg"
                alt="Vector1422"
                className="create-vector02"
              />
            </div>
          </div>
        </div>
        <div className="create-customer">
          <span className="create-text02">
            <Link to="/sign-incostumer" className="event-nav-link">
              <span>
                CUSTOMER
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </Link>
          </span>
          <div className="create-frameiconperson">
            <div className="create-group1">
              <img
                src="/external/vector1422-ppzj.svg"
                alt="Vector1422"
                className="create-vector03"
              />
              <img
                src="/external/vector1422-tq2q.svg"
                alt="Vector1422"
                className="create-vector04"
              />
            </div>
          </div>
        </div>
        <div className="create-driver">
          <span className="create-text04">
            <span>
              DRIVER
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
          <div className="create-frameiconcar">
            <img
              src="/external/vector1422-l1b.svg"
              alt="Vector1422"
              className="create-vector05"
            />
          </div>
        </div>
        <div className="create-group153">
          <div className="create-group148">
            <img
              src="/external/rectangle935i142-ddj5-200h.png"
              alt="Rectangle935I142"
              className="create-rectangle935"
            />
            <img
              src="/external/ellipse21i142-8wtm-200h.png"
              alt="Ellipse21I142"
              className="create-ellipse21"
            />
            <img
              src="/external/ellipse22i142-wed9.svg"
              alt="Ellipse22I142"
              className="create-ellipse22"
            />
            <img
              src="/external/vectori142-60j.svg"
              alt="VectorI142"
              className="create-vector06"
            />
            <img
              src="/external/vectori142-37im.svg"
              alt="VectorI142"
              className="create-vector07"
            />
            <img
              src="/external/vectori142-cz7s.svg"
              alt="VectorI142"
              className="create-vector08"
            />
          </div>
          <img
            src="/external/rectangle934i142-6ouj-200h.png"
            alt="Rectangle934I142"
            className="create-rectangle934"
          />
          <img
            src="/external/logoi142-3k1e-300h.png"
            alt="LogoI142"
            className="create-logo"
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
            src="/external/vectori142-ov2j.svg"
            alt="VectorI142"
            className="create-vector09"
          />
        </div>
      </div>
    </div>
  );
};

export default CREATE;
