import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Postimg1 from '../../../assets/images/imgc-1.jpg'
import Image1 from '../../../assets/images/img1.jpg'
import Image2 from '../../../assets/images/img2.jpg'
import Image3 from '../../../assets/images/img3.jpg'
class Blogcategories extends React.Component {
  render() {
    return (
      <Container className="mb-5 blog_post">
        <h1 className="h1">We write words too.</h1>
        <Row class="experiencurbian-tab row">
          <Col className="">
            <Tabs>
              <TabList>
                <Tab>Everything</Tab>
                <Tab>Covide-19</Tab>
                <Tab>News</Tab>
                <Tab>Strategy</Tab>
                <Tab>Product Management</Tab>
                <Tab>Design Development</Tab>
                <Tab>Technology</Tab>
                <Tab>Digital Transformation</Tab>
              </TabList>

              <TabPanel>
                <div className="tab-top-sect">
                  <img src={Postimg1} className="img-fluid" alt="News" />
                  <Row>
                    <Col lg="10" className="pt-5 pb-5 top-post">
                      <Row>
                        <Col lg="6">
                          <h4>Disrupting The Traditional Consultancy Model.</h4>
                        </Col>
                        <Col lg="6">
                          <p>
                            A leading piece of copy of no more than about one or
                            two lines just enough to give someone an idea of
                            what the post is about.
                          </p>
                          <Link
                            className="styled__Link-lfEBUk iUBhrC font-weight-normal mt-3 float-left"
                            to="/contact"
                          >
                            Read more
                            <svg
                              className="styled__Arrow-fdeFVt fRPwvC"
                              width="14"
                              height="10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="#030303"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                                <path
                                  d="M12.5 5.5H.5"
                                  strokeLinecap="square"
                                ></path>
                              </g>
                            </svg>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Card className="col-md-6">
                    <Card.Img variant="top" src={Image1} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        Fast Company SA's Most Creative People in Business.
                      </Card.Title>
                      <p>
                        A leading piece of copy of no more than about one or two
                        lines just enough to give someone an idea of what the
                        post is about.
                      </p>
                    </Card.Body>
                  </Card>

                  <Card className="col-md-6">
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>Why We Love Lazy Coders.</Card.Title>
                      <p>
                        A leading piece of copy of no more than about one or two
                        lines just enough to give someone an idea of what the
                        post is about. A leading piece of copy of no more than
                        about one or two lines just enough to give someone an
                        idea of what the post is about.
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className="col-md-6">
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        Our Thoughts On The New Normal Of Remote Work.
                      </Card.Title>
                      <p>
                        A leading piece of copy of no more than about one or two
                        lines just enough to give someone an idea of what the
                        post is about.
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className="col-md-6">
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>
                        Covid-19:Our candid view on the most crucial things
                        companies need to get right now.
                      </Card.Title>
                      <p>
                        A leading piece of copy of no more than about one or two
                        lines just enough to give someone an idea of what the
                        post is about. A leading piece of copy of no more than
                        about one or two lines just enough to give someone an
                        idea of what the post is about.
                      </p>
                    </Card.Body>
                  </Card>
                </Row>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>Let's meet 2</h2>
                  <span>
                    The best way to know if we're right for you is to meet up.
                  </span>
                  <span>
                    Here are some suggestions if you've got an hour to spare.
                  </span>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>Let's meet 3</h2>
                  <span>
                    The best way to know if we're right for you is to meet up.
                  </span>
                  <span>
                    Here are some suggestions if you've got an hour to spare.
                  </span>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>Let's meet 4</h2>
                  <span>
                    The best way to know if we're right for you is to meet up.
                  </span>
                  <span>
                    Here are some suggestions if you've got an hour to spare.
                  </span>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>Let's meet 5</h2>
                  <span>
                    The best way to know if we're right for you is to meet up.
                  </span>
                  <span>
                    Here are some suggestions if you've got an hour to spare.
                  </span>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>Let's meet 6</h2>
                  <span>
                    The best way to know if we're right for you is to meet up.
                  </span>
                  <span>
                    Here are some suggestions if you've got an hour to spare.
                  </span>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>Let's meet 7</h2>
                  <span>
                    The best way to know if we're right for you is to meet up.
                  </span>
                  <span>
                    Here are some suggestions if you've got an hour to spare.
                  </span>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-top-sect">
                  <h2>Let's meet 8</h2>
                  <span>
                    The best way to know if we're right for you is to meet up.
                  </span>
                  <span>
                    Here are some suggestions if you've got an hour to spare.
                  </span>
                </div>
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Blogcategories
