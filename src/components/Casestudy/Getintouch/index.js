import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

import Form from 'react-bootstrap/Form'
import './styled.css'
class Getintouch extends React.Component {
  render() {
    return (
      <div className="Getintouch_min">
        <Container className="Getintouch border-top clearfix">
          <Row>
            <Col lg="6">
              <h4>Get in touch</h4>
            </Col>
            <Col lg="6">
              <p>
                Intersted in learning more about the Social Tech Startup
                Challenge or any other projects?
              </p>
              <p>
                Reach out to
                <Link to="mailto:newbiz@urbian.co.za">
                  {' '}
                  newbiz@urbian.co.za
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
        <div className="nextup">
          <Container>
            <Row>
              <Col sm="12">
                <span>Next up</span>
              </Col>
              <Col lg="6">
                <h5>Clearing a 9-year old feature backlog in 6 months.</h5>
                <p>
                  An agile development process was the key to delivering an
                  insurance API that allows any department to refer insurance
                  leads or sell insurance directly to their client.
                </p>
              </Col>
              <Col lg="6">
                <div className="form-div">
                  <p>Stay in the loop with our</p>
                  <p>quarterly newsletter </p>
                  <Form className="mt-5">
                    <Form.Group controlId="">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        required
                      />
                    </Form.Group>
                    <button className="styled__Button-ksqKNN iyLmoo styled__Button-kGpwPX dQtCFI">
                      Send
                      <svg
                        className="Arrow__Svg-gllSXh SARKW styled__Arrow-ihTfeJ cFLifL"
                        width="14"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#ffffff" fill="none" fillRule="evenodd">
                          <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                          <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                        </g>
                      </svg>
                    </button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Getintouch
