import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce from "../../Assets/Projects/ecommerce.png";

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
              imgPath={ecommerce}
              isBlog={false}
              title="ecommerce"
              description="Developed an online platform for purchasing clothes, providing a user-friendly interface and seamless shopping
experience with efficient backend integration."
              ghLink="https://github.com/Mani-kumar-2002/mcom"
              demoLink="https://mcom.onrender.com/"
            />
          </Col>


         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
