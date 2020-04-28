import React from 'react'
import { Link } from 'gatsby'
// import * as S from './styled'
// import FooterNav from './FooterNav'
import foterlogo from '../../assets/images/footer-logo.png'
import './styles.css'
const Footer: React.FC<{}> = () => (
  // <S.Footer>
  //   <S.Container>
  //     <FooterNav />
  //   </S.Container>
  // </S.Footer>

  <footer className="czjCKq">
    <div className="container ljPvsn ">
      <div className="footer-logo">
        <Link
          aria-current="page"
          title="Go to homepage"
          className="styled__LogoLink-jMUixs dljtEe"
          to="/"
        >
          <img src={foterlogo} alt="foterlogo" width="50px" />
        </Link>
        <small>© 2020 Urbian Group.</small>
        <Link to="">Privacy Policy</Link>
      </div>
      <div>
        <h4 className="jgCqLu">Who we are</h4>
        <div className="cjuRPA">
          <Link className="dbKpCb" to="/about">
            About
          </Link>
          <Link className="dbKpCb" to="/clients">
            Client
          </Link>
          <Link className="dbKpCb" to="/careers">
            Careers
          </Link>
          <Link className="dbKpCb" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div>
        <h4 className="jgCqLu">Things we do</h4>
        <div className="cjuRPA">
          <Link className="dbKpCb" to="/services">
            Services
          </Link>
          <Link className="dbKpCb" to="/showcase">
            Work
          </Link>
          <Link className="dbKpCb" to="/blog">
            Read
          </Link>
          <Link className="dbKpCb" to="/handbook">
            Handbook
          </Link>
        </div>
      </div>
      <div>
        <h4 className="jgCqLu">Email us</h4>
        <div className="cjuRPA">
          <Link
            to="#"
            className="styled__ExternalLink-hulXky bQTBkf styled__FooterLink-gcPBKg gIiDIb"
          >
            New Business
          </Link>
          <Link
            to="#"
            className="styled__ExternalLink-hulXky bQTBkf styled__FooterLink-gcPBKg gIiDIb"
            target="_blank"
          >
            Press enquiries
          </Link>
          <Link
            to="#"
            className="styled__ExternalLink-hulXky bQTBkf styled__FooterLink-gcPBKg gIiDIb"
            target="_blank"
          >
            General enquireis
          </Link>
          <Link
            to="#"
            className="styled__ExternalLink-hulXky bQTBkf styled__FooterLink-gcPBKg gIiDIb"
            target="_blank"
          >
            Joint our team
          </Link>
          <Link
            to="telto:+27(0)21 461 0185"
            className="styled__ExternalLink-hulXky bQTBkf styled__FooterLink-gcPBKg gIiDIb"
            target="_blank"
          >
            +27(0)21 461 0185
          </Link>
        </div>
      </div>
      <div>
        <h4 className="jgCqLu">Follow us</h4>
        <div className="styled__Row-clzZZy oCRAR">
          <Link
            to="https://instagram.com/significadesign"
            title="Go to instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="styled__SocialLink-gWhCUO iObwtR"
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="Instagram__Svg-dQUzzS lacjsq"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <circle cx="15" cy="5" r="1" fill="#141124"></circle>
                <path
                  fill="#141124"
                  fillRule="nonzero"
                  d="M14.5.75a4.75 4.75 0 014.75 4.75v9a4.75 4.75 0 01-4.75 4.75h-9A4.75 4.75 0 01.75 14.5v-9A4.75 4.75 0 015.5.75h9zm0 1.5h-9A3.25 3.25 0 002.25 5.5v9a3.25 3.25 0 003.25 3.25h9a3.25 3.25 0 003.25-3.25v-9a3.25 3.25 0 00-3.25-3.25zm-4.5 3a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"
                ></path>
              </g>
            </svg>
          </Link>
          <Link
            to="https://dribbble.com/significa/"
            title="Go to dribbble"
            target="_blank"
            rel="noopener noreferrer"
            className="styled__SocialLink-gWhCUO iObwtR"
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="Dribbble__Svg-gUQxsf kSREME"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path
                  fill="#111314"
                  fillRule="nonzero"
                  d="M10 .25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S.25 15.385.25 10 4.615.25 10 .25zm1.29 11.086l-.01.004c-2.55.79-4.66 2.508-6.357 5.162A8.206 8.206 0 0010 18.25c1.07 0 2.091-.203 3.029-.574a39.2 39.2 0 00-1.74-6.34zm6.873-.133c-1.966-.406-3.765-.476-5.402-.21a40.528 40.528 0 011.658 5.974 8.249 8.249 0 003.738-5.726zm-7.964-2.477l-.046.016c-2.35.725-5.15 1.032-8.395.927a8.219 8.219 0 002.055 5.79c1.85-2.8 4.165-4.641 6.923-5.52-.17-.41-.35-.814-.537-1.213zm6.14-4.006l-.16.197c-1.18 1.414-2.703 2.511-4.565 3.295.207.445.405.898.594 1.357 1.838-.345 3.852-.306 6.035.12A8.206 8.206 0 0016.34 4.72zM6.41 2.572l-.158.077a8.265 8.265 0 00-4.298 5.526c2.947.084 5.468-.187 7.57-.81a30.729 30.729 0 00-3.115-4.793zM10 1.75c-.732 0-1.442.095-2.117.274a32.32 32.32 0 013.07 4.837c1.816-.752 3.252-1.823 4.316-3.208A8.209 8.209 0 0010 1.75z"
                ></path>
              </g>
            </svg>
          </Link>
          <Link to="" title="Twitter" target="_blank" className="">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <circle cx="15" cy="5" r="1" fill="#141124"></circle>
                <path
                  fill="#141124"
                  fillRule="evenodd"
                  stroke="none"
                  strokeWidth="1"
                  d="M10 .275c5.385 0 9.75 4.354 9.75 9.725 0 5.371-4.365 9.725-9.75 9.725S.25 15.371.25 10C.25 4.629 4.615.275 10 .275zm2.617 5.202A2.482 2.482 0 0010.2 8.525a7.047 7.047 0 01-5.117-2.593 2.482 2.482 0 00.768 3.314 2.474 2.474 0 01-1.124-.31v.031c0 1.202.856 2.206 1.992 2.434a2.467 2.467 0 01-1.121.042 2.486 2.486 0 002.318 1.725 4.98 4.98 0 01-3.675 1.028 7.029 7.029 0 003.806 1.114c4.565 0 7.062-3.782 7.062-7.062 0-.108-.002-.215-.007-.321.485-.35.906-.787 1.238-1.286-.445.197-.923.33-1.426.39a2.49 2.49 0 001.092-1.373c-.48.285-1.01.492-1.576.603a2.48 2.48 0 00-1.812-.784z"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer