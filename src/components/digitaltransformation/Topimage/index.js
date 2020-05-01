import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Topimage extends React.Component {
  render() {
    return (
      <Container className="top-image position-relative">
        <Row>
          <Col sm="6">
            <Link to="">Incubators & Accelerators</Link>
            <h1>
              Re-vitalising an african-centric social tech incubator program.
            </h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Topimage
