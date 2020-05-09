import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
import serviceimg from '../../../assets/images/service-img.png'
import serviceimg2 from '../../../assets/images/S-2020.png'
import serviceimg3 from '../../../assets/images/desgin-layer.png'
import serviceimg4 from '../../../assets/images/Software.png'
import Reactjsicon from '../../../assets/images/react.svg'
import Graphqlicon from '../../../assets/images/graphql.svg'
import PythonDjangoicon from '../../../assets/images/python.svg'
import ElasticSearchicon from '../../../assets/images/elastic.svg'
import AWSicon from '../../../assets/images/aws.svg'
import GCPicon from '../../../assets/images/gcp.svg'
import Wagtailicon from '../../../assets/images/wagtail.svg'
import Pandasicon from '../../../assets/images/pandas.svg'
class Servicesection extends React.Component {
  render() {
    return (
      <div>
        <Container className="border-top servicesection mt-5 clearfix">
          <Row>
            <Col md="12" className="text-center">
              <h2>
                We' re a new kind of consultancy. Our secret sauce is our
                ability
                <Link to="" className="styled__Link-lfEBUk iUBhrC">
                  to bridge the strategy to delivery gap.
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
            <Col lg="3" md="6" className="mt-5">
              <h6>Incubators, Accelerators, Programs & Labs</h6>
              <p>
                The return on Accelerators Incubators, Innovation Programs and
                R&D Labs world wide is abismal. We've spent a lot of time
                learning about what works and what doesn't from running them
                ourselves.
              </p>
              <Link to="" className="styled__Link-lfEBUk iUBhrC servcclink">
                More on our programs
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
            <Col lg="3" md="6" className="mt-5">
              <h6>Digital Product Innovation </h6>
              <p>
                Whether you're looking to launch a consumer facing product or
                new service aimed at businesses we can help you. We are often
                able to get a new breakthrough product in your customers hands
                in 100 days.
              </p>
              <Link to="" className="styled__Link-lfEBUk iUBhrC servcclink">
                More on digital products
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
            <Col lg="3" md="6" className="mt-5">
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
                  <g stroke="#030303" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </Col>
            <Col lg="3" md="6" className="mt-5">
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
                  <g stroke="#030303" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </Col>
          </Row>
          <Row className="mt-5 pt-5">
            <Col lg="5" md="12" className="mt-lg-5">
              <h4>Everything we do is about building digital products</h4>
            </Col>
            <Col lg="5" md="12" className="mt-5">
              <p>
                We're one of a very few agencies that can take a product idea
                form end to end. From the first discovery meeting to a real
                shipped product. Have a great new product idea and nobody to
                start building it?{' '}
                <mark className="yellowBackground">We're your team.</mark>
              </p>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col lg="1"></Col>
            <Col lg="10" className="d-flex flex-wrap justify-content-md-around">
              <div className=" service-item mt-5">
                <strong>PM &amp; Strategy </strong>
                <ul>
                  <li>Product strategy</li>
                  <li>Brand strategy</li>
                  <li>Business strategy</li>
                  <li>Product management</li>
                  <li>Post-launch capacity building</li>
                </ul>
              </div>
              <div className=" service-item mt-5">
                <strong>Product Design</strong>
                <ul>
                  <li>UX research &amp; testing</li>
                  <li>Rapid prototyping</li>
                  <li>User experience</li>
                  <li>User interface</li>
                  <li>Brand development</li>
                  <li>Content &amp; Writing</li>
                  <li>Illustration</li>
                  <li>Motion &amp; Video</li>
                </ul>
              </div>
              <div className=" service-item mt-5">
                <strong>Development</strong>
                <ul>
                  <li>Technical architecture</li>
                  <li>Front-end engineering</li>
                  <li>Web-App development</li>
                  <li>Mobile App Development</li>
                  <li>API &amp; CMS Development</li>
                  <li>Code auditing &amp; QA</li>
                  <li>DevOps</li>
                </ul>
              </div>
            </Col>
            <Col lg="1"></Col>
          </Row>
        </Container>
        <Container className="Producstrategy">
          <Row className="pb-5 ">
            <Col lg="6" className="mt-5">
              <img src={serviceimg2} className="w-75" alt="service" />
            </Col>
            <Col lg="6" className="mt-5">
              <h4>Product Strategy</h4>
              <p>
                We focus on digital products that meet real customer needs, open
                up markets and generate new sources of revenue. Breakthrough
                digital strategy is built on powerful customer insights,
                sensitivity to existing assets and operational impacet and the
                rapid execuion of ideas to test and evolve the strategy.
              </p>
              <strong>Our development services</strong>
              <ul>
                <li>Product strategy</li>
                <li>Brand strategy </li>
                <li>Business Strategy</li>
                <li>Product management</li>
                <li>Post-launch capacity building</li>
              </ul>
              <span>Case Study</span>
              <h6 className="pb-md-5">
                A design system led new brand home generates a 10x increase in
                business leads.
              </h6>
              <Link
                className="styled__Link-lfEBUk iUBhrC font-weight-normal"
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
          <Row className="pb-5 mt-lg-5 pt-5">
            <Col lg="6" className="mt-lg-5">
              <h4>Product Design</h4>
              <div className="position-relative">
                <p>
                  We help you gain the creative confidence to excel at consumer
                  research and rapidly prototype your product idea continually
                  testing with users in the wild. Our designers who-code are
                  able to exquisitely craft pixel perfect user experiences and
                  most often go from prototype to product launch in under 100
                  days.
                </p>
                <div className="kUmLiD">
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                  <span className=" bzkOoc"></span>
                </div>
              </div>
              <strong>Our product design services</strong>
              <ul>
                <li>UX research & testing </li>
                <li>Rapid prototyping</li>
                <li>User experience</li>
                <li>User interface</li>
                <li>Brand development</li>
                <li>Content & Writing</li>
                <li>Illustration </li>
              </ul>
              <span>Case Study</span>
              <h6 className="pb-md-5">
                A design system led new brand home generates a 10x increase in
                business leads.
              </h6>
              <Link
                className="styled__Link-lfEBUk iUBhrC font-weight-normal"
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
            <Col lg="6" className="mt-5">
              <img
                src={serviceimg3}
                className="w-75 float-right img-fluid"
                alt="service"
              />
            </Col>
          </Row>
        </Container>
        <div className="Softwaredevelopment ">
          <Container>
            <Row className="pb-5">
              <Col lg="6" className="mt-lg-5">
                <img src={serviceimg4} className="w-75 " alt="service" />
              </Col>
              <Col lg="6" className="mt-5">
                <h4>Software Development</h4>
                <p>
                  There's an obsession with detail when it comes to developing
                  what's envisioned and that's why we've adopted some of the
                  industry's best practices for Code Review, Quality AssUrance &
                  Continuous Deployment. Ract is or true workhorse and our
                  unquestionsable tool of choice to develop almost anything.
                </p>
                <strong>Our Development services</strong>
                <ul>
                  <li>Technical architecture</li>
                  <li>Front-end engineering</li>
                  <li>Web-App development</li>
                  <li>Mobile App development</li>
                  <li>API & CMS development</li>
                  <li>Code auditing & QA</li>
                  <li>DevOps</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <span>
                  We love tech. But we only use what's right for the job.
                </span>
              </Col>
            </Row>
            <Row className="text-center ">
              <Col sm="3" xs="6" className="mt-5 mb-3">
                <img src={Reactjsicon} alt="React React Native" />
                <em>React + React Native</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5 mb-3">
                <img src={Graphqlicon} alt="GraphQL" />
                <em>GraphQL</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5 mb-3">
                <img src={PythonDjangoicon} alt="Python  Django" />
                <em>Python + Django</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5 mb-3">
                <img src={ElasticSearchicon} alt="Elastic Search" />
                <em>Elastic Search</em>
              </Col>
            </Row>
            <Row className="text-center">
              <Col sm="3" xs="6" className="mt-5">
                <img src={AWSicon} alt="AWS" />
                <em>AWS</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5">
                <img src={GCPicon} alt="GCP" />
                <em>GCP</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5">
                <img src={Wagtailicon} alt="Wagtail" />
                <em>Wagtail</em>
              </Col>
              <Col sm="3" xs="6" className="mt-5">
                <img src={Pandasicon} alt="Pandas" />
                <em>Pandas</em>
              </Col>
            </Row>
            <Row>
              <Col lg="6"></Col>
              <Col lg="6" className="mt-5 pt-4">
                <span>Case Study</span>
                <h6 className="mb-md-5">
                  Clearing a 9 year old feature backlog in 6 months.
                </h6>
                <Link
                  className="styled__Link-lfEBUk iUBhrC font-weight-normal"
                  to="/casestudy"
                >
                  View case study
                  <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#fff" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Servicesection
