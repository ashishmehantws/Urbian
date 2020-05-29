import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'
class Projecthead extends React.Component {
  render() {
    return (
      <Container className="mt-5 pt-5 mb-5 pb-5 clearfix">
        <Row>
          <Col md="2"></Col>
          <Col md="8" className="text-center proejcthead">
            <h2>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,"
            </h2>
            <span>Lorem Ipsum is simply dummy specimen book</span>
            <span>Lorem Ipsum is simply dummy</span>
          </Col>
          <Col md="2"></Col>
        </Row>
      </Container>
    )
  }
}

export default Projecthead
