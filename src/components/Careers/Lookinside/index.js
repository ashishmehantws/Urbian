import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'
import insideimg1 from '../../../assets/images/inside-section-img1.jpg'
import insideimg2 from '../../../assets/images/inside-section-img2.jpg'
import insideimg3 from '../../../assets/images/inside-section-img3.jpg'
import insideimg4 from '../../../assets/images/inside-section-img4.jpg'

class Lookinside extends React.Component {
  render() {
    return (
      <div className="Lookinside">
        <Container className="">
          <Row>
            <Col lg="12">
              <h4>Take a look inside</h4>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <img src={insideimg1} className="img-fluid mt-5" alt="careers" />
              <h5>6 Essential Things to Running Happy Remote Teams</h5>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about .
              </p>
            </Col>
            <Col md="6">
              <img src={insideimg2} className="img-fluid mt-5" alt="careers" />
              <h5>Q&A With a PO:Louise</h5>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about .a
                leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about.
              </p>
            </Col>
            <Col md="6">
              <img src={insideimg3} className="img-fluid mt-5" alt="careers" />
              <h5>Anton's Top Ten 1000ft view Ramblings</h5>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about.
              </p>
            </Col>
            <Col md="6">
              <img src={insideimg4} className="img-fluid mt-5" alt="careers" />
              <h5>Being T-Shaped </h5>
              <p>
                A leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about. A
                leading piece of copy of no more than about one or two lines
                just enough to give someone an idea of what the post is about.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Lookinside
