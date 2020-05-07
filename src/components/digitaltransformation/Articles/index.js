import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import Articles1 from '../../../assets/images/pasted-image-3404.jpg'
import Articles2 from '../../../assets/images/pasted-image-3818.jpg'
class Articles extends React.Component {
  render() {
    return (
      <div className=" ">
        <Container className="Articles_s">
          <Row>
            <Col sm="12" className="pb-lg-5">
              <h4>Articles</h4>
            </Col>
            <Col sm="6" className="mt-5 pr-sm-4">
              <Link to="">
                <div className="Articles-img mb-5">
                  <img className="img-fluid" src={Articles1} alt="#" />
                </div>
                <h6>Disrupting the Traditional Consultancy Model.</h6>
                <p>
                  A Leading piece of copy of no more than about one or two lines
                  just enough to give someone an idea of what the post is about
                </p>
              </Link>
            </Col>
            <Col sm="6" className="mt-5 pl-sm-4">
              <Link to="">
                <div className="Articles-img mb-5">
                  <img className="img-fluid" src={Articles2} alt="#" />
                </div>
                <h6>There's no 'i' in UX, It's a Team Sport.</h6>
                <p>
                  A leading piece of copy of no more than about one or two lines
                  just enough to give someone an idea of what the post is about.
                  Aleading piece of copy of no more than about one or two lines
                  just enough to give someone an idea of what the post is about.
                </p>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Articles
