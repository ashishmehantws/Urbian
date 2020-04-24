import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

import ReactPlayer from 'react-player'
class Topimage extends React.Component {
  render() {
    return (
      <Container className="topimage position-relative">
        <Row>
          <Col sm="6">
            <Link to="">Incubators & Accelerators</Link>
            <h1>
              Re-vitalising an african-centric social tech incubator program.
            </h1>
          </Col>
          <Col sm="12" className="mt-5 pt-5">
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url="https://player.vimeo.com/video/347119375?color=ef2200&byline=0&portrait=0"
                width="100%"
                height="100%"
                playing
                controls
                loop
              />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Topimage
