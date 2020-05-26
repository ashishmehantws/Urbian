import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'

// import ReactPlayer from 'react-player'
class Projectdescription extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    return (
      <Container className="project-desp position-relative">
        <Row className="pb-4">
          <Col sm="6" className="pt-2">
            <strong>Client</strong>
            <span>{data.chooseClient.clientName}</span>
            <span>South Africa</span>
            <strong className="mt-5">View Project</strong>
            <span>
              <mark className="yellowBackground">{data.projectLinkUrl}</mark>
            </span>
          </Col>
          <Col sm="6" className="pt-2">
            <p
              dangerouslySetInnerHTML={{
                __html: data.description.childContentfulRichText.html,
              }}
            />
          </Col>
        </Row>
        <Row className="border-top pt-md-5 mt-md-5 mb-5">
          <Col lg="3" md="6" className="pt-5">
            <h6>Technologies</h6>
            <p
              dangerouslySetInnerHTML={{
                __html: data.technologies.childMarkdownRemark.html,
              }}
            />
          </Col>
          <Col lg="3" md="6" className="pt-5">
            <h6>Services</h6>
            <p
              dangerouslySetInnerHTML={{
                __html: data.sources.childMarkdownRemark.html,
              }}
            />
          </Col>
          <Col lg="3" md="6" className="pt-5">
            <h6>What we did</h6>
            <p
              dangerouslySetInnerHTML={{
                __html: data.whatWeDid.childMarkdownRemark.html,
              }}
            />
          </Col>
          <Col lg="3" md="6" className="pt-5">
            <h6>Team</h6>
            <p
              dangerouslySetInnerHTML={{
                __html: data.team.childMarkdownRemark.html,
              }}
            />
          </Col>
        </Row>
        <Row className="">
          <Col className="text-center border-top d-block mt-lg-5 ">
            <h5 className="h2">
              &quot;
              <p
                dangerouslySetInnerHTML={{
                  __html: data.testimonialComments.childMarkdownRemark.html,
                }}
              />
              &quot;
            </h5>
            <small>
              - {data.testimonialPersonDetails.testimonialPersonDetails}
            </small>
          </Col>
        </Row>
      </Container>
    )
  }
}

Projectdescription.propTypes = {
  data: PropTypes.object,
}

export default Projectdescription
