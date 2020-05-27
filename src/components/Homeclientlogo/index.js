import React from 'react'
// import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import './styled.css'
// import storage from '../../assets/images/stor-age.jpg'
// import standardbank from '../../assets/images/standard-bank.jpg'
// import vital from '../../assets/images/vital.jpg'
// import santa from '../../assets/images/santa.png'
// import santam from '../../assets/images/santam.png'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

const HomeclientlogoData = ({ data }) => (
  <div>
    <Container className="clearfix pt-4 pb-4 border-bottom">
      <Row>
        <ul className="d-flex flex-wrap w-100 justify-content-around align-items-center mb-0">
          {data.contentfulHomePageContent.clientLogos.map(Homeclientlogo => (
            <li className="p-lg-1 p-3">
              <Link to="#">
                <img src={Homeclientlogo.fluid.src} alt="#" />
              </Link>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  </div>
)
HomeclientlogoData.propTypes = {
  data: PropTypes.object,
}

export default function Homeclientlogo(props) {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          contentfulHomePageContent(
            id: { eq: "5d9240ff-cbfe-5ca0-82cc-5e4fb6b8f24d" }
          ) {
            clientLogos {
              fluid {
                src
              }
            }
          }
        }
      `}
      render={data => <HomeclientlogoData data={data} {...props} />}
    />
  )
}
