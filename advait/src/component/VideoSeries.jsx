import React, { useState, useEffect } from "react";
import fbIcon from "../assest/fbColor.svg";
import whatsappIcon from "../assest/whatsappColor.svg";
import twitterIcon from "../assest/twitterColor.svg";
import linkedinIcon from "../assest/linkedinColor.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


const VideoSeries = () => {
  const [videoData, setvideoData] = useState([]);
  const [otherVideoData, setOtherVideoData] = useState([]);
  const [santWanidata, setSantWanidata] = useState([]);

  const videosSeriesData = async () => {
    try {
      const response = await fetch(
        "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setvideoData(result?.courses);
      setOtherVideoData(result?.relatedContent);
      setSantWanidata(result?.details);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    videosSeriesData();
  }, []);
  return (
    <div className="seriesContainer">
      <div>
        {/*  search bar  */}

       
        {/* संतवाणी */}
        <div>
          <div className="breadCrumbs">
            <span> Home </span>
            <span>
              <KeyboardArrowRightIcon />
            </span>
            <span>{santWanidata?.title}</span>
          </div>
          <h2 className="heading_santwani">{santWanidata?.title}</h2>
          <div className="santwani_container">
            <div className="img_container">
              <img
                src={`${santWanidata?.thumbnail?.domain}/${santWanidata?.thumbnail?.basePath}/${santWanidata?.thumbnail?.qualities[0]}/${santWanidata?.thumbnail?.key}`}
                className="santwanit_images"
              />
              <img
                src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
                className="sir"
              />
            </div>
            <div className="img_details">
              <h3 className="img_title">{santWanidata?.subtitle}</h3>
              <dl className="img_description"> {santWanidata?.description}</dl>
            </div>
          </div>
          <div className="social_icon_container">
            <p className="share_series_title">Share the series</p>
            <div className="social_icon_box">
              <a href="/">
                <img src={fbIcon} alt="fbIcon" className="socials_icon" />
              </a>

              <a href="/">
                <img
                  src={whatsappIcon}
                  alt="whatsappIcon"
                  className="socials_icon"
                />
              </a>
              <a href="/">
                <img
                  src={twitterIcon}
                  alt="twitterIcon"
                  className="socials_icon"
                />
              </a>
              <a href="/">
                <img
                  src={linkedinIcon}
                  alt="linkedinIcon"
                  className="socials_icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="heading_series">
            Video Series ({videoData?.length || ""})
          </h3>
          <div className="videoSeriesBox">
            {videoData?.map((data, index) => {
              return (
                <div
                  className="unique_box"
                  key={index}
                  onClick={() => (window.location.href = "/")}
                >
                  <div className="bhaag">
                    bhag {data?.series?.order?.seq || ""}
                  </div>
                  <h5 className="series_title">{data?.title || ""}</h5>
                  <p className="series_desc">{data?.subtitle || ""}</p>
                  <span className="duration">2 hours 30 minutes</span>
                  <span className="contribution">
                    Contribution: ₹{data?.amount || ""}&nbsp;
                    <del style={{ fontSize: "12px" }}>
                      ₹{data?.originalAmount || ""}
                    </del>
                  </span>
                  <span className="language">{data?.language || ""}</span>
                  <div className="addtoCart">
                    <div>
                      <span className="addtoCarts">Add to cart </span>
                    </div>
                    <hr />
                    <div>
                      <span className="enroll">Enrol</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Helpful Video Series */}

        <div>
          <h3 className="heading_series">Other Helpful Video Series</h3>
          <div className="otherhelpful_video_container">
            {otherVideoData?.map((data, index) => {
              return (
                <div className="otherhelpful_unique_container" key={index}>
                  <div className="photo_container">
                    <img
                      src={`${data?.thumbnail?.domain}/${data?.thumbnail?.basePath}/${data?.thumbnail?.qualities[0]}/${data?.thumbnail?.key}`}
                      className="helpful_video_series"
                    />

                    <img
                      src={`${data?.thumbnail?.domain}/${data?.thumbnail?.basePath}/${data?.thumbnail?.qualities[0]}/${data?.thumbnail?.key}`}
                      className="helpful_video_series behindone"
                    />
                    <img
                      src={`${data?.thumbnail?.domain}/${data?.thumbnail?.basePath}/${data?.thumbnail?.qualities[0]}/${data?.thumbnail?.key}`}
                      className="helpful_video_series behindtwo"
                    />
                  </div>
                  <div className="details_container">
                    <h4 className="titles">{data?.title || ""}</h4>
                    <span className="subtitles">{data?.subtitle || ""}</span>

                    <span className="count_series">
                      {data?.coursesCount || ""} Video Series
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSeries;
