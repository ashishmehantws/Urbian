import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { IServicesContent } from '../../../pages'
// import { Big, List, ArrowLink } from '../../UI/'
// import { textByLine } from '../../../utils/textByLine'
import { Link } from 'gatsby'
import * as S from './styled'
import './styles.css'
const Services: React.FC<IServicesContent> = ({
  title,
  text,
  columns,
  cta,
  link,
}) => (
  // <S.Container>
  //   <S.Left>
  //     <S.Title>{title}</S.Title>
  //   </S.Left>
  //   <S.TextContent>
  //     {textByLine(text).map((line, key) => (
  //       <Big key={key}>{line}</Big>
  //     ))}
  //   </S.TextContent>
  //   <S.Columns>
  //     {columns.map((column, i) => (
  //       <div key={i}>
  //         <S.Big>sdfsdfsdfsdf</S.Big>
  //         <List items={column.items} />
  //       </div>
  //     ))}
  //   </S.Columns>
  //   <S.Bottom>
  //     <ArrowLink highlight to={link}>
  //       {cta}
  //     </ArrowLink>
  //   </S.Bottom>
  // </S.Container>
  <div>
    <Container className="pt-5 mt-5 pb-5">
      <Row>
        <Col lg="5" className="pt-4">
          <h4 className="career-title-h pl-lg-5">We build digital products</h4>
        </Col>
        <Col lg="6" className="pt-4">
          <p className="fz-2 d-inline">
            We're one of the few agencies in the world that can take a product
            idea from end to end. From the first discovery meeting to a real
            shipped product. Have a great new product idea and nobody to start
            building it?
            <mark className="yellowBackground d-inline">We're your team.</mark>
          </p>
        </Col>
      </Row>
      <Row className="pt-3 w-100">
        <Col md="1"></Col>
        <Col md="10" className="d-flex flex-wrap justify-content-md-around">
          <div className=" service-item mt-5">
            <strong>PM &amp; Strategy </strong>
            <ul>
              <li>Product strategy</li>
              <li>Brand strategy</li>
              <li>Business strategy</li>
              <li>Product management</li>
              <li>Post-launch capacity building</li>
            </ul>
          </div>
          <div className=" service-item mt-5">
            <strong>Product Design</strong>
            <ul>
              <li>UX research &amp; testing</li>
              <li>Rapid prototyping</li>
              <li>User experience</li>
              <li>User interface</li>
              <li>Brand development</li>
              <li>Content &amp; Writing</li>
              <li>Illustration</li>
              <li>Motion &amp; Video</li>
            </ul>
          </div>
          <div className=" service-item mt-5">
            <strong>Development</strong>
            <ul>
              <li>Technical architecture</li>
              <li>Front-end engineering</li>
              <li>Web-App development</li>
              <li>Mobile App Development</li>
              <li>API &amp; CMS Development</li>
              <li>Code auditing &amp; QA</li>
              <li>DevOps</li>
            </ul>
          </div>
        </Col>
        <Col md="1"></Col>
      </Row>
      <Row>
        <Col sm="12" className="mt-5 pt-5 text-center pb-5 mb-5">
          <Link
            className="styled__Link-d87459-1 fYDdlr colorblack"
            to="/services"
          >
            More on our services
            <svg
              className="styled__Arrow-d87459-0 bQLhSh"
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
        </Col>
      </Row>
    </Container>
  </div>
)

export default Services
