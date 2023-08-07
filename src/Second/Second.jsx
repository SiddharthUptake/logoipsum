import React from "react";
import "./second.css";
import page2 from "../assets/fullm2.png";
import mobile2 from "../assets/mobile2.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Plus, PlusCircle, PlusCircleIcon } from "lucide-react";
import checkcircleimg from "../assets/check-circle 1.png";
const Second = () => {
  return (
    <section className="sec-2" id="aboutus">
      <div className="container-fluid px-5">
        <div className="row mt-5 mb-5">
          <div className="col-lg-5">
            <div className="page2_pattern" data-aos="fade-up">
              <img src={page2} alt="" />
            </div>
          </div>
          <div className="col-lg-7 d-flex justify-content-center align-items-center">
            <div className="page-2-content" data-aos="fade-up">
              <span>All </span> <span className="loc-gradient">Locations </span> <span>are just few taps away</span>
              <div className="mt-5">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<PlusCircleIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="acc-title">
                      <img src={checkcircleimg} alt="" /> &nbsp; Creative Design
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="acc-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cum placeat voluptatibus maiores repellendus sint, impedit
                      assumenda similique reprehenderit dolorem pariatur,
                      doloremque incidunt, ut fugiat eveniet obcaecati labore
                      unde eaque veritatis.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-3">
                  <AccordionSummary
                    expandIcon={<PlusCircle />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="acc-title">
                      <img src={checkcircleimg} alt="" /> &nbsp; Easy To Use
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="acc-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-3">
                  <AccordionSummary
                    expandIcon={<PlusCircle />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className="acc-title">
                      <img src={checkcircleimg} alt="" /> &nbsp; Better User
                      Experience
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="acc-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
