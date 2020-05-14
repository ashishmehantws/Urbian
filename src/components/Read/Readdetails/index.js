import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import adminimg from '../../../assets/images/Stephan-grobler.jpg'
import Postimg1 from '../../../assets/images/imgc-1.jpg'
import uploadicon from '../../../assets/images/upload-icon.jpg'
import twittericon from '../../../assets/images/twitter.png'
import facebookicon from '../../../assets/images/facebook.png'
import linkdinicon from '../../../assets/images/linkdin.png'
class Readdetails extends React.Component {
  render() {
    return (
      <Container className="mb-5 blog_post_details content-wrap">
        <Row className="justify-content-center">
          <Col lg="7" className="text-center ">
            <h1 className="h1">
              Disrupting The Traditional Consultancy Model.
            </h1>
            <p>
              A leading piece of copy of no more than about one or two lines
              just enough to give someone an idea of what the post is about.
            </p>
            <div className="post_d align-items-center">
              <div className="postd-img">
                <img src={adminimg} alt="Admin" />
              </div>
              <div className="">
                <span>Anton Moulder, Managing Partner</span>
                <span>Posted January, 2020 in Digital Transformation</span>
              </div>
            </div>
          </Col>
          <Col sm="12" className="mt-5 pt-lg-5">
            <img src={Postimg1} className="img-fluid" alt="News" />
          </Col>
          <Col lg="6" className="mt-5 ">
            <p>
              At some point, every smart business gets to a place where it need
              to disrupt itself. Whether it is implementing a new HR system to
              motivate and inspire staff, or introducing a new app, product or
              service to stay relevant in the market: every business reaches a
              stage where deep-seated change is imperative for growth.
              Sometimes, failure to change leads to failure to succeed, as the
              now famous examples of Kodak and Blackberry Brands have
              demonstrated.
            </p>
            <p>
              For many years business leaders have sought to understand and
              implement this change with the help of outside consultancies.
            </p>
            <p>
              Big name change management and advisory firms are brought in to
              identify where the weaknesses lie, and to chart a way forward for
              the business in its respective market sector. This process usually
              takes months, involves plenty of number crunching, face-to-face
              interviews, painstaking researc and ongoing analysis.
            </p>
          </Col>
          <Col lg="7" className="mt-5 pt-2">
            <img src={Postimg1} className="img-fluid" alt="News" />
            <span>Some image caption test if we need it</span>
          </Col>
          <Col lg="6" className="pt-5 mt-5">
            <h2 className="h2">Designing, developing.. doing</h2>
            <p>
              Whether this process happens with the help of an outside digital
              or innovation specialist, or by hiring internally to implement
              change, the key point is that 'thinking' is being joined by
              'doing' or 'making'. Gone are the days when businesses could chew
              on theories and ideas for months... today, change and innovation
              has to happen quickly and efficiently. It also has to produce
              something tangible and immediately relevant to customers and
              employees.
            </p>
            <p>
              In response, smart business leaders are adjusting the structure
              and makeup of their organisations to reflect this status quo. The
              most successful businesses are lean, agile, and able to pivot
              within months. They are designed for innovation, and to be
              proactive instead of reactive within their respective markets.
              Importantly, futureproof businesses also take their cue from their
              customers and end users - instead of a far removed third party
              'expert'.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center post-tag pt-4">
          <Col lg="6">
            <ul>
              <li>Technology</li>
              <li>Product </li>
              <li>Disruption</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center pt-4">
          <Col
            lg="6"
            className="d-flex flex-wrap align-items-end justify-content-between"
          >
            <Link to="">
              <img src={uploadicon} alt="uploadicon" />
            </Link>
            <ul className="d-inline mb-0">
              <li className="d-inline mr-5">
                <Link to="">
                  <img src={twittericon} alt="uploadicon" />
                </Link>
              </li>
              <li className="d-inline mr-4">
                <Link to="">
                  <img src={facebookicon} alt="uploadicon" />
                </Link>{' '}
              </li>
              <li className="d-inline">
                <Link to="">
                  <img src={linkdinicon} alt="uploadicon" />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col lg="6" className="footer_post_d  border-top pt-2">
            <Row>
              <Col sm="4" className="pt-4">
                <div className="postd-img">
                  <img src={adminimg} alt="Admin" />
                </div>
              </Col>
              <Col sm="8" className="pt-4">
                <h5 className="h4">Anton Moulder</h5>
                <span>Managing Partner at Urbian</span>
                <p>
                  A leading piece of copy of no more than about one or two lines
                  just enough to give someone an idea of what the post is about.{' '}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Readdetails
