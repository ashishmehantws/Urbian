import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import './styled.css'

class Contentwrap extends React.Component {
  render() {
    return (
      <Container className="content-wrap border-top mt-5 clearfix">
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <h4>Asoftware-based people led accelerator program.</h4>
            <p>
              The entire program was run from end-to-end on online cloud-based
              platform. By allowing the platform to handle all the adminstrative
              load like applicants, giving access to resources, submitting
              updates, checking program dates and event days, etc. freed our
              program managers up to spend more time focussing on the
              entrepreneurs and their needs.
            </p>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    )
  }
}

export default Contentwrap
