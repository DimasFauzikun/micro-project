import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./event.css";

const Event = (props) => {
  return (
    <div className="event-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="event-event">
        <img
          src="/external/image21466-5bu-500h.png"
          alt="image21466"
          className="event-image2"
        />
        <div className="event-group233">
          <span className="event-text">
            <span>Yuk Kuliner !</span>
          </span>
          <span className="event-text02">
            <span>Cari Event Terdekat</span>
          </span>
        </div>
        <div className="event-event2">
          {/* Navbar */}
          <div className="event-group19">
            <Link to="/home" className="event-nav-link">
              <span className="event-text04">
                <span>Lampung Latern Festival</span>
                <br />
                <span />
              </span>
            </Link>
          </div>
          <img
            src="/external/ellipse101467-3vw-200h.png"
            alt="Ellipse101467"
            className="event-ellipse10"
          />
          <div className="event-group20"></div>
          <span className="event-text08">
            <span>10 Jan - 10 Feb 2024</span>
          </span>
          <span className="event-text10">
            <span>Bandar Lampung</span>
          </span>
          <span className="event-text12">
            <span>
              Lampung Lantern Festival adalah sebuah acara makanan yang diadakan
              di Lampung. Acara ini menampilkan kekayaan kuliner khas daerah
              Lampung yang dipadukan dengan nuansa festival yang meriah, dengan
              sorotan utama pada penerangan lentera yang mempercantik suasana.
              Selama festival, para pengunjung dapat menikmati beragam hidangan
              tradisional Lampung yang khas, sambil menikmati hiburan dan
              atraksi menarik seperti pertunjukan musik, tari, dan pameran seni
              lokal. Lampung Lantern Festival bukan hanya tentang mencicipi
              makanan lezat, tetapi juga merayakan warisan budaya dan keindahan
              alam Lampung dalam suasana yang penuh keceriaan.
            </span>
          </span>
          <img
            src="/external/uiscalender1468-8pm7p.svg"
            alt="uiscalender1468"
            className="event-uiscalender"
          />
        </div>
        <img
          src="/external/uiscalender1468-jhaj.svg"
          alt="uiscalender1468"
          className="event-uiscalender1"
        />
        <div className="event-event1">
          <div className="event-uilcalender"></div>
          <div className="event-group14"></div>
          <Link to="/halaman-catering" className="event-nav-link">
            <img
              src="/external/ellipse91469-sf2d-200h.png"
              alt="Ellipse91469"
              className="event-ellipse9"
            />
          </Link>
          <span className="event-text14">
            <span>Jelajah Pesona Jalur Rempah</span>
            <br />
            <span> Kabupaten Belitung Timur</span>
            <br />
            <span />
          </span>
          <span className="event-text20">
            <span>Belitung Timur</span>
          </span>
          <span className="event-text22">
            <span>20 Feb - 10 Mar 2024</span>
          </span>
          <div className="event-group13">
            <img
              src="/external/rectangle61469-j2or-300h.png"
              alt="Rectangle61469"
              className="event-rectangle61"
            />
          </div>
          <span className="event-text24">
            <span>
              Jelajah Pesona Jalur Rempah merupakan sebuah acara yang
              diselenggarakan di Kabupaten Belitung Timur. Acara ini merupakan
              sebuah event makanan yang bertujuan untuk memperkenalkan dan
              mempromosikan ragam kuliner khas daerah tersebut, dengan fokus
              pada penggunaan rempah-rempah sebagai bahan utama dalam masakan.
              Selain menawarkan pengalaman kuliner yang unik, acara ini juga
              memungkinkan para peserta untuk mengeksplorasi kekayaan budaya dan
              sejarah di sepanjang jalur rempah yang terkenal di Kabupaten
              Belitung Timur. Dengan demikian, Jelajah Pesona Jalur Rempah tidak
              hanya menjadi sarana untuk menikmati hidangan lezat, tetapi juga
              untuk mengenal lebih dalam tentang warisan budaya dan kuliner dari
              daerah tersebut.
            </span>
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
        <div className="event-footer">
          <img
            src="/external/rectangle2i147-nral.svg"
            alt="Rectangle2I147"
            className="event-rectangle2"
          />
          <img
            src="/external/ellipse23i147-h6wy-300h.png"
            alt="Ellipse23I147"
            className="event-ellipse23"
          />
          <span className="event-text34">
            <span>Follow us and keep updated!</span>
          </span>
          <a
            href="instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="event-link"
          >
            <img
              src="/external/mageinstagramcirclei147-o86.svg"
              alt="mageinstagramcircleI147"
              className="event-mageinstagramcircle"
            />
          </a>
          <a
            href="facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="event-link1"
          >
            <img
              src="/external/bifacebooki147-1cyc.svg"
              alt="bifacebookI147"
              className="event-bifacebook"
            />
          </a>
          <a
            href="twitter.com"
            target="_blank"
            rel="noreferrer noopener"
            className="event-link2"
          >
            <img
              src="/external/antdesigntwittercirclefilledi147-mbg.svg"
              alt="antdesigntwittercirclefilledI147"
              className="event-antdesigntwittercirclefilled"
            />
          </a>
          <a
            href="tiktok.com"
            target="_blank"
            rel="noreferrer noopener"
            className="event-link3"
          >
            <img
              src="/external/magetiktokcirclei147-gxrq.svg"
              alt="magetiktokcircleI147"
              className="event-magetiktokcircle"
            />
          </a>
          <img
            src="/external/tablercopyrightfilledi147-o2c.svg"
            alt="tablercopyrightfilledI147"
            className="event-tablercopyrightfilled"
          />
          <img
            src="/external/line58i147-ykm2.svg"
            alt="Line58I147"
            className="event-line58"
          />
          <span className="event-text36">
            <span>Light Food - 2024</span>
          </span>
          <span className="event-text38">
            <span className="event-text39">
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
        <img
          src="/external/image41dcdc31ce644254bc1c16dc134992a311470-g2qq-400h.png"
          alt="IMAGE41dcdc31ce644254bc1c16dc134992a311470"
          className="event-image41dcdc31ce644254bc1c16dc134992a31"
        />
      </div>
    </div>
  );
};

export default Event;
