import React, { useState, useEffect } from "react";
import "./reusable.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordions = () => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  useEffect(() => {
    const accordianData = async () => {
      try {
        const response = await fetch(
          "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    accordianData();
  }, []);

  return (
    <div className="faq_container">
      <div className="faq_section">
        <div className="first_container">
          <h2>FAQs</h2>
          <p>
            Can’t find the answer you’re looking for? Reach
            <br className="break-tag" /> out to our&nbsp;
            <a href="/" className="support_redirection">
              support
            </a>
            &nbsp;team.
          </p>
        </div>
        <div className="accordion_container">
          {data?.map((data, index) => {
            return (
              <Accordion
                key={index}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
                disableGutters
                style={{ boxShadow: "none" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  style={{
                    boxShadow: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#525569",
                      fontFamily: "Noto Sans Devanagari",
                      fontWeight: "600",
                      width: "90%",
                    }}
                  >
                    {data?.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "#4c5a6d",
                      fontFamily: "Noto Sans Devanagari",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        data?.answer.replace(
                          /(यहाँ जाकर)/g,
                          '<span style="color: red !important; text-decoration: none !important;">$1</span>'
                        ) || "",
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordions;
