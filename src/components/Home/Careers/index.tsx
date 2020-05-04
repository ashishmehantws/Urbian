import React from 'react'
import Img from 'gatsby-image'

// import { textByLine } from '../../../utils/textByLine'

import { ICareersContent } from '../../../pages'
// import { ArrowLink } from '../../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import * as S from './styled'
import img1 from '../../../assets/images/urbian-hi5-staff-final-8-345.jpg'
import img2 from '../../../assets/images/pasted-image-349.jpg'
import img3 from '../../../assets/images/posterImage-348.png'
const Careers: React.FC<ICareersContent> = ({
  title,
  text,
  cta,
  link,
  photos,
}) => (
  <div className="careerPage">
    <S.Container className="mb-5">
      <S.Left>
        <S.Title className="career-title-h">
          {/* {textByLine(title).map(l => {
            return (
              <React.Fragment key={l}>
                {l}
                <br />
              </React.Fragment>
            )
          })} */}
          Hey, <br /> We're hiring.
        </S.Title>
      </S.Left>
      <S.Right className="career">
        <S.Big>
          <p className="fz-2">
            We are an open-minded, open-hearted team that loves the thrill of
            creating exciting new projects. Drop us a line if you're passionate
            and talented to do everything you set your mind to.
          </p>
        </S.Big>
        <Link className="styled__Link-d87459-1 fYDdlr colorblack" to="/careers">
          View current openings
          <svg
            className="styled__Arrow-d87459-0 bQLhSh"
            width="14"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#212529" fill="none" fillRule="evenodd">
              <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
              <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
            </g>
          </svg>
        </Link>
      </S.Right>
    </S.Container>
    <Container className=" pb-5 pt-5">
      <Row className="mb-md-5 pb-md-5">
        <Col sm="4" className="mb-4">
          {' '}
          <img className="img-fluid" src={img1} alt="liberty" />
        </Col>
        <Col sm="4" className="mb-4">
          {' '}
          <img className="img-fluid" src={img2} alt="liberty" />
        </Col>
        <Col sm="4" className="mb-4">
          {' '}
          <img className="img-fluid" src={img3} alt="liberty" />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Careers
