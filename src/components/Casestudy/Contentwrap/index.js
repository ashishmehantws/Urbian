import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import './styled.css'
import img1 from '../../../assets/images/imgc-1.jpg'
import img2 from '../../../assets/images/CPT_SE-30626_Diageo765-9684.jpg'
import img3 from '../../../assets/images/CPT_SE-30626_Diageo674-9680.jpg'
import img4 from '../../../assets/images/CPT_SE-30626_Diageo752-9703.jpg'
import img6 from '../../../assets/images/dasborad.jpg'
import img7 from '../../../assets/images/Screens2020.png'
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
        <Row className="asoftware-img">
          <Col md="4">
            <img src={img1} className="img-fluid " alt="#" />
            <img src={img2} className="img-fluid " alt="#" />
          </Col>
          <Col md="4">
            <img src={img3} className="img-fluid " alt="#" />
          </Col>
          <Col md="4">
            <img src={img4} className="img-fluid " alt="#" />
            <img src={img4} className="img-fluid" alt="#" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={img6} className="img-fluid mt-1 mb-3 boxshadow" alt="#" />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="3"></Col>
          <Col md="6" className="mt-5">
            <h4>
              We were hands-on and knee-deep taking 30 startups from validating
              business models to testing prototypes with users.
            </h4>
            <p>
              Through group workshops and one on one sessions we helped our
              cohort establish whether they have an actual product that prople
              need. We went about this process by teaching all the participants
              how to test their assumptions using user research Through group
              workshops and one on one sessions we helped our cohort establish
              whether they have an actual product that prople need. We went
              about this process by teaching all the participants how to test
              their assumptions using user research
            </p>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <Col className="mt-5 mb-5">
            <img
              src={img7}
              className="img-fluid mt-5 mb-3 boxshadow position-relative"
              alt="#"
            />
            <span className="img-text">
              We are here at the social tech workshop{' '}
            </span>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Contentwrap
