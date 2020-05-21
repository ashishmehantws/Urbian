import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Culture extends React.Component {
  render() {
    return (
      <div className="ourCulture">
        <Container>
          <Row>
            <Col lg="4">
              <h3>Our culture</h3>
            </Col>
            <Col lg="6">
              <p>
                Purpose and values drive our company. We refer back to them when
                making decisions big and small - from the clients we work with,
                to how we work, to who our teammates are. Our culture is what we
                do, not what we say we do.
              </p>
              <p className="mt-5">
                Below are a set of virtues we live out willingly everyday
                whether we're being 'noticed' or not.
              </p>
              <ul className="mt-5">
                <li className="border-bottom pt-3 pb-3">
                  <a className="styled__Link-lfEBUk iUBhrC servcclink" href="/">
                    Ownership
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
                </li>
                <li className="border-bottom pt-3 pb-3">
                  <a className="styled__Link-lfEBUk iUBhrC servcclink" href="/">
                    Bias for action
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
                </li>
                <li className="border-bottom pt-3 pb-3">
                  <a className="styled__Link-lfEBUk iUBhrC servcclink" href="/">
                    Independent thinking
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
                </li>
                <li className="pt-3 pb-3">
                  <a className="styled__Link-lfEBUk iUBhrC servcclink" href="/">
                    Always learning
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
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Culture
