import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import Carousel from 'react-bootstrap/Carousel'

const TestimonialsData = ({ data }) => (
  <div className="Testimonials-slider">
    <Container>
      <Row>
        <Carousel>
          {data.allContentfulTestimonials.nodes.map(Testimonials => (
            <Carousel.Item>
              <h2
                className="h2"
                dangerouslySetInnerHTML={{
                  __html:
                    Testimonials.testimonialsText.childMarkdownRemark.html,
                }}
              />
              <span>- {Testimonials.personName}</span>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  </div>
)

TestimonialsData.propTypes = {
  data: PropTypes.object,
}

export default function Testimonials(props) {
  return (
    <StaticQuery
      query={graphql`
        query TestimonialsQuery {
          allContentfulTestimonials {
            nodes {
              id
              personName
              testimonialsText {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      `}
      render={data => <TestimonialsData data={data} {...props} />}
    />
  )
}
