import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import Carousel from 'react-bootstrap/Carousel'
class Testimonials extends React.Component {
  render() {
    return (
      <div className="Testimonials-slider">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <h2 className="h2">
                  The secret to their success is there ability to assemble
                  talented teams of people that care. I think of Urbian as a
                  critical member of my team, not some outsourced function.
                </h2>
                <span>Keith Elliott, CEO of Met-S Care</span>
              </Carousel.Item>
              <Carousel.Item>
                <h2 className="h2">
                  The secret to their success is there ability to assemble
                  talented teams of people that care. I think of Urbian as a
                  critical member of my team, not some outsourced function.
                </h2>
                <span>Keith Elliott, CEO of Met-S Care</span>
              </Carousel.Item>
              <Carousel.Item>
                <h2 className="h2">
                  The secret to their success is there ability to assemble
                  talented teams of people that care. I think of Urbian as a
                  critical member of my team, not some outsourced function.
                </h2>
                <span>Keith Elliott, CEO of Met-S Care</span>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Testimonials
