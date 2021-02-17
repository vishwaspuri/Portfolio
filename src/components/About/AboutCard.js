import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishwas Puri </span>
            from <span className="purple"> Gurgaon, India.</span>
            <br />I am a 3rd year college student pursuing M.Sc. Physics and B.E. Mechanical at BITS
            Pilani.
            <br />
            <br />
            Apart from coding, some of my other inerests are:
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Entrepreneurship
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Football
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vishwas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
