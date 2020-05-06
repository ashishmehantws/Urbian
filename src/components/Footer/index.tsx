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
          className="styled__LogoLink-jMUixs dljtEe mb-3"
          to="/"
        >
          <svg
            width="85px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 204 204"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="cls-1"
                  d="M204,102A102,102,0,1,1,102,0,102,102,0,0,1,204,102"
                />
                <path d="M53.57,105.28a7.41,7.41,0,0,1-1.33,4.88c-.88,1-2.49,1.55-4.81,1.55a7.43,7.43,0,0,1-3.18-.56,4.78,4.78,0,0,1-1.85-1.45,4.83,4.83,0,0,1-.87-2,13.39,13.39,0,0,1-.21-2.37V86.85H34.81v18.43q0,6.06,3.3,9t9.32,2.9q5.94,0,9.3-2.92t3.36-9V86.85H53.57Z" />
                <path d="M73.79,94.78a7.94,7.94,0,0,0-2,.93A7.34,7.34,0,0,0,69.1,99H69V95H63.41v21.46h5.9v-9.67a11.52,11.52,0,0,1,.29-2.7,5.93,5.93,0,0,1,1-2.18,4.81,4.81,0,0,1,1.81-1.48,6.28,6.28,0,0,1,2.74-.54,11,11,0,0,1,1.12.07c.39,0,.72.09,1,.14V94.65A4.55,4.55,0,0,0,76,94.44a7.07,7.07,0,0,0-2.16.34" />
                <path d="M95.84,108.35a6.81,6.81,0,0,1-.92,2.2,4.78,4.78,0,0,1-1.55,1.52,4.82,4.82,0,0,1-4.51,0,4.78,4.78,0,0,1-1.58-1.52,6.8,6.8,0,0,1-.91-2.2,11.5,11.5,0,0,1-.29-2.57,11.69,11.69,0,0,1,.29-2.62,6.89,6.89,0,0,1,.91-2.2,4.75,4.75,0,0,1,1.58-1.51,4.82,4.82,0,0,1,4.51,0A4.75,4.75,0,0,1,94.92,101a6.91,6.91,0,0,1,.92,2.2,11.69,11.69,0,0,1,.29,2.62,11.5,11.5,0,0,1-.29,2.57m3.34-11.21a8.26,8.26,0,0,0-6-2.7,9.94,9.94,0,0,0-3.84.77,6.23,6.23,0,0,0-2.93,2.43h-.08V86.85h-5.9v29.64H86v-2.74h.08a5.4,5.4,0,0,0,2.82,2.53,11.32,11.32,0,0,0,4.24.75,8,8,0,0,0,3.19-.67,8.18,8.18,0,0,0,2.85-2,10.3,10.3,0,0,0,2-3.51,16.76,16.76,0,0,0,0-10.17,10.49,10.49,0,0,0-2-3.51" />
                <rect x="105.09" y="86.85" width="5.9" height="4.86" />
                <rect x="105.09" y="95.03" width="5.9" height="21.46" />
                <path d="M128.18,108.19a11.18,11.18,0,0,1-.11,1.32,4.33,4.33,0,0,1-.56,1.64,3.76,3.76,0,0,1-1.41,1.39,5.2,5.2,0,0,1-2.7.59A7.67,7.67,0,0,1,122,113a3.41,3.41,0,0,1-1.16-.43,2.26,2.26,0,0,1-.79-.86,2.77,2.77,0,0,1-.29-1.32,2.9,2.9,0,0,1,.29-1.37,2.68,2.68,0,0,1,.77-.9,4,4,0,0,1,1.12-.56,9.66,9.66,0,0,1,1.31-.33q.7-.12,1.41-.21c.47,0,.92-.12,1.35-.2a9.5,9.5,0,0,0,1.2-.32,2.57,2.57,0,0,0,.94-.51Zm5.89,3.52V100.55a5.19,5.19,0,0,0-.87-3.14A6,6,0,0,0,131,95.56a10.16,10.16,0,0,0-3-.89,24.45,24.45,0,0,0-3.28-.23,17.67,17.67,0,0,0-3.55.36A10.07,10.07,0,0,0,117.92,96a7.07,7.07,0,0,0-2.32,2.2,6.79,6.79,0,0,0-1,3.45h5.89a3.29,3.29,0,0,1,1.17-2.49,4.44,4.44,0,0,1,2.74-.75,9.8,9.8,0,0,1,1.47.1,3.16,3.16,0,0,1,1.2.42,2.11,2.11,0,0,1,.83.87,3.08,3.08,0,0,1,.32,1.51,1.62,1.62,0,0,1-.54,1.39,3.93,3.93,0,0,1-1.58.73,15.09,15.09,0,0,1-2.28.37c-.86.09-1.73.2-2.62.34a24.32,24.32,0,0,0-2.64.56,7.35,7.35,0,0,0-2.32,1.06,5.36,5.36,0,0,0-1.66,1.89,6.21,6.21,0,0,0-.65,3,6.63,6.63,0,0,0,.57,2.86,5.37,5.37,0,0,0,1.55,2,6.38,6.38,0,0,0,2.33,1.16,10.46,10.46,0,0,0,2.86.38,13.54,13.54,0,0,0,3.9-.58,7.75,7.75,0,0,0,3.33-2,7.31,7.31,0,0,0,.14,1.06,8.48,8.48,0,0,0,.27,1h6a5,5,0,0,1-.58-2,22.73,22.73,0,0,1-.17-2.79" />
                <path d="M156.37,96.87A5.83,5.83,0,0,0,154,95.09a10,10,0,0,0-3.88-.65,8.52,8.52,0,0,0-3.66.85,6.76,6.76,0,0,0-2.9,2.72h-.13V95h-5.6v21.46h5.89V105.24q0-3.28,1.08-4.71a4.07,4.07,0,0,1,3.49-1.44,3.23,3.23,0,0,1,2.95,1.31,7.58,7.58,0,0,1,.83,4v12.12h5.89v-13.2a17.78,17.78,0,0,0-.35-3.64,7,7,0,0,0-1.22-2.78" />
                <rect x="162.68" y="110.1" width="6.52" height="6.39" />
              </g>
            </g>
          </svg>
        </Link>
        <small>© 2020 Urbian Group.</small>
        <Link to="" className="privacy-link">
          Privacy Policy
        </Link>
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
          <Link className="dbKpCb" to="/career">
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
            className="styled__ExternalLink-hulXky bQTBkf styled__FooterLink-gcPBKg gIiDIb text-decoration-none"
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
            <svg
              id="Bold"
              enableBackground="new 0 0 24 24"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
