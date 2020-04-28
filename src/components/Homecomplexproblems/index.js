import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import { Link } from 'gatsby'
import diageotrust from '../../assets/images/diageo-trust-sa.jpg'
import liberty from '../../assets/images/liberty.jpg'
import sanlam from '../../assets/images/sanlam.jpg'
import privatewealth from '../../assets/images/private-wealth.jpg'
import babylonstoren from '../../assets/images/babylonstoren.jpg'
class Homecomplexproblems extends React.Component {
  render() {
    return (
      <div>
        <Container className="complex-problems clearfix">
          <Row>
            <Col md="12 text-center">
              <h3>
                We solve complex Problems <br /> and devliver real impact
              </h3>
            </Col>
          </Row>
          <Row>
            <Col
              md="6"
              className="text-center flex-container pb-5 padding-right border-r border-bottom"
            >
              <Link to="#">
                <div className="flex-item fill">
                  <strong>2,050</strong>
                  <span>
                    entrerprenuers served through the Diageo Social Tech
                    Acceleratot
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
                  </span>
                </div>
                <div className="flex-item">
                  <img className="img-fluid" src={diageotrust} alt="liberty" />
                </div>
              </Link>
            </Col>
            <Col
              md="6"
              className="text-center flex-container pb-5 padding-left border-bottom"
            >
              <Link to="#">
                <div className="flex-item fill">
                  <h5>
                    6 monthsto clear a 9 year feature backlog.
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
                  </h5>
                </div>
                <div className="flex-item">
                  <img className="img-fluid" src={liberty} alt="liberty" />
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col
              md="6"
              className="text-center flex-container pb-5 padding-right border-bottom border-r"
            >
              {' '}
              <Link to="#">
                <div className="flex-item">
                  <h5>
                    Over R50 million of new revenue generated in under 90 days
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
                  </h5>
                </div>
                <div className="flex-item">
                  <img className="img-fluid mr-2" src={sanlam} alt="liberty" />
                  <img
                    className="img-fluid ml-2"
                    src={privatewealth}
                    alt="liberty"
                  />
                </div>
              </Link>
            </Col>
            <Col
              md="6"
              className="text-center flex-container pb-5 padding-left border-bottom"
            >
              <Link to="#">
                <div className="flex-item">
                  <strong>153%</strong>
                  <span>
                    increase in E-Commerce sales
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
                  </span>
                </div>
                <div className="flex-item">
                  <img
                    className="img-fluid"
                    src={babylonstoren}
                    alt="liberty"
                  />
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Homecomplexproblems
