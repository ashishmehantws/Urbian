import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import { Link, StaticQuery, graphql } from 'gatsby'

const SelectclientsData = ({ data }) => (
  <div className="Selectclients content-wrap ">
    <Container>
      <Row>
        <Col lg="6">
          <h1 className="h1">Select clients.</h1>
          <span>
            Our clients treat us like partners because we consistently show that
            our priority is getting results for their business more than billing
            hours for us.
          </span>
        </Col>
      </Row>
      <Row>
        {data.allContentfulClient.edges.map(client => (
          <Col key={client.node.id} lg="4" md="6">
            <h4 className="h2">{client.node.clientName} </h4>
            <p
              dangerouslySetInnerHTML={{
                __html: client.node.description.childContentfulRichText.html,
              }}
            />
            {client.node.links.map(link => (
              <div key={link.id}>
                <Link className="styled__Link-lfEBUk iUBhrC" to={link.linkUrl}>
                  {link.linkLabel}
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
              </div>
            ))}
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="text-center">
          <h6 className="h2">
            &quot; The secret to their success is there ability to assemble
            talented teams of people that care. I think of Urbian as a critical
            member of my team, not some outsourced function.&quot;
          </h6>
          <small>Keith Elliott, CEO Of Met-S Care</small>
        </Col>
      </Row>
    </Container>
  </div>
)

SelectclientsData.propTypes = {
  data: PropTypes.object,
}

export default function Selectclients(props) {
  return (
    <StaticQuery
      query={graphql`
        query ClientQuery {
          allContentfulClient(filter: { node_locale: { eq: "en-US" } }) {
            edges {
              node {
                id
                clientName
                description {
                  childContentfulRichText {
                    html
                  }
                }
                links {
                  linkLabel
                  linkUrl
                  id
                }
              }
            }
          }
        }
      `}
      render={data => <SelectclientsData data={data} {...props} />}
    />
  )
}
