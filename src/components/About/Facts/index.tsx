import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Facts extends React.Component {
  render() {
    return (
      <Container className="facts border-top">
        <Row>
          <Col lg="4" className="mt-5">
            <h3>Facts about us</h3>
          </Col>
          <Col lg="8">
            <Row>
              <Col sm="6" className="mt-5">
                <h2 className="factsTitle">98</h2>
                <strong>Digital products launched</strong>
                <p>
                  We have a 90% repeat business rate. Almost all of our clients
                  offer us additional projects
                </p>
                <a className="styled__Link-lfEBUk iUBhrC servcclink" href="/">
                  View Clients
                  <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#030303" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </a>
              </Col>
              <Col sm="6" className="mt-5">
                <h2 className="factsTitle">11</h2>
                <strong>years in business</strong>
                <p>
                  Has allowed us to expand in to increasingly more challenging
                  products and services
                </p>
                <a className="styled__Link-lfEBUk iUBhrC servcclink" href="/">
                  View case studies
                  <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#030303" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </a>
              </Col>
            </Row>
            <Row>
              <Col sm="6" className="mt-5">
                <h2 className="factsTitle">3</h2>
                <strong>things we do well:</strong>
                <p>product strategy, product design & development</p>
                <a className="styled__Link-lfEBUk iUBhrC servcclink" href="/">
                  View our services
                  <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#030303" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </a>
              </Col>
              <Col sm="6" className="mt-5">
                <h2 className="factsTitle">0</h2>
                <p>
                  of our acquistion <br /> offers accepted
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Facts
