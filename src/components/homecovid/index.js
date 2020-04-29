import React from 'react'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from '../../../node_modules/react-bootstrap'

import './styled.css'
import { Link } from 'gatsby'
class Homecovid extends React.Component {
  render() {
    return (
      <div className="Homecovid-min">
        <Container>
          <Row>
            <Col md="5">
              <h3>Important</h3>
            </Col>
            <Col md="7">
              <p>
                If you're an organization struggling with the impact of moviing
                your work and team remote due to the COVID-19 outbreak, please
                reach out.
              </p>
              <p>
                If you're an organization struggling with the impact of moviing
                your work and team remote due to the COVID-19 outbreak, please
                reach out.
              </p>
              <p>
                If you're an organization struggling with the impact of moviing
                your work and team remote due to the COVID-19 outbreak, please
                reach out. If you're an organization struggling with the impact
                of moviing your work and team remote due to the COVID-19
                outbreak, please reach out.
              </p>
              <Link
                className="styled__Link-lfEBUk iUBhrC font-weight-normal mt-5"
                to="/experienceurbian"
              >
                Read more on our Covid-19 service offering
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#ab210d" fill="none" fillRule="evenodd">
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

export default Homecovid
