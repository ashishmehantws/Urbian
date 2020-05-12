import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import careerimg1 from '../../../assets/images/career-img1.jpg'
import careerimg2 from '../../../assets/images/career-img2.jpg'
import careerimg3 from '../../../assets/images/career-img3.jpg'
import careerimg5 from '../../../assets/images/career-img5.jpg'
import careerimg6 from '../../../assets/images/career-img6.jpg'
import careerimg7 from '../../../assets/images/career-img7.jpg'
import careerimg8 from '../../../assets/images/career-img8.jpg'
class Ourculture extends React.Component {
  render() {
    return (
      <Container className="Ourculture_min position-relative">
        <Row className="pt-2 ">
          <Col md="6">
            <Row>
              <Col sm="6">
                <img
                  src={careerimg5}
                  className="img-fluid mt-5"
                  alt="careers"
                />
              </Col>
              <Col sm="6">
                <img
                  src={careerimg5}
                  className="img-fluid mt-5"
                  alt="careers"
                />
              </Col>
            </Row>
          </Col>

          <Col md="4">
            <img src={careerimg6} className="img-fluid mt-5" alt="careers" />
          </Col>
        </Row>
        <Row className="mb-5 pb-5">
          <Col md="4">
            <img src={careerimg7} className="img-fluid mt-5" alt="careers" />
          </Col>
          <Col md="4">
            <img src={careerimg7} className="img-fluid mt-5" alt="careers" />
          </Col>
          <Col md="4">
            <img src={careerimg8} className="img-fluid mt-5" alt="careers" />
          </Col>
        </Row>
        <Row className="pt-lg-5">
          <Col lg="4">
            <h4 className="h2">Our Culture</h4>
          </Col>
          <Col lg="8">
            <p className="d-inline">
              For us Culture is not company values printed on our office walls
              nor a set of KPI's OKR's or belief statements reviewed once a
              year. Our&nbsp;
              <em className="yellowBackground d-inline">
                culture is what we do, not what we say we do.
              </em>
            </p>
            <p>
              Below are a set of virtues we live out willingly everyday whether
              we're being 'noticed' or not.
            </p>
          </Col>
        </Row>
        <Row className="mt-lg-5 pb-5">
          <Col lg="3" md="6">
            <strong>Ownership</strong>
            <p>
              We treat you like an adult which means we expect you to manage
              your time, your tasks and firect client communication when it
              relates to you. Ownership also means being proactive, to earn and
              bulid the trust of our clients so they trust us with building
              great products for them.
            </p>
          </Col>
          <Col lg="3" md="6">
            <strong>Bias for action</strong>
            <p>
              Taking action is your default state. When most people do things,
              they have to decide to do them. When you have a bias for action,
              you automatically do things; not doing things is what takes a
              decision.
            </p>
          </Col>
          <Col lg="3" md="6">
            <strong>Independant Thinking </strong>
            <p>
              We experct you to have an opinion on most things and not just go
              along with the group consensus. Clear points-of-view help give our
              work direction and purpose-robust ego-free discission is
              encouraged. We don't let ego get in the way.
            </p>
          </Col>
          <Col lg="3" md="6">
            <strong>Always learning </strong>
            <p>
              We're curious. Our industry is fast paced and our clients expect
              us to be on top of what's next. We expect you to be always
              learning and growing without being asked because it's what you
              would do even if you didn't work here.
            </p>
          </Col>
        </Row>
        <div className="text-center mt-4 mb-5">
          <Link className="styled__Link-lfEBUk iUBhrC" to="">
            More on our culture
            <svg
              className="styled__Arrow-fdeFVt fRPwvC"
              width="14"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#212529" fill="none" fillRule="evenodd">
                <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
              </g>
            </svg>
          </Link>
        </div>
      </Container>
    )
  }
}

export default Ourculture
