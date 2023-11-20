import React, { useState, useEffect } from "react";

const VideoSeries = () => {
  const [videoData, setvideoData] = useState(null);

  useEffect(() => {
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
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    videosSeriesData();
  }, []);
  return (
    <div className="seriesContainer">
      <div>
        <div>
          <h3 className="heading_series">Video Series ({videoData?.length})</h3>
          <div className="videoSeriesBox">
            {videoData?.map((data, index) => {
              return (
                <div className="unique_box" key={index} onClick={() => window.location.href = "/"}>
                  <div className="bhaag">bhag {data?.series?.order?.seq}</div>
                  <h5 className="series_title">{data?.title}</h5>
                  <p className="series_desc">{data?.subtitle}</p>
                  <span className="duration">2 hours 30 minutes</span>
                  <span className="contribution">
                    Contribution: ₹{data?.amount}&nbsp;
                     <del style={{fontSize: "12px"}}>₹{data?.originalAmount}</del>
                  </span>
                  <span className="language">{data?.language}</span>
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
      </div>
    </div>
  );
};

export default VideoSeries;
