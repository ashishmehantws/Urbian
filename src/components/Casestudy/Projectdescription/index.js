import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'

// import ReactPlayer from 'react-player'
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
            <span>
              <mark className="yellowBackground">Socialtechstartup.co.za</mark>
            </span>
          </Col>
          <Col sm="6" className="pt-2">
            <p>
              We were approached to relaunch the Diageo Empowerment Trust South
              Africa's "Social Tech" incubation programme. The programe needed
              new vision in order to reach it's objective of becoming a
              significant contributor to the african start ecosystem. The
              program had to attract, empower and reward deserving South African
              Social Tech enterpreneurs. By helping them refine, and ultimately
              launch their startups to market.
            </p>
            <p>
              The sharp edge of the wedge was choosing to laser focus on
              startups with deep social impact using technology to be profitable
              and scaleable.
            </p>
          </Col>
        </Row>
        <Row className="border-top pt-md-5 mt-md-5 mb-5">
          <Col lg="3" md="6" className="pt-5">
            <h6>Technologies</h6>
            <ul>
              <li>Webflow</li>
              <li>Python &amp; Django</li>
              <li>Wagtail</li>
              <li>SQL</li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="pt-5">
            <h6>Services</h6>
            <ul>
              <li>Program Management</li>
              <li>Product Strategy</li>
              <li>Product Management</li>
              <li>Rapid prototyping</li>
              <li>Brand development</li>
              <li>UX &amp; UI</li>
              <li>Full-Stack development</li>
            </ul>
          </Col>
          <Col lg="3" md="6" className="pt-5">
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
          <Col lg="3" md="6" className="pt-5">
            <h6>Team</h6>
            <ul>
              <li>Anton - Partner</li>
              <li>Wadzi - Program Manager</li>
              <li>Stephan - Product Owner</li>
              <li>Claire - Product Designer</li>
              <li>Heinrich - Lead Developer</li>
              <li>Jason - UX Developer</li>
              <li>Charl - Content &amp; PR</li>
              <li>Mumtaaz - Social Media</li>
              <li>Howie - Video Content</li>
            </ul>
          </Col>
        </Row>
        <Row className="">
          <Col className="text-center border-top d-block mt-lg-5 ">
            <h5 className="h2">
              "They bring a sense of genius and of machiavallian change in terms
              of driving everything that we do. It's just been an absolute
              honour to work with them and we look forward to continue working
              with them in the future."
            </h5>
            <small>- Sinethemba Mafanya, GM Diageo Empowerment Trust SA</small>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Projectdescription
