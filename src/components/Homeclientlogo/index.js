import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import storage from '../../assets/images/stor-age.jpg'
import standardbank from '../../assets/images/standard-bank.jpg'
import vital from '../../assets/images/vital.jpg'
import santa from '../../assets/images/santa.png'
import santam from '../../assets/images/santam.png'
import { Link } from 'gatsby'
class Homeclientlogo extends React.Component {
  render() {
    return (
      <div>
        <Container className="clearfix pt-4 pb-4 border-bottom">
          <Row>
            <ul className="d-flex flex-wrap w-100 justify-content-around align-items-center mb-0">
              <li className="p-1">
                <Link to="#">
                  <img src={storage} alt="#" />
                </Link>
              </li>
              <li className="p-1">
                <Link to="#">
                  <img src={standardbank} alt="#" />
                </Link>
              </li>
              <li className="p-1">
                <Link to="#">
                  <img src={vital} alt="#" />
                </Link>
              </li>
              <li className="p-1">
                <Link to="#">
                  <img src={santa} alt="#" />
                </Link>
              </li>
              <li className="p-1">
                <Link to="#">
                  <img src={santam} alt="#" />
                </Link>
              </li>
            </ul>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Homeclientlogo
