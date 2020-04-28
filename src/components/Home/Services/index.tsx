import React from 'react'

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
  <S.Container>
    <S.Left>
      <S.Title>We build digital products</S.Title>
    </S.Left>
    <S.TextContent>
      We're one of the few agencies in the world that can take a product idea
      from end to end. From the first discovery meeting to a real shipped
      product. Have a great new product idea and nobody to start building it?
      We're yout team.
    </S.TextContent>
    <S.Columns>
      <div className="col-sm-12 service-item">
        <strong>PM & Strategy </strong>
        <ul>
          <li>Product strategy</li>
          <li>Brand strategy</li>
          <li>Business strategy</li>
          <li>Product management</li>
        </ul>
      </div>
      <div className="col-sm-12 service-item">
        <strong>Product Design</strong>
        <ul>
          <li>UX research & testing</li>
          <li>Rapid prototyping</li>
          <li>User experience</li>
          <li>User interface</li>
        </ul>
      </div>
      <div className="col-sm-12 service-item">
        <strong>Development</strong>
        <ul>
          <li>Technical architecture</li>
          <li>Front-end engineering</li>
          <li>Web-App development</li>
        </ul>
      </div>
    </S.Columns>
    <S.Bottom>
      <Link className="styled__Link-d87459-1 fYDdlr colorblack" to="/services">
        View services
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
    </S.Bottom>
  </S.Container>
)

export default Services
