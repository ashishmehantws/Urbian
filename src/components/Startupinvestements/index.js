import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import { Link } from 'gatsby'
class Startupinvestements extends React.Component {
  render() {
    return (
      <div className="startupinvestements">
        <Container>
          <Row>
            <Col lg="6" className="pb-4">
              <h2 className="h2">
                Startup <br /> Investements
              </h2>
            </Col>
            <Col lg="6">
              <span>
                Over the last 10 years Urbian has grown into a company where
                like-minded, passionate people can work together, share unique
                ideas and bring them to life. We do this by investing in new
                disruptive businesses or launching our own. We selectively
                partner with early-stage startups to build product roadmaps and
                assemble internal teams. Engagements often begin during product
                definition. They always result in a functioning beta or launched
                product.
              </span>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6">
              <h4 className="h2">Hi5</h4>
              <p>
                <em className="underline">Hi5</em> was birthed inside of Urbian
                form our own frustrations with HR software. After 2 years the
                company grew enough to find it's own offices and continues to
                grow to this day.
              </p>
              <Link className="styled__Link-lfEBUk iUBhrC" to="/contact">
                See case study
                <svg
                  className="styled__Arrow-fdeFVt fRPwvC"
                  width="14"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#fff" fill="none" fillRule="evenodd">
                    <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                    <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                  </g>
                </svg>
              </Link>
            </Col>
            <Col lg="4" md="6">
              <h4 className="h2">Hive</h4>
              <p>
                A partnership since 2019 to define, create the brand and built
                the tech for a new low-cost property platform aimed at
                reimagines how the new middle class live.
              </p>
            </Col>
            <Col lg="4" md="6">
              <h4 className="h2">ManyHands</h4>
              <p>
                Defining, operating, creating the product and brand reinventing
                a marketplace for SMB's to thrive while providing a reqular
                source of income to proffessionals.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h6 className="h2">
                "The team at Urnian have an infectious conidence that anthing is
                possible. When we're with them the future doesn't feel 10 years
                away, it feels 10 weeks away."
              </h6>
              <small>- Pierre van der Merwe, COO Hive</small>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Startupinvestements
