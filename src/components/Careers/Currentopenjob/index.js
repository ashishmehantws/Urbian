import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Currentopenjob extends React.Component {
  render() {
    return (
      <Container className="Currentopenjob mt-5 pt-lg-5 ">
        <Row>
          <Col lg="5" className="pt-4" id="current-openings">
            <h2>
              Current open <br /> positions
            </h2>
          </Col>
          <Col lg="5">
            <div className="w-100 border-bottom pb-4 pt-4">
              <Link to="#">
                <strong>Quality Assurance (4 month contract)</strong>
                <p>
                  This is a short piece of descriptive copy about the position
                  bing offered
                </p>
                <span>Anywhere . Full-time </span>
              </Link>
            </div>
            <div className="w-100 border-bottom  pb-4 pt-4">
              <Link to="#">
                <strong>Product Manager</strong>
                <p>
                  This is a short piece of descriptive copy about the position
                  bing offered
                </p>
                <span>Anywhere . Full-time </span>
              </Link>
            </div>
            <div className="w-100 border-bottom pb-4 pt-4">
              <Link to="#">
                <strong>Looking for something else?</strong>
                <p>
                  If you think you could still be a fit ,feel free to apply for
                  a position of your choice.
                </p>
                <span>Anywhere . Full-time </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Currentopenjob
