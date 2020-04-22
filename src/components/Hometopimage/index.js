import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import onehour from '../../assets/images/playlistsherolarg.jpg'
class Hometopimage extends React.Component {
  render() {
    return (
      <div className="hometopimg">
        <Container className="position-relative">
          <img className="img-fluid" src={onehour} alt="1 hour" />
          <strong>We started Urbian out of a real need we saw</strong>
        </Container>
      </div>
    )
  }
}

export default Hometopimage
