import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'
import teamimg1 from '../../../assets/images/team-image1.jpg'
import teamimg2 from '../../../assets/images/team-image2.jpg'
class Worksection extends React.Component {
  render() {
    return (
      <div>
        <Container className="border-top Worksection mt-5 pt-5 clearfix">
          <Row>
            <Col md="12" className="text-center">
              <h2 className="h2">
                We work in tight-knit cross functional teams.
              </h2>
            </Col>
            <Col sm="4">
              <img src={teamimg1} className="img-fluid mt3" alt="Team" />
            </Col>
            <Col sm="4">
              <img src={teamimg2} className="img-fluid mt3" alt="Team" />
            </Col>
            <Col sm="4">
              <img src={teamimg2} className="img-fluid mt3" alt="Team" />
            </Col>
          </Row>
        </Container>
        <Container className="how-deliver">
          <Row>
            <Col lg="4" className="mt-5">
              <h3 className="h3">How we deliver</h3>
            </Col>
            <Col lg="8">
              <Row>
                <Col sm="6" className="mt-5">
                  <strong>Small, senior teams</strong>
                  <p>
                    The best digital products are created by hands-on,
                    multidisciplinary teams of experts with experience crafting
                    products and deploying at scale.
                  </p>
                </Col>
                <Col sm="6" className="mt-5">
                  <strong>Clear, ambitious KPLs</strong>
                  <p>
                    Our product stratrgists help create category-leading digital
                    experiences by clarifying goals and driving consensus around
                    a focused set of metrics.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm="6" className="mt-5">
                  <strong>Technology from day one</strong>
                  <p>
                    Meaningful digital products are by definition technology
                    projects. Development stats at project kickoff to quickly
                    align on a technology strategy and forward-looking
                    architecture.
                  </p>
                </Col>
                <Col sm="6" className="mt-5">
                  <strong>20 days to market feedback</strong>
                  <p>
                    For most projects, we complete a full design cycle and
                    prototype early, enabling clients to begin validating
                    strategic assumptions and ideas well before deployment.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm="6" className="mt-5">
                  <strong>Ongoing validation</strong>
                  <p>
                    Testing and validation takes place in every phase of our
                    process. Prototypes are tested frequently with uers. We stay
                    lean and help your product do one thing well.
                  </p>
                </Col>
                <Col sm="6" className="mt-5">
                  <strong>Zero big reveals</strong>
                  <p>
                    Creating digital products at scale is challenging enough
                    without investing excessive hours in creating one-off
                    presentations. We don't make you million rand decks. We
                    bulid, prototype, test and repeat.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm="6" className="mt-5">
                  <strong>100 days to launch</strong>
                  <p>
                    We've refined over process by shipping over 100 products for
                    clients and are most often able to get a product to market
                    in under 100 days.
                  </p>
                </Col>
                <Col sm="6" className="mt-5">
                  <strong>Dedicated teams</strong>
                  <p>
                    Our model is based on fully dedicated teams. The same core
                    team that begins an engagement will finish it.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Worksection
