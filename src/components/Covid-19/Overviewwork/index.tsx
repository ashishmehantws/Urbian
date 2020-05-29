import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

import join from '../../../assets/images/slack.jpg'
import googlesheet from '../../../assets/images/googlesheet.jpg'

import downloadimg from '../../../assets/images/download.jpg'
import slack from '../../../assets/images/join-slack.jpg'

class Overviewwork extends React.Component {
  render() {
    return (
      <div className="pt-5 pb-5">
        <Container className="clearfix">
          <Row className="pt-5 pb-5 align-items-center">
            <Col lg="6">
              <h6 className="mb-4 redColor">SLACK COMMUNITY</h6>
              <h2 className="h2">Join the discussion with others</h2>
              <p className="mt-5 mb-5">
                Join this open Slack channel and get the chance to discuss and
                share all your thoughts on the Hi-tech Low Touch Economy,
                provide new input or share any feedback.
              </p>
              <Link className=" downloadBtn slack" to="/careers">
                <img src={join} alt="Join the Slack channel" />
                Join the Slack channel
              </Link>
            </Col>
            <Col lg="6">
              <img src={slack} className="img-fluid mt-5" alt="join" />
            </Col>
          </Row>
          <Row className="pt-5 pb-5 align-items-center">
            <Col lg="6">
              <img
                src={googlesheet}
                className="img-fluid mt-5"
                alt="Download: Mindmap Cross Industry Ripple Effects"
              />
            </Col>
            <Col lg="6">
              <h6 className="mb-4 redColor">GOOGLE SHEET</h6>
              <h2 className="h2">
                Download: Mindmap Cross Industry Ripple Effects
              </h2>
              <p className="mt-5 mb-5">
                Plenty of companies are now shifting their focus. it' remarkable
                how many enterpreneurs are already building a new Low touch
                Economy to get our society back up and running.
              </p>
              <Link className="downloadBtn sheet" to="/careers">
                View the Pivot Sheet
                <img src={downloadimg} alt="View the Pivot Sheet" />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Overviewwork
