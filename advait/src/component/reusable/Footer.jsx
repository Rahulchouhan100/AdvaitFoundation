import React from "react";
import "./reusable.css";
import youtubeIcon from "../../assest/youtube.svg";
import fbIcon from "../../assest/fbicon.svg";
import twitterIcon from "../../assest/twitterIcon.svg";
import wordpressIcon from "../../assest/wordpress.svg";
import instaIcon from "../../assest/insta.svg";
import threadIcon from "../../assest/thread.svg";
import acharyaSirphoto from "../../assest/ic_favicon.png";
import googlePlayStoreImg from "../../assest/ic_googleplay.png";
import appStoreImg from "../../assest/ic_appstore.png";
import emailIcon from "../../assest/emaiIcon.svg";
import whatsappIcon from "../../assest/whatsapp.svg";
import locationIcon from "../../assest/locationIcon.svg";
import callIcon from "../../assest/callIcon.svg";
import downloadIcon from "../../assest/downloadIcon.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_box">
            <ul>
              <h2>live events</h2>
              <li>
                <a href="/">
                  Bhagvad <br /> Gita
                </a>
              </li>
              <li>
                <a href="/">Sant Sarita</a>
              </li>
              <li>
                <a href="/">
                  Ashtavakra <br /> Samhita
                </a>
              </li>
              <li>
                <a href="/">Bodh Pratyusha</a>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <ul>
              <h2>WISDOM CONTENT</h2>
              <li>
                <a href="/">Video Series</a>
              </li>
              <li>
                <a href="/">AP Books</a>
              </li>
              <li>
                <a href="/">AP Articles</a>
              </li>
              <li>
                <a href="/">AP Circle</a>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <ul>
              <h2>More</h2>
              <li>
                <a href="/">
                  About Acharya <br /> Prashant
                </a>
              </li>
              <li>
                <a href="/">Invite Him</a>
              </li>
              <li>
                <a href="/">Interview Him</a>
              </li>
              <li>
                <a href="/">Ghar Ghar Upanishad</a>
              </li>
              <li>
                <a href="/">Media and Public Interaction</a>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <ul>
              <h2>Social Media</h2>
              <li>
                <p className="language">For English</p>
                <div className="icon_container">
                  <a href="https://www.youtube.com/c/AcharyaPrashant">
                    <img src={youtubeIcon} alt="youtube-icon" />
                  </a>

                  <img src={twitterIcon} alt="twitter-icon" />
                  <img src={fbIcon} alt="facebook-icon" />
                  <img src={instaIcon} alt="instagram-icon" />
                  <img src={wordpressIcon} alt="wordpress-icon" />
                </div>
              </li>
              <li>
                <p className="language">For Hindi</p>
                <div className="icon_container">
                  <img src={youtubeIcon} alt="youtube-icon" />
                  <img src={twitterIcon} alt="twitter-icon" />
                  <img src={threadIcon} alt="thread-icon" />
                  <img src={fbIcon} alt="facebook-icon" />
                  <img src={instaIcon} alt="instagram-icon" />
                </div>
              </li>
            </ul>
          </div>
          <div className="footer_box">
            <ul>
              <h2>
                Download
                <span className="web_hidden" style={{ display: "none" }}>
                  achary Prashant
                </span>{" "}
                app
              </h2>
              <li>
                <a
                  href="/"
                  className="sm-hidden"
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <img
                    src={acharyaSirphoto}
                    alt="achryaSir-photo"
                    className="acharyaSirphoto"
                  />
                  <span>
                    {" "}
                    Acharya <br /> Prashant
                  </span>
                </a>
              </li>
              <div className="appStore_mob">
                <li className="">
                  <a href="/">
                    <img
                      src={googlePlayStoreImg}
                      alt="achryaSir-photo"
                      className="appstore"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      src={appStoreImg}
                      alt="achryaSir-photo"
                      className="appstore"
                    />
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className="footer_box">
            <ul>
              <h2>contact us</h2>
              <li>
                <a
                  href="mailto:support@advait.org.in"
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <img src={emailIcon} alt="emailIcon" className="" />
                  <span>support@advait.org.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+919643750710"
                  target="_blank"
                  className=""
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <img src={whatsappIcon} alt="whatsappIcon" className="" />
                  <span>+91 9650585100</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919650585100"
                  className=""
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <img src={callIcon} alt="whatsappIcon" className="" />
                  <span>+91 9650585100</span>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=""
                  style={{ display: "flex", gap: "12px", alignItems: "center" }}
                >
                  <img src={locationIcon} alt="whatsappIcon" className="" />
                  <span>
                    11, R-5/119, Raj Nagar, Sec. - 5, Ghaziabad, U.P. | PIN:
                    201002
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="horizontol_line">
          <hr className="custom-hr" />
        </div>
        <div className="copyRight_section">
          <p className="privacy">
            Copyright &copy; 2022 PrashantAdvait Foundation
          </p>
          <p className="privacy">
            <a
              href="/"
              className=""
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              Terms & Conditions
            </a>
            |
            <a
              href="/"
              className=""
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              Privacy Policy
            </a>
            |
            <a
              href="/"
              className=""
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              Undertaking
            </a>
          </p>
        </div>
      </footer>
      <div className="bottom_fixed">
        <h4 style={{color:"#334155"}}>Open in App</h4>
        <button className="download_btn">
          <img src={downloadIcon} alt="download-icon" />
          <span>Dowload App</span>
        </button>
      </div>
    </>
  );
};

export default Footer;
