import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import onehour from '../../assets/images/1hour.jpg'
// import clockicon from '../../assets/images/clock-icon.jpg'
// import poundicon from '../../assets/images/pound-icon.jpg'
// import infoicon from '../../assets/images/info-icon.jpg'
// import mappinicon from '../../assets/images/mappin-icon.jpg'
class Innovationtop extends React.Component {
  render() {
    return (
      <div className="innovationtop">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 172.92 173.01"
                  width="18px"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" fill="#4a0053" data-name="Layer 1">
                      <path d="M0,86.46C0,39.15,39.06,0,86.46,0s86.46,39.15,86.46,86.46S133.86,173,86.46,173,0,133.86,0,86.46Zm160.5,0a74,74,0,1,0-74,74A73.93,73.93,0,0,0,160.5,86.46ZM35.44,90a5.1,5.1,0,0,1,5.16-5.16H81.29v-54a5.17,5.17,0,0,1,10.33,0V90a5.11,5.11,0,0,1-5.16,5.17H40.6A5.11,5.11,0,0,1,35.44,90Z" />
                    </g>
                  </g>
                </svg>
                &nbsp;&nbsp;1 hour
              </span>
              <div className="clearfix"></div>
              <h1>Innovation readiness diagnostic.</h1>
              <h6>
                Is your company set up to take ideas into actual production fast
                ?
              </h6>
              <ul>
                <li>
                  <svg
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 104.63 104.67"
                  >
                    <g id="Layer_2" data-name="Layer 2" fill="#fff">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M0,52.34a52.32,52.32,0,1,1,52.34,52.33A52.51,52.51,0,0,1,0,52.34ZM66,74.66c2.76,0,4.64-1.68,4.64-4.44A4.28,4.28,0,0,0,66,65.77H48a11.18,11.18,0,0,0,3.65-8.34,14.74,14.74,0,0,0-.3-3.16H62.41a3.13,3.13,0,0,0,3.36-3.21A3,3,0,0,0,62.41,48H50.07a20.19,20.19,0,0,1-.64-4.69c0-4.4,3.11-7.26,8.93-7.26,3.81,0,5.19.79,7.31.79,2.37,0,3.9-1.29,3.9-3.71a4.27,4.27,0,0,0-2.51-4c-2.28-1.23-5.58-1.82-10.08-1.82-11.5,0-18.17,6.12-18.17,15A25,25,0,0,0,39.65,48h-3.8a3,3,0,0,0-3.36,3.11,3.13,3.13,0,0,0,3.36,3.21H41a12.54,12.54,0,0,1,.35,2.66,9.37,9.37,0,0,1-5,8.55c-2.07,1.43-3.45,2.56-3.45,4.93,0,2.62,1.82,4.25,4.54,4.25Z" />
                      </g>
                    </g>
                  </svg>
                  &nbsp;&nbsp; Free
                </li>
                <li>
                  <svg
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 104.63 104.67"
                  >
                    <g id="Layer_2" data-name="Layer 2" fill="#fff">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M0,52.37A52.63,52.63,0,0,1,52.32,0a52.66,52.66,0,0,1,52.31,52.37A52.32,52.32,0,0,1,0,52.37ZM63.68,79.3A4.17,4.17,0,0,0,68,75.09a4.21,4.21,0,0,0-4.31-4.15H58.62V48.76c0-3.25-1.6-5.36-4.65-5.36H44.31a4.16,4.16,0,1,0,0,8.32h4.9V70.94H43.4a4.21,4.21,0,0,0-4.3,4.15,4.16,4.16,0,0,0,4.3,4.21ZM59.22,29a7,7,0,0,0-7-7.16,7.14,7.14,0,1,0,7,7.16Z" />
                      </g>
                    </g>
                  </svg>
                  &nbsp;&nbsp; Learn over Lunchtime
                </li>
                <li>
                  <svg
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 104.63 104.63"
                  >
                    <g id="Layer_2" data-name="Layer 2" fill="#fff">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M52.32,0a52.32,52.32,0,1,0,52.31,52.32A52.31,52.31,0,0,0,52.32,0Zm12,64.35c0,5.19-3,8.15-8.33,8.15H30.23c-5.27,0-8.33-2.81-8.33-8V40.29c0-5.2,3.23-8.16,8.33-8.16H56.17c5.3,0,8.14,3,8.14,8.16Zm18.42.93a3.27,3.27,0,0,1-3.33,3.57,5,5,0,0,1-3.11-1.44l-8.38-7.2V44.55l8.38-7.2A4.87,4.87,0,0,1,79.4,35.9a3.27,3.27,0,0,1,3.33,3.58Z" />
                      </g>
                    </g>
                  </svg>
                  &nbsp;&nbsp; Video call
                </li>
              </ul>
              <Link
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
              </Link>
            </Col>
            <Col lg="6">
              <img className="img-fluid" src={onehour} alt="1 hour" />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Innovationtop
