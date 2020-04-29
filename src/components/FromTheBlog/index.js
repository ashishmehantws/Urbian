import React from 'react'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from '../../../node_modules/react-bootstrap'

import bloglist1 from '../../assets/images/pasted-image-255.jpg'
import bloglist2 from '../../assets/images/pasted-image-331.jpg'
import './styled.css'
import { Link } from 'gatsby'
class FromTheBlog extends React.Component {
  render() {
    return (
      <div className="homeblog-list">
        <Container>
              <Row>
                <Col md="5">
                  <h4>Latest News</h4>
                </Col>
                <Col md="7">
                  <ul>
                    <li className="border-bottom pb-4">
                      <strong>
                        Covide-19: Our candid view on the most crucial things
                        companies need to get right now.
                      </strong>
                      <div className="d-flex flex-wrap align-items-center justify-content-start">
                        <div className="auther-img">
                          <img src={bloglist1} alt="liberty" />
                        </div>
                        <span>Anton Moulder . January 2020</span>
                      </div>
                    </li>
                    <li className="border-bottom pb-4 ">
                      <strong>
                        Introducing Sanlam Private Wealth's Design System.
                      </strong>
                      <div className="d-flex flex-wrap align-items-center justify-content-start">
                        <div className="auther-img">
                          <img src={bloglist2} alt="liberty" />
                        </div>
                        <span>Louis Bester . January 2020</span>
                      </div>
                    </li>
                  </ul>
                  <Link
                    className="styled__Link-d87459-1 fYDdlr colorblack"
                    to="/blog"
                  >
                    More news this way
                    <svg
                      className="styled__Arrow-d87459-0 bQLhSh"
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
      </div>
    )
  }
}

export default FromTheBlog
