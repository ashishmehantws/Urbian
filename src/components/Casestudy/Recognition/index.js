import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import img1 from '../../../assets/images/ventureburr-logo.jpg'
import img2 from '../../../assets/images/Bizcommunity-logo.png'
import img3 from '../../../assets/images/africa-logo.png'
class Recognition extends React.Component {
  render() {
    return (
      <Container className="Recognition-min border-top mt-5 clearfix">
        <Row>
          <Col lg="6">
            <h4 className="mb-4 h2">Recognition</h4>
          </Col>
          <Col lg="6">
            <div className="border-bottom pb-5 mb-5">
              <img
                src={img1}
                className="img-fluid mt-1 mb-3  position-relative"
                alt="#"
              />
              <strong>
                "Market research startup iSpani Group wins R2.5m in 2019 Social
                Tech Startup Challenge"
              </strong>
              <Link className="styled__Link-lfEBUk iUBhrC " to="/contact">
                Read more
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#030303" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className="border-bottom pb-5 mb-5">
              <img
                src={img2}
                className="img-fluid mb-3  position-relative"
                alt="#"
              />
              <strong>"Tech startups to battle for R5m seed funding"</strong>
              <Link className="styled__Link-lfEBUk iUBhrC " to="/contact">
                Read more
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#030303" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </div>
            <div className=" pb-5 mb-5">
              <img
                src={img3}
                className="img-fluid mb-3  position-relative"
                alt="#"
              />
              <strong>
                "Social Entrepreneurs are taken from idea to launch, with
                expertise, support and seed funding offered to the most
                promising and scalable busineses."
              </strong>
              <Link className="styled__Link-lfEBUk iUBhrC " to="/contact">
                Read more
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#030303" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Recognition
