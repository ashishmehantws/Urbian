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
            <Col sm="6">
              <h2>
                Startup <br /> Investements
              </h2>
            </Col>
            <Col sm="6">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. orem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <h4>Hi5</h4>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing
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
            <Col sm="4">
              <h4>Hive</h4>
              <p>
                Why do we use it? It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters,
              </p>
            </Col>
            <Col sm="4">
              <h4>ManyHands</h4>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h6>
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
