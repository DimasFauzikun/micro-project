import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./pesanansudahdatang.css";

const Pesanansudahdatang = (props) => {
  return (
    <div className="pesanansudahdatang-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="pesanansudahdatang-pesanansudahdatang">
        <div className="pesanansudahdatang-cilarrowtop"></div>
        <img
          src="/external/rectangle344124-jod7q-500h.png"
          alt="Rectangle344124"
          className="pesanansudahdatang-rectangle34"
        />
        <div className="pesanansudahdatang-group240">
          <img
            src="/external/iconamoondeliveryfastfill4124-sa34.svg"
            alt="iconamoondeliveryfastfill4124"
            className="pesanansudahdatang-iconamoondeliveryfastfill"
          />
          <span className="pesanansudahdatang-text">
            <span>
              Delivery Store
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
        </div>
        <div className="pesanansudahdatang-group241">
          <span className="pesanansudahdatang-text02">
            <span className="pesanansudahdatang-text03">Driver</span>
            <span>: Andi Uhuy</span>
          </span>
          <span className="pesanansudahdatang-text05">
            <span className="pesanansudahdatang-text06">No Kendaraan</span>
            <span>: B 4 COT</span>
          </span>
          <span className="pesanansudahdatang-text08">
            <span className="pesanansudahdatang-text09">Jenis Kendaraan</span>
            <span>: Honda Beat</span>
          </span>
        </div>
        <div className="pesanansudahdatang-group239">
          <img
            src="/external/mdilocation4124-rrz6.svg"
            alt="mdilocation4124"
            className="pesanansudahdatang-mdilocation"
          />
          <span className="pesanansudahdatang-text11">
            <span>
              Your Location
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
        </div>
        <img
          src="/external/rectangle854124-1ebd-500w.png"
          alt="Rectangle854124"
          className="pesanansudahdatang-rectangle85"
        />
        <span className="pesanansudahdatang-text13">
          <span>
            15.20 - 16.05
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </span>
        <span className="pesanansudahdatang-text15">
          <span>
            Estimasi Waktu :
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <br></br>
          <span></span>
        </span>
        <div className="pesanansudahdatang-group55">
          <Link to="/home" className="event-nav-link">
            <span className="pesanansudahdatang-text19">
              <span>Selesai</span>
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
            src="/external/vectori147-354p.svg"
            alt="VectorI147"
            className="event-vector3"
          />
        </div>
        <img
          src="/external/screenshot2024040216235114124-eq7-500h.png"
          alt="Screenshot2024040216235114124"
          className="pesanansudahdatang-screenshot202404021623511"
        />
      </div>
    </div>
  );
};

export default Pesanansudahdatang;
