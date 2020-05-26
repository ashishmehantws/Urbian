import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'

import ReactPlayer from 'react-player'

class Topimage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    return (
      <Container className="topimage position-relative content-wrap">
        <Row>
          <Col lg="7">
            <Link to="">Incubators & Accelerators</Link>
            <h1 className="h1">{data.title}</h1>
          </Col>
          <Col sm="12" className="mt-lg-5 pt-5">
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

Topimage.propTypes = {
  data: PropTypes.object,
}

export default Topimage
