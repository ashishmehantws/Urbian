import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

import Casestudies1 from '../../../assets/images/Casestudies-slider.jpg'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import FormControl from 'react-bootstrap/FormControl'
import Louisbester from '../../../assets/images/Louis-bester.jpg'
import shawn from '../../../assets/images/shawn.jpg'
import bablytonstoren from '../../../assets/images/bablytonstoren.jpg'
import stephen from '../../../assets/images/Stephan-grobler.jpg'

class Offers extends React.Component {
  render() {
    return (
      <div className="pt-5 offers_min">
        <div className="skyblue-bg what-donext">
          <Container>
            <h3 className="text-center pb-5 h2">What to do next.</h3>
            <div className="mt-5">
              <div className="sixteen columns">
                <div id="applicationStatus">
                  <ul className="applicationStatus">
                    <li className="applicationStatus">
                      <h6>Already ongoing</h6>
                      <p className="">Short term defence</p>
                      <p className="greyColor">Weeks 0-3</p>
                    </li>
                    <li className="applicationStatus">
                      <h6>What to do now</h6>
                      <p className="">Mid term mitigation</p>
                      <p className="greyColor">Weeks 3-6</p>
                    </li>
                    <li className="applicationStatus">
                      <h6>What to do in 3 weeks</h6>
                      <p className="">Long term growth</p>
                      <p className="greyColor">Weeks 6...</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Row className="border-bt">
              <Col lg="3">
                <em className="rotatetext">
                  <span className="rotate">DEFENSE</span>
                </em>
                <ul className="offeringList">
                  <li>Align senior leadership & setup PMO</li>
                  <li>
                    Protect health & safety of your employees and customers
                  </li>
                  <li>
                    Run macro-economic and micro-economic scenarios on your P/L
                  </li>
                  <li>Keep your operations afloat</li>
                </ul>
              </Col>
              <Col lg="3">
                <ul className="offeringList">
                  <li>Understand mid to long term impact </li>
                  <li>Protect your revenues</li>
                  <li>
                    Define re-budgetting, and implement cash preservation
                    measurements
                  </li>
                  <li>
                    Stabilize your operations (e.g. supply chain, manufacturing)
                  </li>
                </ul>
              </Col>
              <Col lg="3">
                <ul className="offeringList">
                  <li>Monitor actuals vs. scenarios, and adjust accordingly</li>
                  <li>Roll-out re-budgetting and divestments</li>
                  <li>
                    Bring your operations to a new normal for the coming 18
                    months
                  </li>
                </ul>
              </Col>
              <Col lg="3">
                <Link
                  className="styled__Link-lfEBUk iUBhrC font-bold redColor"
                  to="#"
                >
                  <b>View offering</b>
                  <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#ed220c" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </Link>
              </Col>
            </Row>
            <Row className="pt-4">
              <em className="rotatetext">
                <span className="rotate rotate2">OFFENSE</span>
              </em>
              <Col lg="3"></Col>
              <Col lg="3">
                <ul className="offeringList">
                  <li>
                    Understand the new economy, and the growth opportunities it
                    brings{' '}
                  </li>
                  <li>Develop a strategy on how to outperform competitors</li>
                  <li>
                    Plan to pivot or develop products/services/markets/business
                    models
                  </li>
                </ul>
              </Col>
              <Col lg="3">
                <ul className="offeringList">
                  <li>Invest in growth areas</li>
                  <li>Develop M&A plan</li>
                  <li>Pivot yor existing portfolio</li>
                  <li>Develop new products/services/markets/business models</li>
                </ul>
              </Col>
              <Col lg="3">
                <Link
                  className="styled__Link-lfEBUk iUBhrC font-bold redColor"
                  to="#"
                >
                  <b>View offering</b>
                  <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#ed220c" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="mt-5">
          <Row className="pt-5 pb-5">
            <Col lg="6">
              <h5 className="mb-4 servicetext ">
                We have put together a suit of services aimed at{' '}
                <u className="redColor">ensuring business continuity</u> for
                those companies able to and a{' '}
                <u className="redColor">
                  path to develop new digitally enabled revenue streams fast
                </u>{' '}
                for those companies that need to.
              </h5>
            </Col>
          </Row>
          <Row className="pt-5 pb-5 servic_min">
            <Col lg="4">
              <h2 className="mb-4 redColor">One</h2>
            </Col>
            <Col lg="8">
              <h3 className="redColor h2">
                We're here to help you ensure business continuity
              </h3>
              <Row className="ClearFix">
                <Col lg="4">
                  <h6 className="pb-3 h6 pt-5">Remote Work Advisory</h6>
                  <p>
                    Urbian has extensive experience building remote teams
                    because we'e been working remotely in-house for over a
                    decade - it' part of our DNA - it' how we operate. We have
                    the consulting know-how to bring this experience to
                    organisations because we'e a consulting company. We know
                    which tools are useful and which aren't. We know how to run
                    complete software product development work remotely -
                    because it' how we operate.
                  </p>
                  <Link
                    className="styled__Link-lfEBUk iUBhrC font-bold"
                    to="/services"
                  >
                    {' '}
                    View service
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
                </Col>
                <Col lg="4">
                  <h6 className="pb-3 h6 pt-5">Company Handbook</h6>
                  <p>
                    The company handbook is a centralised easy to use tool for
                    employees to access their company' standard operating
                    procedures on all devices. Companies large and small
                    experience incredible gains in productivity and efficiency
                    when the same information doesn't have to be repeated over
                    and over again.
                  </p>
                  <Link
                    className="styled__Link-lfEBUk iUBhrC font-bold"
                    to="/services"
                  >
                    {' '}
                    View offering
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
                </Col>
                <Col lg="4">
                  <h6 className="pb-3 h6 pt-5">Level-up Delivery</h6>
                  <p>
                    Most product problems are actually process and communication
                    problems. Even the most talented people are set up to fail
                    if they aren' supported by a strong foundation around
                    processes. We help individuals and teams mature processes
                    and nurture a healthy and productive culture.
                  </p>
                  <Link
                    className="styled__Link-lfEBUk iUBhrC font-bold"
                    to="/services"
                  >
                    {' '}
                    View service
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
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="casestudy pt-5 pb-5 mt-5">
            <Col lg="7">
              <img className="img-fluid" src={Casestudies1} alt="#" />
            </Col>
            <Col lg="5">
              <span>Case Study</span>
              <h5 className="h3">
                Remote project delivery for Standard Bank Direct
              </h5>
              <p>
                <em className="yellowBackground">Ongoing transformation</em>
                of the Liberty Direct Insurance digital self-service
                customer-facing and employee-facing products, all currently
                being delivered by
                <em className="yellowBackground"> remote teams.</em>
              </p>
              <Link
                className="styled__Link-lfEBUk iUBhrC font-weight-normal mt-5"
                to="/casestudy"
              >
                View case study
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
            </Col>
          </Row>

          <Row className="covidinnovationtop">
            <Col lg="6">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 172.92 173.01"
                  width="18px"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" fill="#fff" data-name="Layer 1">
                      <path d="M0,86.46C0,39.15,39.06,0,86.46,0s86.46,39.15,86.46,86.46S133.86,173,86.46,173,0,133.86,0,86.46Zm160.5,0a74,74,0,1,0-74,74A73.93,73.93,0,0,0,160.5,86.46ZM35.44,90a5.1,5.1,0,0,1,5.16-5.16H81.29v-54a5.17,5.17,0,0,1,10.33,0V90a5.11,5.11,0,0,1-5.16,5.17H40.6A5.11,5.11,0,0,1,35.44,90Z" />
                    </g>
                  </g>
                </svg>
                &nbsp;&nbsp;1 hour
              </span>

              <h3 className="mt-5 clearfix mb-3 h3">What is it?</h3>
              <p className="mt-3 clearfix">
                In a one hour videocall, we'll take the temprature of your
                organisation, asking: How operational are you right now? What's
                going well? What's feeling tricky? And what's blocking you?
              </p>
              <p className="mt-3">
                Meet a Product Director and find out how you can remove
                organisational blockers, to help you move at the speed needed in
                these unprecedented times.
              </p>
              <ul className="mb-5">
                <li>
                  <svg
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 104.63 104.67"
                  >
                    <g id="Layer_2" data-name="Layer 2" fill="#000">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M0,52.34a52.32,52.32,0,1,1,52.34,52.33A52.51,52.51,0,0,1,0,52.34ZM66,74.66c2.76,0,4.64-1.68,4.64-4.44A4.28,4.28,0,0,0,66,65.77H48a11.18,11.18,0,0,0,3.65-8.34,14.74,14.74,0,0,0-.3-3.16H62.41a3.13,3.13,0,0,0,3.36-3.21A3,3,0,0,0,62.41,48H50.07a20.19,20.19,0,0,1-.64-4.69c0-4.4,3.11-7.26,8.93-7.26,3.81,0,5.19.79,7.31.79,2.37,0,3.9-1.29,3.9-3.71a4.27,4.27,0,0,0-2.51-4c-2.28-1.23-5.58-1.82-10.08-1.82-11.5,0-18.17,6.12-18.17,15A25,25,0,0,0,39.65,48h-3.8a3,3,0,0,0-3.36,3.11,3.13,3.13,0,0,0,3.36,3.21H41a12.54,12.54,0,0,1,.35,2.66,9.37,9.37,0,0,1-5,8.55c-2.07,1.43-3.45,2.56-3.45,4.93,0,2.62,1.82,4.25,4.54,4.25Z" />
                      </g>
                    </g>
                  </svg>
                  &nbsp;&nbsp; Free
                </li>
                <li>
                  <svg
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 104.63 104.67"
                  >
                    <g id="Layer_2" data-name="Layer 2" fill="#000">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M0,52.37A52.63,52.63,0,0,1,52.32,0a52.66,52.66,0,0,1,52.31,52.37A52.32,52.32,0,0,1,0,52.37ZM63.68,79.3A4.17,4.17,0,0,0,68,75.09a4.21,4.21,0,0,0-4.31-4.15H58.62V48.76c0-3.25-1.6-5.36-4.65-5.36H44.31a4.16,4.16,0,1,0,0,8.32h4.9V70.94H43.4a4.21,4.21,0,0,0-4.3,4.15,4.16,4.16,0,0,0,4.3,4.21ZM59.22,29a7,7,0,0,0-7-7.16,7.14,7.14,0,1,0,7,7.16Z" />
                      </g>
                    </g>
                  </svg>
                  &nbsp;&nbsp; Learn over Lunchtime
                </li>
                <li>
                  <svg
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 104.63 104.63"
                  >
                    <g id="Layer_2" data-name="Layer 2" fill="#000">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path d="M52.32,0a52.32,52.32,0,1,0,52.31,52.32A52.31,52.31,0,0,0,52.32,0Zm12,64.35c0,5.19-3,8.15-8.33,8.15H30.23c-5.27,0-8.33-2.81-8.33-8V40.29c0-5.2,3.23-8.16,8.33-8.16H56.17c5.3,0,8.14,3,8.14,8.16Zm18.42.93a3.27,3.27,0,0,1-3.33,3.57,5,5,0,0,1-3.11-1.44l-8.38-7.2V44.55l8.38-7.2A4.87,4.87,0,0,1,79.4,35.9a3.27,3.27,0,0,1,3.33,3.58Z" />
                      </g>
                    </g>
                  </svg>
                  &nbsp;&nbsp; Video call
                </li>
              </ul>
              <h4 className="mt-4 h3 ">What will you learn?</h4>
              <ul className="learn">
                <li>
                  Learn how to better run remote teams from our 11 years of
                  running teams ourselves.
                </li>
                <li>
                  Discover how to gain back productivity and efficiency by
                  tweaking your company standard operating procedures.
                </li>
                <li>
                  Learn how to assess which of your team has untapped leadership
                  potential to be used to manage the change.
                </li>
              </ul>
              <h4 className="mt-5 mb-4 h3">Who will run it?</h4>
              <p>A Managing Partner, Product Owner or Delivery Lead.</p>
              <div className="clearfix">
                <div className="will-run mt-4">
                  <img src={Louisbester} className="img-fluid" alt="Img" />
                  <h4 className="h6 mt-3">Louis bester</h4>
                  <span>Product Owner</span>
                </div>
                <div className="will-run mt-4">
                  <img src={shawn} className="img-fluid" alt="Img" />
                  <h4 className="h6 mt-3">Shawn Redmond</h4>
                  <span>Product Owner</span>
                </div>
                <div className="will-run mt-4">
                  <img src={stephen} className="img-fluid" alt="Img" />
                  <h4 className="h6 mt-3">Alton Moulder</h4>
                  <span>Managing Partner</span>
                </div>
              </div>
            </Col>
            <Col lg="6" className="meeting-min">
              <h3 className="redColor pb-3 h2">
                Set up a meeting to discuss your business continuity
              </h3>
              <p className="mb-4">
                Please enter your details here and we'll be in touch to arrange
                a time
              </p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Company or project name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Company or project name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name and surname pretty please"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your company email address"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile number if possible please"
                    required
                  />
                </Form.Group>
                <div className="mt-4 d-flex justify-content-between align-items-center checkbox-d ">
                  {['checkbox'].map(type => (
                    <div
                      key={`custom-${type}`}
                      className=" font-weight-bold mb-3"
                    >
                      <Form.Check
                        custom
                        type={type}
                        id={`custom-${type}`}
                        label={`I want to get ongoing communication `}
                      />
                    </div>
                  ))}
                  <button className="styled__Button-ksqKNN iyLmoo styled__Button-kGpwPX dQtCFI mb-3">
                    Send
                    <svg
                      className="Arrow__Svg-gllSXh SARKW styled__Arrow-ihTfeJ cFLifL"
                      width="14"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#030303" fill="none" fillRule="evenodd">
                        <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                        <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                <small>
                  Once you are signed up to our marketing communication. you can
                  unsubscribe and update your preferences at anytime. We'll
                  share our news, blogs, and invitations to our events.
                  <a href="">View our Privacy Policy</a> to find out more about
                  how we take care of your personal date.
                </small>
              </Form>
            </Col>
          </Row>
          <div className="proejct-head">
            <h2 className="h2">
              "If you're a starting CTO with a very large mandate and hiring a
              team is difficult and slow, it' easy to end up compromising on
              hiring because you'e under so much pressure. Your better option is
              to go to Urbian and get those highly seasoned developers in the
              building early to develop and hire team a for you at the same
              time."
            </h2>
            <span>Reginald, Head of Special Project</span>
            <span>Sanlam Private Wealth</span>
          </div>
        </Container>
        <div className="Two-div pt-2">
          <Container className="clearfix mt-5">
            <Row className="pt-5 pb-5 servic_min">
              <Col lg="4">
                <h2 className="mb-4 redColor">Two</h2>
              </Col>
              <Col lg="8">
                <h3 className=" redColor h2">
                  Use digital to unlock new revenue streams in 100 days.
                </h3>
                <Row className="ClearFix">
                  <Col lg="4">
                    <h6 className="mb-4 mt-5 h6">Rapid Prototyping</h6>
                    <p>
                      We use design thinking to develop a new product idea into
                      a prototype that can be tested with users to help us fill
                      our riskiest knowledge gaps, validate or invalidate our
                      riskiest assumptions and guide future work.
                    </p>
                    <Link
                      className="styled__Link-lfEBUk iUBhrC font-bold"
                      to="/services"
                    >
                      {' '}
                      View service
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
                  </Col>
                  <Col lg="4">
                    <h6 className="mb-4 mt-5 h6">E-Commerce</h6>
                    <p>
                      In many ways Covid-19 has brought a future forward. New
                      logistics models and product delivery lead by E-Commerce
                      is here, now. We've done a lot of work in this space from
                      intersting niche subscription solutions to large scale
                      national e-commerce rollouts.
                    </p>
                    <Link
                      className="styled__Link-lfEBUk iUBhrC font-bold"
                      to="/services"
                    >
                      {' '}
                      View service
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
                  </Col>
                  <Col lg="4">
                    <h6 className="mb-4 mt-5 h6">Self-service</h6>
                    <p>
                      The world continues to be shaped by{' '}
                      <em className="yellowBackground">software and Saas</em>{' '}
                      companies using simpe, easy to use user experience to
                      deliver complex services. We help you not just keep up
                      with this pace but become a pace maker yourself.
                    </p>
                    <Link
                      className="styled__Link-lfEBUk iUBhrC font-bold"
                      to="/services"
                    >
                      {' '}
                      Read More
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
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="casestudy pt-5 pb-5 mt-5">
              <Col lg="7">
                <img className="img-fluid" src={bablytonstoren} alt="#" />
              </Col>
              <Col lg="5">
                <span>Case Study</span>
                <h5 className="h3">
                  Bablytonstoren' Custom E-Commerce Implementation increased
                  sales by 150% in under 6 months.
                </h5>

                <p>
                  Koos bekker and his teamcame to us with the belief that they
                  needed to re-invent their entire e-commerce solution to get
                  the results they wanted, we agreed. So we did.
                </p>
                <Link
                  className="styled__Link-lfEBUk iUBhrC font-weight-normal mt-5"
                  to="/casestudy"
                >
                  View case study
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
              </Col>
            </Row>

            <Row className="covidinnovationtop">
              <Col lg="6">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 172.92 173.01"
                    width="18px"
                  >
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" fill="#fff" data-name="Layer 1">
                        <path d="M0,86.46C0,39.15,39.06,0,86.46,0s86.46,39.15,86.46,86.46S133.86,173,86.46,173,0,133.86,0,86.46Zm160.5,0a74,74,0,1,0-74,74A73.93,73.93,0,0,0,160.5,86.46ZM35.44,90a5.1,5.1,0,0,1,5.16-5.16H81.29v-54a5.17,5.17,0,0,1,10.33,0V90a5.11,5.11,0,0,1-5.16,5.17H40.6A5.11,5.11,0,0,1,35.44,90Z" />
                      </g>
                    </g>
                  </svg>
                  &nbsp;&nbsp;1 hour
                </span>

                <h3 className="mt-5 clearfix mb-3 h3">What is it?</h3>
                <p className="mt-3 clearfix">
                  In a one hour videocall, we'll take the temprature of your
                  organisation, asking a set of questions to determine how ready
                  you are to launch an entirely new business in 4 months.
                </p>
                <p className="mt-3">
                  Meet a managing Partner and/or Product Director and find out
                  how you can remove organisational blockers, to help you move
                  from idea to production, at speed.
                </p>
                <ul className="mb-5">
                  <li>
                    <svg
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 104.63 104.67"
                    >
                      <g id="Layer_2" data-name="Layer 2" fill="#000">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path d="M0,52.34a52.32,52.32,0,1,1,52.34,52.33A52.51,52.51,0,0,1,0,52.34ZM66,74.66c2.76,0,4.64-1.68,4.64-4.44A4.28,4.28,0,0,0,66,65.77H48a11.18,11.18,0,0,0,3.65-8.34,14.74,14.74,0,0,0-.3-3.16H62.41a3.13,3.13,0,0,0,3.36-3.21A3,3,0,0,0,62.41,48H50.07a20.19,20.19,0,0,1-.64-4.69c0-4.4,3.11-7.26,8.93-7.26,3.81,0,5.19.79,7.31.79,2.37,0,3.9-1.29,3.9-3.71a4.27,4.27,0,0,0-2.51-4c-2.28-1.23-5.58-1.82-10.08-1.82-11.5,0-18.17,6.12-18.17,15A25,25,0,0,0,39.65,48h-3.8a3,3,0,0,0-3.36,3.11,3.13,3.13,0,0,0,3.36,3.21H41a12.54,12.54,0,0,1,.35,2.66,9.37,9.37,0,0,1-5,8.55c-2.07,1.43-3.45,2.56-3.45,4.93,0,2.62,1.82,4.25,4.54,4.25Z" />
                        </g>
                      </g>
                    </svg>
                    &nbsp;&nbsp; Free
                  </li>
                  <li>
                    <svg
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 104.63 104.67"
                    >
                      <g id="Layer_2" data-name="Layer 2" fill="#000">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path d="M0,52.37A52.63,52.63,0,0,1,52.32,0a52.66,52.66,0,0,1,52.31,52.37A52.32,52.32,0,0,1,0,52.37ZM63.68,79.3A4.17,4.17,0,0,0,68,75.09a4.21,4.21,0,0,0-4.31-4.15H58.62V48.76c0-3.25-1.6-5.36-4.65-5.36H44.31a4.16,4.16,0,1,0,0,8.32h4.9V70.94H43.4a4.21,4.21,0,0,0-4.3,4.15,4.16,4.16,0,0,0,4.3,4.21ZM59.22,29a7,7,0,0,0-7-7.16,7.14,7.14,0,1,0,7,7.16Z" />
                        </g>
                      </g>
                    </svg>
                    &nbsp;&nbsp; Learn over Lunchtime
                  </li>
                  <li>
                    <svg
                      width="25px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 104.63 104.63"
                    >
                      <g id="Layer_2" data-name="Layer 2" fill="#000">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path d="M52.32,0a52.32,52.32,0,1,0,52.31,52.32A52.31,52.31,0,0,0,52.32,0Zm12,64.35c0,5.19-3,8.15-8.33,8.15H30.23c-5.27,0-8.33-2.81-8.33-8V40.29c0-5.2,3.23-8.16,8.33-8.16H56.17c5.3,0,8.14,3,8.14,8.16Zm18.42.93a3.27,3.27,0,0,1-3.33,3.57,5,5,0,0,1-3.11-1.44l-8.38-7.2V44.55l8.38-7.2A4.87,4.87,0,0,1,79.4,35.9a3.27,3.27,0,0,1,3.33,3.58Z" />
                        </g>
                      </g>
                    </svg>
                    &nbsp;&nbsp; Video call
                  </li>
                </ul>
                <h4 className="mt-4 h3">What will you learn?</h4>
                <ul className="learn">
                  <li>
                    Learn how to better run remote teams from our 11 years of
                    running teams ourselves.
                  </li>
                  <li>
                    Discover how to gain back productivity and efficiency by
                    tweaking your company standard operating procedures.
                  </li>
                  <li>
                    Learn how to assess which of your team has untapped
                    leadership potential to be used to manage the change.
                  </li>
                </ul>
                <h4 className="mt-5 mb-4 h3">Who will run it?</h4>
                <p>A Managing Partner, Product Owner or Delivery Lead.</p>
                <div className="clearfix">
                  <div className="will-run mt-4">
                    <img src={Louisbester} className="img-fluid" alt="Img" />
                    <h4 className="h6 mt-3">Louis bester</h4>
                    <span>Product Owner</span>
                  </div>
                  <div className="will-run mt-4">
                    <img src={shawn} className="img-fluid" alt="Img" />
                    <h4 className="h6 mt-3">Shawn Redmond</h4>
                    <span>Product Owner</span>
                  </div>
                  <div className="will-run mt-4">
                    <img src={stephen} className="img-fluid" alt="Img" />
                    <h4 className="h6 mt-3">Alton Moulder</h4>
                    <span>Managing Partner</span>
                  </div>
                </div>
              </Col>
              <Col lg="6" className="meeting-min">
                <h3 className="redColor pb-3 h2">
                  Would you like to meet to discuss how digital can be used to
                  unlock new revenue?
                </h3>
                <p className="mb-4">
                  Please enter your details here and we'll be in touch to
                  arrange a time
                </p>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Company or project name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company or project name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name and surname pretty please"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your company email address"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Mobile number if possible please"
                      required
                    />
                  </Form.Group>
                  <div className="mt-4 d-flex justify-content-between align-items-center checkbox-d ">
                    {['checkbox'].map(type => (
                      <div
                        key={`custom-${type}`}
                        className=" font-weight-bold mb-3"
                      >
                        <Form.Check
                          custom
                          type={type}
                          id={`custom-${type}`}
                          label={`I want to get ongoing communication `}
                        />
                      </div>
                    ))}
                    <button className="styled__Button-ksqKNN iyLmoo styled__Button-kGpwPX dQtCFI mb-3">
                      Send
                      <svg
                        className="Arrow__Svg-gllSXh SARKW styled__Arrow-ihTfeJ cFLifL"
                        width="14"
                        height="10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g stroke="#030303" fill="none" fillRule="evenodd">
                          <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                          <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <small>
                    Once you are signed up to our marketing communication. you
                    can unsubscribe and update your preferences at anytime.
                    We'll share our news, blogs, and invitations to our events.
                    <a href="">View our Privacy Policy</a> to find out more
                    about how we take care of your personal date.
                  </small>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Offers
