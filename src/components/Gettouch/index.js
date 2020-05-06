import React from 'react'
import { RightContent, Big } from '../UI/'
import { Link } from 'gatsby'
import './styled.css'
class Gettouch extends React.Component {
  render() {
    return (
      <div className="getintouch-min">
        <div className="get-touch">
          <h2>We can help you</h2>
          <div className="d-flex flex-wrap">
            <ul>
              <li>Create &amp; Validate new ideas</li>
              <li>Be bold with technology</li>
              <li>Improve efficiency with lean practics</li>
              <li>Build capability &amp; confidence</li>
            </ul>
            <ul>
              <li>Be more customer centric</li>
              <li>Increase speed of market</li>
              <li>Deliver great quality products &amp; services, fast</li>
              <li>Build capability &amp; confidence</li>
            </ul>
          </div>
          <div className="text-center mt-4">
            <Link className="styled__Link-lfEBUk iUBhrC" to="/contact">
              Get in touch
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
          </div>
        </div>
      </div>
    )
  }
}

export default Gettouch
