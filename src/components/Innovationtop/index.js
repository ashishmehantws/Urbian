import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import onehour from '../../assets/images/1hour.jpg'
import clockicon from '../../assets/images/clock-icon.jpg'
import poundicon from '../../assets/images/pound-icon.jpg'
import infoicon from '../../assets/images/info-icon.jpg'
import mappinicon from '../../assets/images/mappin-icon.jpg'
class Innovationtop extends React.Component {
  render() {
    return (
      <div className="innovationtop">
        <Container>
          <Row>
            <Col md="6">
              <span>
                <img src={clockicon} alt="1 hour" /> 1 hour
              </span>
              <h1>Innvation readiness diagnostic.</h1>
              <h6>
                Is your company set up to take ideas into actual production fast
                ?
              </h6>
              <ul>
                <li>
                  <img className="img-fluid" src={poundicon} alt="1 hour" />
                  Free
                </li>
                <li>
                  <img className="img-fluid" src={infoicon} alt="1 hour" />
                  Learn over Lunchtime
                </li>
                <li>
                  <img className="img-fluid" src={mappinicon} alt="1 hour" />
                  Video call
                </li>
              </ul>
              <a
                className="styled__Link-d87459-1 fAxqDr styled__ArrowLink-sc-1a1di39-5 iHycSY"
                href="/experienceurbian"
              >
                Back to experiences
                <svg
                  className="styled__Arrow-d87459-0 bQLhSh"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#ffffff" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </a>
            </Col>
            <Col md="6">
              <img className="img-fluid" src={onehour} alt="1 hour" />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Innovationtop
