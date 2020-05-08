import React from 'react'
// import { motion } from 'framer-motion'
import { Link } from 'gatsby'

import * as S from './styled'
import './styles.css'

interface ITop {
  headline: string
  tagline: string
}

const SPRING_TRANSITION = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
}

const Top: React.FC<ITop> = ({ headline, tagline }) => (
  <div className="home-top">
    <S.Wrapper className="homebanner container">
      <h1 className="h1">
        We{' '}
        <Link className="styled__Link-lfEBUk iUBhrC" to="#">
          design, develop and ship digital products
          <svg
            className="styled__Arrow-fdeFVt fRPwvC"
            width="14"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#111314" fill="none" fillRule="evenodd">
              <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
              <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
            </g>
          </svg>
        </Link>
      </h1>
      <span className="h1">
        for{' '}
        <Link className="styled__Link-lfEBUk iUBhrC" to="#">
          transformational companies
          <svg
            className="styled__Arrow-fdeFVt fRPwvC"
            width="14"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#111314" fill="none" fillRule="evenodd">
              <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
              <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
            </g>
          </svg>
        </Link>
      </span>
      <span className="mb-3 h1">embracing the economy of the future.</span>
      <Link
        className="styled__Link-lfEBUk iUBhrC font-weight-normal mt-5 experic-a"
        to="/experienceurbian"
      >
        Experience us first hand
        <svg
          className="styled__Arrow-fdeFVt fRPwvC"
          width="14"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#111314" fill="none" fillRule="evenodd">
            <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
            <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
          </g>
        </svg>
      </Link>
    </S.Wrapper>
  </div>
)

export default Top
