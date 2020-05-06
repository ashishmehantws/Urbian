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
                <h2>
                  "We have to get what Urbian are providing. With highly skilled
                  teams, they are doing what the big consultancies who have been
                  in here for years just can't do or translate into meaninfful
                  outcomes. This is the first time in two decades of banking
                  that l've seen a transformation actually look like it might
                  succeed."
                </h2>
                <span>- Strategic Projects Lead Sanlam Private Wealth</span>
              </Carousel.Item>
              <Carousel.Item>
                <h2>
                  "We have to get what Urbian are providing. With highly skilled
                  teams, they are doing what the big consultancies who have been
                  in here for years just can't do or translate into meaninfful
                  outcomes. This is the first time in two decades of banking
                  that l've seen a transformation actually look like it might
                  succeed."
                </h2>
                <span>- Strategic Projects Lead Sanlam Private Wealth</span>
              </Carousel.Item>
              <Carousel.Item>
                <h2>
                  "We have to get what Urbian are providing. With highly skilled
                  teams, they are doing what the big consultancies who have been
                  in here for years just can't do or translate into meaninfful
                  outcomes. This is the first time in two decades of banking
                  that l've seen a transformation actually look like it might
                  succeed."
                </h2>
                <span>- Strategic Projects Lead Sanlam Private Wealth</span>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Testimonials
