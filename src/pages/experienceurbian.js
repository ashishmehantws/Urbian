import React from 'react'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Experiencetab from '../components/Experiencetab'
import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
class experienceurbian extends React.Component {
  render() {
    return (
      <div className="experienceurbian">
        <Layout>
          <Container className="mt-4 pt-3 mb-4 experiencurbian-min">
            <Row>
              <Col sm="12">
                <span className="bred-page">
                  <em>Experience Urbian</em>
                </span>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col sm="12">
                <h2>How munch time do you have ?</h2>
              </Col>
            </Row>
          </Container>
          <Experiencetab></Experiencetab>
          <Headinfo></Headinfo>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default experienceurbian
