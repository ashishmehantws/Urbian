import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

import ReactPlayer from 'react-player'
class Projectdescription extends React.Component {
  render() {
    return (
      <Container className="project-desp position-relative">
        <Row className="pb-4">
          <Col sm="6" className="pt-2">
            <strong>Client</strong>
            <span>Diageo Empowerment Trust</span>
            <span>South Africa</span>
            <strong className="mt-5">View Project</strong>
            <span>Socialtechstartup.co.za</span>
          </Col>
          <Col sm="6" className="pt-2">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's Lorem Ipsum is simply
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply
            </p>
          </Col>
        </Row>
        <Row className="border-top pt-5 mt-5 mb-5">
          <Col sm="3" className="pt-5">
            <h6>Technologies</h6>
            <ul>
              <li>Webflow</li>
              <li>Python & Django</li>
              <li>Wagtail</li>
              <li>SQL</li>
            </ul>
          </Col>
          <Col sm="3" className="pt-5">
            <h6>Services</h6>
            <ul>
              <li>Program Management</li>
              <li>Product Strategy</li>
              <li>Product Management</li>
              <li>Rapid prototyping</li>
              <li>Brand development</li>
              <li>UX & UI</li>
              <li>Full-Stack development</li>
            </ul>
          </Col>
          <Col sm="3" className="pt-5">
            <h6>What we did</h6>
            <ul>
              <li>Innovation Program Strategy</li>
              <li>Stakeholder Management</li>
              <li>Participant Co-ordination</li>
              <li>Management Software</li>
              <li>30 Pretotypes</li>
              <li>15 Prototype</li>
              <li>5 MVP's Launched in Market</li>
            </ul>
          </Col>
          <Col sm="3" className="pt-5">
            <h6>Team</h6>
            <ul>
              <li>Anton - Partner</li>
              <li>Wadzi - Program Manager</li>
              <li>Stephan - Product Owner</li>
              <li>Claire - Product Designer</li>
            </ul>
          </Col>
        </Row>
        <Row className="">
          <Col className="text-center border-top d-block mt-5 ">
            <h5>
              "The secret to their success is there ability to assemble talented
              teams of people that care. I think of Urbian as a critical member
              of my team, not some outsourced function."
            </h5>
            <small>Keith Elliott, CEO Of Met-S Care</small>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Projectdescription
