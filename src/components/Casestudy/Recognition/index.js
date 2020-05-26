import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import './styled.css'
class Recognition extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    return (
      <Container className="Recognition-min border-top mt-5 clearfix">
        <Row>
          <Col lg="6">
            <h4 className="mb-4 h2">Recognition</h4>
          </Col>
          <Col lg="6">
            {data.recognition.map(reco => (
              <div className="border-bottom pb-5 mb-5">
                <img
                  src={reco.images.fluid.src}
                  className="img-fluid mt-1 mb-3  position-relative"
                  alt="#"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: reco.text.childMarkdownRemark.html,
                  }}
                />
                <Link
                  className="styled__Link-lfEBUk iUBhrC "
                  to={reco.readMoreLink}
                >
                  Read more
                  <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#030303" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg>
                </Link>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

Recognition.propTypes = {
  data: PropTypes.object,
}

export default Recognition
