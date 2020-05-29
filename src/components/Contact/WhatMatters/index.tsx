import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'


class WhatMatters extends React.Component {
  render() {
    return (
    <Container>
        <Row>
          <div className="proejct-head2">
              <h2>What's different about Urbian is that you not only get hands-on practitioners who design and concept with you, they actually build the product.</h2>
              <span>Keith Elliott, CEO of Met-S Care</span>
          </div>
        </Row>
     </Container>
     
    )
  }
}

export default WhatMatters
