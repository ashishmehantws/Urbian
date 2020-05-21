import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import contact1 from '../../../assets/images/contact-1.jpg'
import contact2 from '../../../assets/images/contact-2.jpg'
import contact3 from '../../../assets/images/contact-3.jpg'
import contact4 from '../../../assets/images/contact-4.jpg'

class Results extends React.Component {
  render() {
    return (
    <div className="blackBg">
        <Container>
        <div className="text-center resultdes">
          <h2>Small teams. Big results</h2>
          <p>We work in small, dedicated teams of product managers, designers and developers. Each team works on one project at a time to stay focused. We use tools like Notion, Slack and GitHub to communicate frequently.</p>
         </div>
          <Row>
            <Col sm="4">
              <img src={contact1} className="img-fluid mt-5" alt="Team" />
              <img src={contact2} className="img-fluid mt-5 float-right" alt="Team" />
            </Col>
            <Col sm="4">
              <img src={contact3} className="img-fluid mt-5" alt="Team" />
            </Col>
            <Col sm="4">
              <img src={contact4} className="img-fluid mt-5" alt="Team" />
              <img src={contact1} className="img-fluid mt-5" alt="Team" />
            </Col>
          </Row>
        </Container>
     </div>
    )
  }
}

export default Results
