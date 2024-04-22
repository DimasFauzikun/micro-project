import React from "react";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./halaman-catering.css";

const HalamanCatering = (props) => {
  return (
    <div className="halaman-catering-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="halaman-catering-halaman-catering">
        <div className="halaman-catering-frame3">
          <span className="halaman-catering-text">
            <Link to="/daftarpesanancatering" className="event-nav-link">
              <span>
                Pesanan Anda
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </Link>
          </span>
          <div className="halaman-catering-frameiconshoppingcartoutline">
            <div className="halaman-catering-group">
              <img
                src="/external/vector1484-47sb.svg"
                alt="Vector1484"
                className="halaman-catering-vector"
              />
              <img
                src="/external/vector1484-xr2v.svg"
                alt="Vector1484"
                className="halaman-catering-vector1"
              />
              <img
                src="/external/vector1484-nyqn.svg"
                alt="Vector1484"
                className="halaman-catering-vector2"
              />
            </div>
          </div>
        </div>
        <div className="halaman-catering-catering-populer">
          <div className="halaman-catering-indonesiafood">
            <span className="halaman-catering-text02">
              <span>
                Akar Dimsum
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <img
              src="/external/indo21485-5c3h-200h.png"
              alt="indo21485"
              className="halaman-catering-indo2"
            />
          </div>
          <div className="halaman-catering-chinesefood">
            <span className="halaman-catering-text04">
              <span>
                Burger Bangor
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <img
              src="/external/chinese21485-vjfw-200h.png"
              alt="chinese21485"
              className="halaman-catering-chinese2"
            />
          </div>
          <div className="halaman-catering-arabicfood">
            <span className="halaman-catering-text06">
              <span>
                Janji Jiwa
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <img
              src="/external/arab21486-iz2-200h.png"
              alt="arab21486"
              className="halaman-catering-arab2"
            />
          </div>
          <div className="halaman-catering-japanesefood">
            <span className="halaman-catering-text08">
              <span>
                Warung Ayam
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <img
              src="/external/jepanese21486-dufa-200h.png"
              alt="jepanese21486"
              className="halaman-catering-jepanese2"
            />
          </div>
          <div className="halaman-catering-western">
            <span className="halaman-catering-text10">
              <span>Rich</span>
            </span>
            <img
              src="/external/western21487-9sa-200h.png"
              alt="western21487"
              className="halaman-catering-western2"
            />
          </div>
          <span className="halaman-catering-text12">
            <span className="halaman-catering-text13">
              Pilih Menu Catering
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>Populer</span>
          </span>
        </div>
        <div className="halaman-catering-rekomenkasi">
          <div className="halaman-catering-indonesiafood1">
            <span className="halaman-catering-text15">
              <span>Warung Padang</span>
            </span>
            <img
              src="/external/indo21487-ogme-200h.png"
              alt="indo21487"
              className="halaman-catering-indo21"
            />
          </div>
          <div className="halaman-catering-chinesefood1">
            <span className="halaman-catering-text17">
              <span>
                Chib Chib
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <img
              src="/external/chinese21488-5wh-200h.png"
              alt="chinese21488"
              className="halaman-catering-chinese21"
            />
          </div>
          <div className="halaman-catering-arabicfood1">
            <span className="halaman-catering-text19">
              <span>
                Nasi Hainan abah
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <img
              src="/external/arab21488-6jo9-200h.png"
              alt="arab21488"
              className="halaman-catering-arab21"
            />
          </div>
          <div className="halaman-catering-japanesefood1">
            <span className="halaman-catering-text21">
              <span>
                Ichiban
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <img
              src="/external/jepanese21489-9sf-200h.png"
              alt="jepanese21489"
              className="halaman-catering-jepanese21"
            />
          </div>
          <div className="halaman-catering-western1">
            <span className="halaman-catering-text23">
              <span>Warunk Thailan</span>
            </span>
            <img
              src="/external/western21489-ebvt-200h.png"
              alt="western21489"
              className="halaman-catering-western21"
            />
          </div>
          <span className="halaman-catering-text25">
            <span className="halaman-catering-text26">
              Ada
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span className="halaman-catering-text27">Rekomendasi</span>
            <span> buat kamu!</span>
          </span>
        </div>
        <img
          src="/external/image21490-dlal-500h.png"
          alt="image21490"
          className="halaman-catering-image2"
        />
        <div className="halaman-catering-group145">
          <span className="halaman-catering-text29">
            <span>Sabtu</span>
          </span>
          <span className="halaman-catering-text31">
            <span>April</span>
          </span>
          <span className="halaman-catering-text33">
            <span>29</span>
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
        <div className="halaman-catering-footer">
          <img
            src="/external/rectangle2i149-u1jk.svg"
            alt="Rectangle2I149"
            className="halaman-catering-rectangle2"
          />
          <img
            src="/external/ellipse23i149-k1pc-300h.png"
            alt="Ellipse23I149"
            className="halaman-catering-ellipse23"
          />
          <img
            src="/external/image41dcdc31ce644254bc1c16dc134992a31i149-h2fx-400h.png"
            alt="IMAGE41dcdc31ce644254bc1c16dc134992a31I149"
            className="halaman-catering-image41dcdc31ce644254bc1c16dc134992a31"
          />
          <span className="halaman-catering-text43">
            <span>Follow us and keep updated!</span>
          </span>
          <a
            href="instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="halaman-catering-link"
          >
            <img
              src="/external/mageinstagramcirclei149-okeq.svg"
              alt="mageinstagramcircleI149"
              className="halaman-catering-mageinstagramcircle"
            />
          </a>
          <a
            href="facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="halaman-catering-link1"
          >
            <img
              src="/external/bifacebooki149-jms2i.svg"
              alt="bifacebookI149"
              className="halaman-catering-bifacebook"
            />
          </a>
          <a
            href="twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="halaman-catering-link2"
          >
            <img
              src="/external/antdesigntwittercirclefilledi149-i1p.svg"
              alt="antdesigntwittercirclefilledI149"
              className="halaman-catering-antdesigntwittercirclefilled"
            />
          </a>
          <a
            href="tiktok.com"
            target="_blank"
            rel="noreferrer noopener"
            className="halaman-catering-link3"
          >
            <img
              src="/external/magetiktokcirclei149-qj0i.svg"
              alt="magetiktokcircleI149"
              className="halaman-catering-magetiktokcircle"
            />
          </a>
          <img
            src="/external/tablercopyrightfilledi149-oj9j.svg"
            alt="tablercopyrightfilledI149"
            className="halaman-catering-tablercopyrightfilled"
          />
          <img
            src="/external/line58i149-foai.svg"
            alt="Line58I149"
            className="halaman-catering-line58"
          />
          <span className="halaman-catering-text45">
            <span>Light Food - 2024</span>
          </span>
          <span className="halaman-catering-text47">
            <span className="halaman-catering-text48">
              “Light Food
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>
              diharapkan dapat membatu para pedagang untuk memasarkan product
              sehingga dapat membatu pedagang kecil dan UMKM meningkatkan
              penjualan”
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HalamanCatering;
