import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./pesanan-selesai.css";

const PesananSelesai = (props) => {
  return (
    <div className="pesanan-selesai-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="pesanan-selesai-pesanan-selesai">
        <img
          src="/external/rectangle9544124-hxtp-800h.png"
          alt="Rectangle9544124"
          className="pesanan-selesai-rectangle954"
        />
        <span className="pesanan-selesai-text">
          <span>Terimakasih sudah Berbelanja</span>
        </span>
        <span className="pesanan-selesai-text2">
          <span>Pesanan Anda Sedang di Proses</span>
        </span>
        <img
          src="/external/teenyiconstickcirclesolid4124-tzua.svg"
          alt="teenyiconstickcirclesolid4124"
          className="pesanan-selesai-teenyiconstickcirclesolid"
        />
        <div className="pesanan-selesai-group41">
          <Link to="/pesanansudahdatang" className="event-nav-link">
            <span className="pesanan-selesai-text4">
              <span>Continue</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PesananSelesai;
