import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import hitechimg from '../../../assets/images/hi-texh.jpg'
import downloadimg from '../../../assets/images/download-icon.svg'

class Downloadreport extends React.Component {
  render() {
    return (
      <Container className="clearfix border-bottom">
        <Row className="pt-5 pb-5 align-items-center">
          <Col lg="5">
            <h5 className="pb-3 h5">In this featured report we look at:</h5>
            <ul className="downloadList">
              <li>Why our world will be very different.</li>
              <li>
                10 Examples of expected shifts in consumer behaviour, and
                opportunities for businesses
              </li>
              <li>Which industries are impacted the most?</li>
              <li>What to do now</li>
            </ul>
            <Link className="downloadBtn sheet" to="/careers">
              Download Report
              <img src={downloadimg} alt="Download Report" />
            </Link>
          </Col>
          <Col lg="7">
            <img
              src={hitechimg}
              className="img-fluid hitechimg"
              alt="hitechimg"
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Downloadreport
