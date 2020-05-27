import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql, Link } from 'gatsby'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from '../../../node_modules/react-bootstrap'

import './styled.css'

const HomecovidData = ({ data }) => (
  <div className="Homecovid-min">
    <Container>
      <Row>
        <Col md="4" className="mb-4">
          <h3 className="h3">Important</h3>
        </Col>
        <Col md="6">
          {data.allContentfulHomePageContent.nodes.map(Homecovid => (
            <p
              dangerouslySetInnerHTML={{
                __html: Homecovid.importantSection.childMarkdownRemark.html,
              }}
            />
          ))}
          <Link
            className="styled__Link-lfEBUk iUBhrC float-left font-weight-normal mt-3"
            to="/experienceurbian"
          >
            Read more on our Covid-19 service offering
            <svg
              className="styled__Arrow-fdeFVt fRPwvC"
              width="14"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#a71400" fill="none" fillRule="evenodd">
                <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
              </g>
            </svg>
          </Link>
        </Col>
        <Col md="2"></Col>
      </Row>
    </Container>
  </div>
)
HomecovidData.propTypes = {
  data: PropTypes.object,
}

export default function Homecovid(props) {
  return (
    <StaticQuery
      query={graphql`
        query HomecovidQuery {
          allContentfulHomePageContent {
            nodes {
              id
              importantSection {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      `}
      render={data => <HomecovidData data={data} {...props} />}
    />
  )
}
