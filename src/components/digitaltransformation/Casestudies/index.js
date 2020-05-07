import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Work1 from '../../../assets/images/Screenshot-2020.jpg'
import work2 from '../../../assets/images/296562873-copy-10498.jpg'
class Casestudies extends React.Component {
  render() {
    return (
      <div className="Casestudies-s">
        <Container>
          <Row>
            <Col sm="12" className="pb-lg-5">
              <h4>Case studies</h4>
            </Col>
            <Col sm="6" className="mt-5 pr-sm-5">
              <Link to="">
                <div className="project-img">
                  <img className="img-fluid" src={Work1} alt="#" />
                </div>
                <small className="light-blue">Sanlam Private wealth</small>
                <h6>
                  A design system led now brand home generates a 10x increase in
                  business leads.
                </h6>
                <p>
                  Product Management, Branding, UI/UX, Front-End Development,
                  Back-End Development
                </p>
              </Link>
            </Col>
            <Col sm="6" className="mt-5 pl-sm-6">
              <Link to="">
                <div className="project-img">
                  <img className="img-fluid" src={work2} alt="#" />
                </div>
                <small>Standard Bank</small>
                <h6>Clearing a 9-year old feature backlog in 6 months.</h6>
                <p>
                  Product Management, Branding, UI/UX, Front-End Development,
                  Back-End Development
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
