import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Outcomes extends React.Component {
  render() {
    return (
      <Container className="Outcomes-min border-top mt-5 pt-5  clearfix">
        <Row>
          <Col md="5">
            <h4>Outcomes</h4>
          </Col>
          <Col md="7" className="text-left">
            <Row>
              <Col sm="6" className="pt-4 pb-4">
                <strong>2,256</strong>
                <span>entrerprenuers served through the program</span>
              </Col>
              <Col sm="6" className="pt-4 pb-4">
                <strong>1</strong>
                <span>Startup launched in market every 2 months.</span>
              </Col>
              <Col sm="6" className="pt-4 pb-4">
                <strong>400%</strong>
                <span>Increase in applications from the previous year</span>
              </Col>
              <Col sm="6" className="pt-4 pb-4">
                <strong>40</strong>
                <span>
                  venture capital investors attended the final demo day
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Outcomes
