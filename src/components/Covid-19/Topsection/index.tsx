import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

class Topsection extends React.Component {
  render() {
    return (
      <div className="Topsection_min content-wrap clearfix">
        <Container>
          <Row>
            <Col lg="6" className="text-left">
              <h1 className="h1">
                Welcome To the New hi-Tech Low Touch Economy.
              </h1>
              <p>
                We all get it, the world is changing due to Covid-19. We are not
                here to tell you that same story, but to look beyond the current
                news cycle. Which fundamental shifts are here to stay, how will
                they turn industries upside down, and which strategic options do
                you have to go on offense.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Topsection
