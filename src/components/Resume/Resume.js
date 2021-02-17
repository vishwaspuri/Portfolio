import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/VishwasPuri_Backend.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software developer intern [Variety innovation ventures Ltd]"
              date="June 2020 - August 2020"
              content={[
                "Implemented backend for track and trace system for assembly lines using Node.Js along with managing cloud infrastructure",
                "Programmed edge device(Microprocessor) to process data and control the physical end-point by implementing pre-decided constraints",
                "Successfully built a prototype for track and trace system in 2 months in a team of 3 people"
              ]}
            />
            <Resumecontent
              title="Data Science intern [Hertztech Solutions Private Limited, Chennai]"
              date="May 2020 - June 2020"
              content={[
                "Created a model for the Powertrain Mounting System(PMS) with an objective to find the maximum force transmitted from the frame to the PMS",
                "Used Bayesian Optimization to find the optimum position of mounts in order to minimize the force transmitted from frame to PMS. After the optimization, I was able to reduce the force transmitted by 40 percent."
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="M.Sc. Physics and B.E. Mechanical [BIT Pilani] "
              date="2018 - Present"
              content={["Double degree"]}
            />
            <Resumecontent
              title="12TH BOARD [Delhi Public School, Gurgaon]"
              date="2015 - 2017"
              content={["Precentage: 92% (Best 4 subjects)"]}
            />
            <Resumecontent
              title="10TH BOARD [Delhi Public School, Gurgaon] "
              date="2014 - 2015"
              content={["Precentage: 92%"]}
            />
            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
