import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import FormControl from 'react-bootstrap/FormControl'

class Forms extends React.Component {
  render() {
    return (
      <Container className="contactSection content-wrap">
        <Row className="align-items-center">
          <Col lg="3"></Col>
          <Col lg="6" md="7" className="text-left">
            <div className="">
              <h1 className="h1">Hire us for your project</h1>
              <p className="mt-4 mb-5">
                Or if you don't like forms get in touch with us on +27(0)21 461
                0185 or send us an email to{' '}
                <a href="mailto:newproject@urbian.co.za" className="underline">
                  newproject@urbian.co.za
                </a>
              </p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Your company or project name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company or project name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Your name?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name and surname pretty please"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Your email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your company email address"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Your approximate budget(Optional)?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Are you needing to work within a fixed budget?"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>What can Urabian do for you?</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="A summary of your project"
                    required
                  />
                </Form.Group>
                <div className="d-flex justify-content-between align-items-center checkbox-d mt-5">
                  <div className=" font-weight-bold mb-3">
                    <Form.File id="formcheck-api-regular">
                      <Form.File.Input />
                    </Form.File>
                  </div>
                  <button className="styled__Button-ksqKNN iyLmoo styled__Button-kGpwPX dQtCFI mb-3">
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
                </div>
              </Form>
            </div>
          </Col>
          <Col lg="3" md="5" className="pl-5 tipTouch">
            <h5 className="mb-4">Helpful tip - touch on these things:</h5>
            <ul className="pl-3">
              <li>Your product</li>
              <li>Your timeline</li>
              <li>Your location (timezone)</li>
              <li>Where you heard about us</li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Forms
