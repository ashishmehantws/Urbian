import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'

import ReactPlayer from 'react-player'
class Homevideo extends React.Component {
  render() {
    return (
      <div className="hometopimg">
        <Container className="position-relative">
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
        </Container>
      </div>
    )
  }
}

export default Homevideo
