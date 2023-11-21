import React, { useState } from "react";
import videoSeriesLogo from "../../assest/ic_videoseries.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Divider, SwipeableDrawer } from "@mui/material";
import userICon from "../../assest/user.svg";
import { Directions } from "@mui/icons-material";
import hamburgerIcon from "../../assest/hamburger.svg";
import callIcon from "../../assest/navCall.svg";
import MenuIcon from "@mui/icons-material/Menu";
import achryaSir from "../../assest/ic_favicon.png";
import languageIcon from "../../assest/en.svg";

const Navbar = () => {
  const [navbarSwitch, setnavbarSwitch] = useState(false);
  return (
    <>
      <div style={{ background: "#d24115" }}>
        <nav>
          <div style={{display:"flex"}}>
            <img
              src={achryaSir}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />
            <ul className="nav_list">
              <li>
                <a href="/"></a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/" style={{ display: "flex", alignItems: "center" }}>
                  <span>Live Session</span> <ArrowDropDownIcon />
                </a>
              </li>
              <li>
                <a href="/">Video Series</a>
              </li>
              <li>
                <a href="/">AP Books</a>
              </li>
              <li>
                <a href="/">Ap Articles</a>
              </li>
              <li>
                <a href="/" style={{ display: "flex", alignItems: "center" }}>
                  <span>Invite</span> <ArrowDropDownIcon />
                </a>
              </li>
              <li>
                <a href="/">In Media</a>
              </li>
              <li>
                <a href="/">Donate</a>
              </li>
            </ul>
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div>
                <img src={languageIcon} alt="language selection" />{" "}
                <ArrowDropDownIcon sx={{ color: "white" }} />
              </div>
              <div>
                <a href="/">
                  <img src={callIcon} alt="callicon" />
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={() => setnavbarSwitch(true)}
              >
                <MenuIcon sx={{ color: "white" }} /> <small>Menu</small>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="getAccess_message">
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="min_width">
          <div className="circle_red"></div>
          <h2 className="message">
            Get access to all 350+ video series at once!
          </h2>
        </div>
        <div>
          <button className="click_me_btn">Click Here</button>
        </div>
      </div>
      <div className="searchBar_container">
        <div className="search_box">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src={videoSeriesLogo}
              alt="logo"
              className="videoSeries_logo"
            />
            <div className="searching_box">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRight: "1px solid gray",
                }}
              >
                <span className="all">All</span>{" "}
                <ArrowDropDownIcon sx={{ color: "# 475569" }} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search for Video series"
                  className="searchinput_box"
                />
              </div>
              <div className="searchICon">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div>
            <button className="login_btn">Login</button>
          </div>
        </div>
      </div>
      <SwipeableDrawer
        style={{ zIndex: "99999999" }}
        anchor={"right"}
        open={navbarSwitch}
        onClose={() => setnavbarSwitch(false)}
        onOpen={() => setnavbarSwitch(true)}
        className="swipleDrawer"
      >
        <div style={{ width: "400px", padding: "20px" }}>
          <div>
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              <img src={userICon} alt="loginuser" />
              <span className="login">Login</span>
            </a>
          </div>
          <Divider />
          <div className="listing_details">
            <ul>
              <li>
                <a href="/">Bhagvad Gita</a>
              </li>
              <li>
                <a href="/">Sant Sarita</a>
              </li>
              <li>
                <a href="/">Vedant Samhita</a>
              </li>
              <li>
                <a href="/">Bodh Pratyusha</a>
              </li>
              <li>
                <a href="/">AP Books</a>
              </li>
              <li>
                <a href="/">AP Articles</a>
              </li>
              <li>
                <a href="/">Video Series</a>
              </li>{" "}
              <li>
                <a href="/">AP Circle</a>
              </li>
              <li>
                <a href="/">Invite For Talk</a>
              </li>
              <li>
                <a href="/">Invite For an Interview</a>
              </li>
              <li>
                <a href="/">Media and Public Interaction</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Donate</a>
              </li>
            </ul>
          </div>
          <Divider />

          <div className="listing_details">
            <ul>
              <h5 className="more">More </h5>
              <li>
                <a href="/">PrashantAdvait Foundation</a>
              </li>
              <li>
                <a href="/">Ghar Ghar Upnishad</a>
              </li>
              <li>
                <a href="/">About Achrya Prashant</a>
              </li>
            </ul>
          </div>

          <Divider />

          <div className="listing_details">
            <ul>
              <h5 className="more">EXPLORE CATEGORIES </h5>
              <li>
                <a href="/">Vedant - Upanishads</a>
              </li>
              <li>
                <a href="/">Vedant - Bhagavad Gita</a>
              </li>
              <li>
                <a href="/">Other Scriptures</a>
              </li>
              <li>
                <a href="/">Saints and Masters</a>
              </li>
              <li>
                <a href="/">Life Questions</a>
              </li>
              <li>
                <a href="/">Technical Support</a>
              </li>
            </ul>
          </div>
          <p className="kkkkke">hello</p>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
