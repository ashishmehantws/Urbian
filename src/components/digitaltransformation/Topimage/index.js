import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Bannerimg from '../../../assets/images/banner2-img.jpg'
class Topimage extends React.Component {
  render() {
    return (
      <Container className="top-image position-relative content-wrap">
        <Row>
          <Col lg="6">
            <Link
              className=" styled__Link-d87459-1 fAxqDr styled__ArrowLink-sc-1a1di39-5 iHycSY"
              href="/services"
            >
              View all services
              <svg
                className="styled__Arrow-d87459-0 bQLhSh"
                width="14"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#030303" fill="none" fillRule="evenodd">
                  <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                  <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                </g>
              </svg>
            </Link>
            <h1 className="h1 pt-4">Digital Transformation.</h1>
            <p>
              We work alongside your teams to tackle the toughest challenges
              head on. The result is one combined team making things the right
              way with fewer project hours invested in presentations and more on
              continous delivery.
            </p>
          </Col>
          <Col md="12" className="mt-5 pt-3">
            <img src={Bannerimg} className="img-fluid mb-3" alt="Banner" />
            <span>
              Possibly some text here to not make this feel like a stock photo
            </span>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 pb-5 border-bottom">
          <Col className="text-center proejct_head pb-5">
            <h2 className="h2">
              "The secret to their success is there ability to assemble talented
              teams of people that care. I think of Urbian as a critical member
              of my team, not some outsourced function."
            </h2>
            <span>Keith Elliott, CEO of Met-S Care</span>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Topimage
