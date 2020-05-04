import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Casestudies extends React.Component {
  render() {
    return (
      <div className="Casestudies-s">
        <Container>
          <Row>
            <Col sm="12">
              <h4>Case studies</h4>
            </Col>
            <Col sm="6" className="mt-5">
              <Link to="">
                <div className="project-img">
                  <img
                    className="img-fluid"
                    src="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&h=1000&fit=max&q=50&auto=compress%2Cformat"
                    alt="#"
                  />
                </div>
                <small>Cimple</small>
                <h6>Public procurement made simple.</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
              </Link>
            </Col>
            <Col sm="6" className="mt-5">
              <Link to="">
                <div className="project-img">
                  <img
                    className="img-fluid"
                    src="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&h=1000&fit=max&q=50&auto=compress%2Cformat"
                    alt="#"
                  />
                </div>
                <small>Cimple</small>
                <h6>Public procurement made simple.</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Casestudies
