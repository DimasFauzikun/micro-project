import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./payment.css";

const Payment = (props) => {
  return (
    <div className="payment-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="payment-payment">
        <div className="payment-pesan">
          <img
            src="/external/rectangle384124-zgbi-800w.png"
            alt="Rectangle384124"
            className="payment-rectangle38"
          />
          <img
            src="/external/rectangle394124-dbiv1-200h.png"
            alt="Rectangle394124"
            className="payment-rectangle39"
          />
          <span className="payment-text">
            <span>Bakso Biasa</span>
          </span>
          <span className="payment-text02">
            <span>Rp 15.000</span>
          </span>
          <span className="payment-text04">
            <span>Bakso Bamieta</span>
          </span>
          <div className="payment-group237">
            <img
              src="/external/gravityuiminus4124-5yos.svg"
              alt="gravityuiminus4124"
              className="payment-gravityuiminus"
            />
            <img
              src="/external/flowbiteplusoutline4124-pg5.svg"
              alt="flowbiteplusoutline4124"
              className="payment-flowbiteplusoutline"
            />
            <span className="payment-text06">1</span>
          </div>
          <img
            src="/external/flowbitetrashbinoutline4124-jnf.svg"
            alt="flowbitetrashbinoutline4124"
            className="payment-flowbitetrashbinoutline"
          />
          <div className="payment-catatan">
            <span className="payment-text07">
              <span>Catatan</span>
            </span>
          </div>
          <img
            src="/external/line354124-dcrg.svg"
            alt="Line354124"
            className="payment-line35"
          />
          <div className="payment-subtotal">
            <span className="payment-text09">
              <span>Rp. 25.000</span>
            </span>
            <span className="payment-text11">
              <span>Sub Total</span>
            </span>
          </div>
          <div className="payment-bayar">
            <Link to="/pesanan-selesai" className="event-nav-link">
              <span className="payment-text13">
                <span>Bayar</span>
              </span>
            </Link>
          </div>
        </div>
        <img
          src="/external/materialsymbolsclose4124-ntm.svg"
          alt="materialsymbolsclose4124"
          className="payment-materialsymbolsclose"
        />
        <div className="payment-hargamakan">
          <span className="payment-text15">
            <span>Harga Makanan</span>
          </span>
          <span className="payment-text17">
            <span>Rp. 15.000</span>
          </span>
        </div>
        <div className="payment-ongkir">
          <span className="payment-text19">
            <span>Ongkos Kirim</span>
          </span>
          <span className="payment-text21">
            <span>Rp. 6.000</span>
          </span>
        </div>
        <div className="payment-layanan">
          <span className="payment-text23">
            <span>Biaya Layanan</span>
          </span>
          <span className="payment-text25">
            <span>Rp. 2.000</span>
          </span>
        </div>
        <div className="payment-layanan1">
          <span className="payment-text27">
            <span>Biaya Jasa Aplikasi</span>
          </span>
          <span className="payment-text29">
            <span>Rp. 2.000</span>
          </span>
        </div>
        <div className="payment-alamat">
          <span className="payment-text31">
            <span>Alamat</span>
          </span>
          <span className="payment-text33">
            <span>Ubah</span>
          </span>
          <span className="payment-text35">
            <span>
              Jalan. Kamboja No.15
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
        </div>
        <div className="payment-contact">
          <span className="payment-text37">
            <span>Contact</span>
          </span>
          <span className="payment-text39">
            <span>Ubah</span>
          </span>
          <span className="payment-text41">
            <span>0853-000-000-00</span>
          </span>
        </div>
        <div className="payment-group238">
          <span className="payment-text43">
            <span>Pembayaran</span>
          </span>
          <img
            src="/external/rectangle454125-xqtj-400h.png"
            alt="Rectangle454125"
            className="payment-rectangle45"
          />
          <span className="payment-text45">
            <span>Pilih Pembayaran</span>
          </span>
          <div className="payment-n-amabank1">
            <img
              src="/external/fluentradiobutton24filled4125-4yg.svg"
              alt="fluentradiobutton24filled4125"
              className="payment-fluentradiobutton24filled"
            />
            <span className="payment-text47">
              <span>Pembayaran</span>
            </span>
          </div>
          <img
            src="/external/rectangle414125-meve-200h.png"
            alt="Rectangle414125"
            className="payment-rectangle41"
          />
          <span className="payment-text49">
            <span>Konfirmasi</span>
          </span>
          <div className="payment-nama-bank2">
            <span className="payment-text51">
              <span>Pembayaran</span>
            </span>
            <img
              src="/external/ellipse84125-xalc-200h.png"
              alt="Ellipse84125"
              className="payment-ellipse8"
            />
          </div>
          <div className="payment-nama-bank3">
            <span className="payment-text53">
              <span>Pembayaran</span>
            </span>
            <img
              src="/external/ellipse84125-kmrj-200h.png"
              alt="Ellipse84125"
              className="payment-ellipse81"
            />
          </div>
          <div className="payment-nama-bank4">
            <span className="payment-text55">
              <span>Pembayaran</span>
            </span>
            <img
              src="/external/ellipse84125-tpx9-200h.png"
              alt="Ellipse84125"
              className="payment-ellipse82"
            />
          </div>
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

export default Payment;
