import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import { Link } from 'gatsby'
class COVIDbanner extends React.Component {
  render() {
    return (
      <div className="Homecovid-banner">
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <Link
                className="styled__Link-lfEBUk iUBhrC font-weight-normal"
                to="/experienceurbian"
              >
                Our service offering response to Covid-19
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#111314" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default COVIDbanner
