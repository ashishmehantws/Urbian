import React from 'react'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Experiencetab from '../components/Experiencetab'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import Meeting from '../components/Meeting'
import Innovationtop from '../components/Innovationtop'
import Louisbester from '../assets/images/Louis-bester.jpg'
import Stephangrobler from '../assets/images/Stephan-grobler.jpg'
import { Helmet } from 'react-helmet'
class Innovationreadinessdiagnostic extends React.Component {
  render() {
    return (
      <div className="innovation_min">
        <Layout>
          <Helmet>
            <title>Urbian Innovation readiness diagnostic</title>
          </Helmet>
          <Innovationtop></Innovationtop>
          <Container className="pt-3 mb-4 pb-4 readinss-diagnostic">
            <Row className="">
              <Col lg="6">
                <h4 className="mt-4 h3">What is it?</h4>
                <p>
                  In a one hour checkup, we'll take the temperature of your
                  organisation, asking: How innovation ready are you? What's
                  going well? What's feeling tricky? And what's blocking you?
                </p>
                <p>
                  Meet a Product Director and find out how you can remove
                  organisational blockers, to help you move form idea to
                  production, at speed.
                </p>
                <h4 className="mt-4 h3">Who is it for?</h4>
                <p>
                  Product Owners, Product Managers, Innovation leaders and
                  business function leaders who want to create innovative,
                  usercentric digital products.
                </p>
                <h4 className="mt-4 h3">What will you learn?</h4>
                <ul>
                  <li>
                    Discover how every part of your organisation can work
                    together to support your innovation efforts
                  </li>
                  <li>
                    Healthcheck each of your departments to understand how ready
                    you really are for fast innovation
                  </li>
                  <li>
                    Learn how to use evidence to remove blockers between
                    departments and stakeholders
                  </li>
                </ul>
                <h4>Who will run it?</h4>
                <p>A Product Owner or Delivery Lead.</p>
                <div className="clearfix">
                  <div className="will-run mt-4 ">
                    <img src={Louisbester} alt="Louis bester" />
                    <h6 className="h6">Louis bester</h6>
                    <span>Product Owner</span>
                  </div>
                  <div className="will-run mt-4 ">
                    <img src={Stephangrobler} alt="Stephan Grobler" />
                    <h6 className="h6">Stephan Grobler</h6>
                    <span>Delivery Lead</span>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <Meeting></Meeting>
              </Col>
            </Row>
          </Container>
          <Headinfo></Headinfo>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default Innovationreadinessdiagnostic
