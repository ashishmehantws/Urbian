import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import './styled.css'
class Whyurbian extends React.Component {
  render() {
    return (
      <Container className="why-urbian position-relative">
        <Row>
          <Col lg="4" className="pb-4">
            <h2 className="h2">Why use Urbian?</h2>
          </Col>
          <Col lg="8">
            <Row>
              <Col md="4">
                <strong>Truly Agile</strong>
                <p>
                  We don't pay lip service to Agile methodologies: we live and
                  breathe them everyday whether on client work or our own
                  startups. Our prototype-first approach helps us get tangible
                  fast, mitigate risks, and quickly uncover new opportunities
                  and challenges. We understand how to make Agile practices work
                  within traditional and heavily regulated R&D processes and
                  organisations.
                </p>
              </Col>
              <Col md="4">
                <strong>Teaching by Doing</strong>
                <p>
                  We bring our clients on the product journey: from executive
                  coaching sessions to working shoulder-to-shoulder with product
                  teams, we use a' show me, don't tell me' approach. Our tools
                  and techniques are expkicitly designed for the needs of
                  organisations moving to being fully 'digital'.
                </p>
              </Col>
              <Col md="4">
                <strong>Practice</strong>
                <p>
                  Long before it became popular, we embraced agile and blended
                  teams with our clients, developing new and different ways of
                  working. We've done the hard yards to master how we take our
                  clients on the journey with us, and honed our skills at
                  changing culture and behavior around collaboration,
                  experimentation and shipping early.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Whyurbian
