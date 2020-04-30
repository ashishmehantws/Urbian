import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import serviceimg from '../../../assets/images/service-img.png'
class Servicesection extends React.Component {
  render() {
    return (
      <Container className="border-top servicesection mt-5 clearfix">
        <Row>
          <Col md="12" className="text-center">
            <h2>
              We' re a new kind of consultancy. Our secret sauce is our ability
              <Link to="" className="styled__Link-lfEBUk iUBhrC">
                to bridge the strategy to delivery gap.
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#212529" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </h2>
          </Col>
          <Col sm="12" className="text-center">
            <img
              src={serviceimg}
              className="w-90 mt-5 pt-4 mb-4"
              alt="service"
            />
          </Col>
        </Row>
        <Row>
          <Col md="3" className="mt-5">
            <h6>Incubators, Accelerators, Programs & Labs</h6>
            <p>
              The return on Accelerators Incubators, Innovation Programs and R&D
              Labs world wide is abismal. We've spent a lot of time learning
              about what works and what doesn't from running them ourselves.
            </p>
            <Link to="" className="styled__Link-lfEBUk iUBhrC servcclink">
              More on our programs
              <svg
                className="styled__Arrow-fdeFVt fRPwvC"
                width="14"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#212529" fill="none" fillRule="evenodd">
                  <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                  <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                </g>
              </svg>
            </Link>
          </Col>
          <Col md="3" className="mt-5">
            <h6>Digital Product Innovation </h6>
            <p>
              Whether you're looking to launch a consumer facing product or new
              service aimed at businesses we can help you. We are often able to
              get a new breakthrough product in your customers hands in 100
              days.
            </p>
            <Link to="" className="styled__Link-lfEBUk iUBhrC servcclink">
              More on digital products
              <svg
                className="styled__Arrow-fdeFVt fRPwvC"
                width="14"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#212529" fill="none" fillRule="evenodd">
                  <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                  <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                </g>
              </svg>
            </Link>
          </Col>
          <Col md="3" className="mt-5">
            <h6>Digital Transformations</h6>
            <p>
              We work alongside your teams to tackle the toughest challenges
              head on.
            </p>
            <Link to="" className="styled__Link-lfEBUk iUBhrC servcclink">
              More on transformations
              <svg
                className="styled__Arrow-fdeFVt fRPwvC"
                width="14"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#212529" fill="none" fillRule="evenodd">
                  <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                  <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                </g>
              </svg>
            </Link>
          </Col>
          <Col md="3" className="mt-5">
            <h6>New capabilities.</h6>
            <p>
              We have built long-lasting capability inside copmanies through
              hiring ,onboarding and coaching multi-disciplinary teams.
            </p>
            <Link to="" className="styled__Link-lfEBUk iUBhrC servcclink">
              More on this service
              <svg
                className="styled__Arrow-fdeFVt fRPwvC"
                width="14"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#212529" fill="none" fillRule="evenodd">
                  <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                  <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                </g>
              </svg>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Servicesection
