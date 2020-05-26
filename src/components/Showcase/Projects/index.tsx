import React from 'react'

import { Link, StaticQuery, graphql } from 'gatsby'
import './styled.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

// const Projects: React.FC<Projects> = ({ projects }) => {
const ProjectsData = ({ data }) => (
  <div className="work-min content-wrap">
    <Container>
      <Row>
        <Col>
          <h1 className="h1">Our work.</h1>
          <span>
            For over a decade we have helped ambitious companies re-imagine
            customer experiences, create new models for growth and build new
            capbilities.
          </span>
        </Col>
      </Row>
    </Container>

    <Container className="pb-5">
      <Row>
        {data.allContentfulWork.edges.map(work => (
          <Col sm="6" key={work.node.id} className="mt-5 pr-sm-5">
            <Link
              to={`/casestudy/${work.node.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')}`}
            >
              <div className="project-img">
                <img
                  className="img-fluid"
                  src={work.node.workImage.fluid.src}
                  alt="#"
                />
              </div>
              <small className="light-blue">
                {work.node.chooseClient.clientName}
              </small>
              <h6 className="h3">{work.node.title}</h6>
              <p>{work.node.shortDescription}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
)

export default function Projects(props) {
  return (
    <StaticQuery
      query={graphql`
        query ProjectQuery {
          allContentfulWork(filter: { node_locale: { eq: "en-US" } }) {
            edges {
              node {
                id
                title
                shortDescription
                workImage {
                  fluid {
                    src
                  }
                }
                chooseClient {
                  clientName
                }
              }
            }
          }
        }
      `}
      render={data => <ProjectsData data={data} {...props} />}
    />
  )
}
