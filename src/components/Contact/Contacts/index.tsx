import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'


class Contacts extends React.Component {
  render() {
    return (
        <Container className="contactDetails">         
            <h2 className="mb-5">Contact details</h2>
            <Row>
              <Col lg="3" md="4">
                <h5>New business</h5>
                <ul>
                  <li><a href="callto:+27(0)21 461 0185">+27(0)21 461 0185</a></li>
                  <li><a href="mailto:newprojects@urbian.co.za" className="text-underline">newprojects@urbian.co.za</a></li>
                </ul>
              </Col>
              <Col lg="3" md="4">
                <h5>Press enquiries</h5>
                <ul>
                  <li>For media please email</li>
                  <li><a href="mailto:press@urbian.co.za" className="text-underline">press@urbian.co.za</a></li>
                </ul>
              </Col>
              <Col lg="3" md="4">
                <h5>General enquiries</h5>
                <ul>
                  <li><a href="callto:+27(0)21 461 0185">+27(0)21 461 0185</a></li>
                  <li><a href="mailto:contact@urbian.co.za" className="text-underline">contact@urbian.co.za</a></li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="4" className="mt-5">
                <h5>Address</h5>
                <address>30 Barnet Street <br/> Gardens, Cape Town</address>
              </Col>
            </Row>
        </Container>
    )
  }
}

export default Contacts
