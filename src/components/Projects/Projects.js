import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import covid from "../../Assets/Projects/covid19-1600x900.png";
import powertrain from "../../Assets/Projects/powertrain.jpeg";
// import medhub from "../../Assets/Projects/medHub.png";
import dim from "../../Assets/Projects/dim.jpg";
import socors from "../../Assets/Projects/socors.jpeg";
import chatbot from "../../Assets/Projects/chatbot.png";
// import algo from "../../Assets/Projects/algo.png";
// import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Interactive Voice Response Multi-lingual ChatBot"
              description="Created a voice enabled chatbot capable of speech-to-speech conversation in 4 languages for creating everday functions like getting appointments, checking payment statuses etc."
              link="https://github.com/vishwaspuri/Interactive-Voice-Response"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covifight"
              description="Covifight is a 3-tier contract tracing solution used for tracing Covid-19 virus. The solution leverages neo4j graph database, modern machine learning techniques and social network analysis to provide it's user with alerts related to covid-19."
              link="https://devpost.com/software/covifight"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powertrain}
              isBlog={false}
              title="Powertrain mounting using data science techniques"
              description="The powerplant or engine of a car is arguably the single most vital piece of equipment in an automobile. Its positioning and drive-train connection are obviously subjects of a great deal of research and analysis. The project uses gaussian optimization to find optimum position of powertrain in order to minimize noise and vibrations."
              link="https://github.com/vishwaspuri/nvh-datascience-python-implementation"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socors}
              isBlog={false}
              title="Socors"
              description="I developed a web application for consumers to purchase goods from local shops based on their location and a web application for sellers to register on the socors platform and control how their shops are shown to the consumers"
              link="https://github.com/vishwaspuri/socors"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dim}
              isBlog={false}
              title="Analysis of supervised and unsupervised dimensionality reduction algorithms in R"
              description="Worked on analysing the effect of dimensionality reduction on the accuracy of classification algorithms. Implemented PCA, SVM, FLD and KNN on the iris dataset to compare their relative accuracy on the dataset"
              link="https://github.com/vishwaspuri/MLAssignmentR"
            />
          </Col>
        </Row>
        {/* <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/jovianml/plant-ai-c8fc95ed90e6"
              title="Plant AI"
              site="medium.com"
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
