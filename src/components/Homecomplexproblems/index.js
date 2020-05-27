import React from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql, Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './styled.css'
import diageotrust from '../../assets/images/diageo-trust-sa.jpg'
import liberty from '../../assets/images/liberty.jpg'
import sanlam from '../../assets/images/sanlam.jpg'
import privatewealth from '../../assets/images/private-wealth.jpg'
import babylonstoren from '../../assets/images/babylonstoren.jpg'

class HomecomplexproblemsData extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const { contentfulHomePageContent } = data
    return (
      <div>
        <Container className="complex-problems clearfix">
          <Row>
            <Col md="12 text-center pb-5 mb-5">
              <h3 className="h3">
                We solve complex Problems <br /> and deliver real impact.
              </h3>
            </Col>
          </Row>
          <Row>
            <Col
              md="6"
              className="text-center flex-container pb-5 padding-right border-r border-bottom"
            >
              <Link to="#" className="styled__Link-lfEBUk iUBhrC">
                <div className="flex-item fill">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentfulHomePageContent.complexProblemsClientOnetext
                          .childContentfulRichText.html,
                    }}
                  />

                  {/* <svg
                    className="styled__Arrow-fdeFVt fRPwvC"
                    width="14"
                    height="10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="#030303" fill="none" fillRule="evenodd">
                      <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                      <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                    </g>
                  </svg> */}
                </div>
                <div className="flex-item">
                  <img
                    src={
                      contentfulHomePageContent.complexProblemsClientOneImage[0]
                        .fluid.src
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col
              md="6"
              className="text-center flex-container pb-5 padding-left border-bottom"
            >
              <Link to="#" className="styled__Link-lfEBUk iUBhrC">
                <div className="flex-item fill">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentfulHomePageContent.complexProblemsClientTwoText
                          .childContentfulRichText.html,
                    }}
                  />
                  {/* <h5>
                    6 months to clear a 9 year feature backlog.
                    <svg
                      className="styled__Arrow-fdeFVt fRPwvC"
                      width="25"
                      height="10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g stroke="#030303" fill="none" fillRule="evenodd">
                        <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                        <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                      </g>
                    </svg>
                  </h5> */}
                </div>
                <div className="flex-item">
                  <img
                    src={
                      contentfulHomePageContent.complexProblemsClientTwoImage[0]
                        .fluid.src
                    }
                  />
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col
              md="6"
              className="text-center flex-container pb-5 padding-right border-bottom border-r"
            >
              {' '}
              <Link to="#" className="styled__Link-lfEBUk iUBhrC">
                <div className="flex-item">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentfulHomePageContent.complexProblemsClientThreeText
                          .childContentfulRichText.html,
                    }}
                  />
                  {/* <h5 className="letter-s1 ">
                    Over R50 million of new revenue generated in under 90 days
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
                  </h5> */}
                </div>
                <div className="flex-item">
                  <img className="img-fluid mr-2" src={sanlam} alt="liberty" />
                  <img
                    src={
                      contentfulHomePageContent
                        .complexProblemsClientThreeImage[0].fluid.src
                    }
                  />
                </div>
              </Link>
            </Col>
            <Col
              md="6"
              className="text-center flex-container pb-5 padding-left border-bottom"
            >
              <Link to="#" className="styled__Link-lfEBUk iUBhrC">
                <div className="flex-item">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentfulHomePageContent.complexProblemsClientFourText
                          .childContentfulRichText.html,
                    }}
                  />
                  {/* <strong>153%</strong>
                  <span>
                    increase in E-Commerce sales
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
                  </span> */}
                </div>
                <div className="flex-item">
                  <img
                    src={
                      contentfulHomePageContent
                        .complexProblemsClientFourImage[0].fluid.src
                    }
                  />
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

HomecomplexproblemsData.propTypes = {
  data: PropTypes.object,
}

export default function Homecomplexproblems(props) {
  return (
    <StaticQuery
      query={graphql`
        query HomecomplexproblemsQuery {
          contentfulHomePageContent(
            id: { eq: "5d9240ff-cbfe-5ca0-82cc-5e4fb6b8f24d" }
          ) {
            complexProblemsClientFourImage {
              fluid {
                src
              }
            }
            complexProblemsClientFourText {
              childContentfulRichText {
                html
              }
            }
            complexProblemsClientThreeImage {
              fluid {
                src
              }
            }
            complexProblemsClientThreeText {
              childContentfulRichText {
                html
              }
            }
            complexProblemsClientTwoImage {
              fluid {
                src
              }
            }
            complexProblemsClientTwoText {
              childContentfulRichText {
                html
              }
            }
            complexProblemsClientOneImage {
              fluid {
                src
              }
            }
            complexProblemsClientOnetext {
              childContentfulRichText {
                html
              }
            }
          }
        }
      `}
      render={data => <HomecomplexproblemsData data={data} {...props} />}
    />
  )
}
