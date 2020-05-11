import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import careerimg1 from '../../../assets/images/career-img1.jpg'
import careerimg2 from '../../../assets/images/career-img2.jpg'
import careerimg3 from '../../../assets/images/career-img3.jpg'
class Topsection extends React.Component {
  render() {
    return (
      <Container className="top-image position-relative">
        <Row>
          <Col sm="6">
            <h1 className="h1">Do the best work of your life.</h1>
            <p>
              We're on a mission to launch products, services, and companies
              that have a meaningful impact on the world.
            </p>
          </Col>
        </Row>
        <Row className="pt-5 pb-5 ">
          <Col md="4">
            <img src={careerimg1} className="img-fluid mt-5" alt="careers" />
          </Col>
          <Col md="4" className="">
            <img src={careerimg2} className="img-fluid mt-5" alt="careers" />
          </Col>
          <Col md="4">
            <img src={careerimg3} className="img-fluid mt-5" alt="careers" />
          </Col>
        </Row>
        <Row className="mt-5 pt-4 pb-5 border-bottom">
          <Col md="12" className="text-center proejct_head pb-5">
            <h2>
              "I love that I can work from home in my inderpants. Thi Lockdown
              hasn't changed my work/life balance one bit, now all Urbian needs
              to do is make food and have it delivered to my home and then we'll
              be sorted."
            </h2>
            <span>-Heinrich Colyn, full-stack developer</span>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Topsection
