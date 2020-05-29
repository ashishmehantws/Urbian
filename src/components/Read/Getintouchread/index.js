import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

import Form from 'react-bootstrap/Form'
import './styled.css'
class Getintouchread extends React.Component {
  render() {
    return (
      <div className="readdsetails">
        <div className="nextup">
          <Container>
            <Row className="align-items-center">
              <Col md="6" lg="6">
                <Link to="/readdetails">
                  <span>Next up</span>
                  <h2>
                    A title of a blog post may or may not need to go as long as
                    two lines but surely not three.
                  </h2>
                  <p>
                    A leading piece of copy of no more than about one or two lines
                    just enough to give someone an idea of what the post is about.
                  </p>
                  </Link>
              </Col>
              <Col className="offset-lg-1" md="6" lg="5">
                <div className="form-div">
                  <p>Stay in the loop with our quarterly newsletter </p>
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
                        <g stroke="#030303" fill="none" fillRule="evenodd">
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

export default Getintouchread
