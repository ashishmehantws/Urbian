import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Image1 from '../../assets/images/img1.jpg'
import Image2 from '../../assets/images/img2.jpg'
import Image3 from '../../assets/images/img3.jpg'
class Experiencetab extends React.Component {
  render() {
    return (
      <Container className="mb-5">
        <Row class="experiencurbian-tab row">
          <Col className="">
            <Tabs>
              <TabList>
                <Tab>1 hour</Tab>
                <Tab>1 day</Tab>
                <Tab>1 week</Tab>
                <Tab>2 weeks</Tab>
                <Tab>I have time</Tab>
              </TabList>

              <TabPanel>
                <div className="tab-top-sect">
                  <h2>Let's meet 1</h2>
                  <span>
                    The best way to know if we're right for you is to meet up.
                  </span>
                  <span>
                    Here are some suggestions if you've got an hour to spare.
                  </span>
                </div>
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src={Image1} alt="Image" />
                    <Card.Body>
                      <Card.Title>Innovation health diagnostic</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Is your company set up to get ideas into production fast
                        ?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>Delivery at scale</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        What to meet someone who has delivered large scale
                        projects?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>Buy vs Build</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Struggling with whether to build something from scratch
                        or buy 'off-the-shelf' software?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support your innovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>
                </CardDeck>
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
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src={Image1} alt="Image" />
                    <Card.Body>
                      <Card.Title>Innovation health diagnostic</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Is your company set up to get ideas into production fast
                        ?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>Delivery at scale</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        What to meet someone who has delivered large scale
                        projects?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>Buy vs Build</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Struggling with whether to build something from scratch
                        or buy 'off-the-shelf' software?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support your innovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>
                </CardDeck>
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
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src={Image1} alt="Image" />
                    <Card.Body>
                      <Card.Title>Innovation health diagnostic</Card.Title>
                      <span>learn over a lunchtime</span>
                      <b>
                        Is your company set up to get ideas into production fast
                        ?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>Delivery at scale</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        What to meet someone who has delivered large scale
                        projects?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>Buy vs Build</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Struggling with whether to build something from scratch
                        or buy 'off-the-shelf' software?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support your innovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>
                </CardDeck>
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
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src={Image1} alt="Image" />
                    <Card.Body>
                      <Card.Title>Innovation health diagnostic</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Is your company set up to get ideas into production fast
                        ?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>Delivery at scale</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        What to meet someone who has delivered large scale
                        projects?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>Buy vs Build</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Struggling with whether to build something from scratch
                        or buy 'off-the-shelf' software?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support your innovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>
                </CardDeck>
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
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src={Image1} alt="Image" />
                    <Card.Body>
                      <Card.Title>Innovation health diagnostic</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Is your company set up to get ideas into production fast
                        ?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image2} alt="Image" />
                    <Card.Body>
                      <Card.Title>Delivery at scale</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        What to meet someone who has delivered large scale
                        projects?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support innnovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>

                  <Card>
                    <Card.Img variant="top" src={Image3} alt="Image" />
                    <Card.Body>
                      <Card.Title>Buy vs Build</Card.Title>
                      <span>Learn over a lunchtime</span>
                      <b>
                        Struggling with whether to build something from scratch
                        or buy 'off-the-shelf' software?
                      </b>
                      <ul>
                        <li>
                          Discover how every part of your organisation can work
                          together to support your innovation efforts
                        </li>
                        <li>
                          Healthcheck each of your departments to understand how
                          ready you really are for fast innovation
                        </li>
                        <li>
                          Learn how to use evidence to remove blockers between
                          departments and stakeholder
                        </li>
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Link
                        className="styled__Link-lfEBUk iUBhrC"
                        to="/Innovationreadinessdiagnostic"
                      >
                        Book Now
                        <svg
                          className="styled__Arrow-fdeFVt fRPwvC"
                          width="14"
                          height="10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g stroke="#030303" fill="none" fillRule="evenodd">
                            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                            <path
                              d="M12.5 5.5H.5"
                              strokeLinecap="square"
                            ></path>
                          </g>
                        </svg>
                      </Link>
                    </Card.Footer>
                  </Card>
                </CardDeck>
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Experiencetab
