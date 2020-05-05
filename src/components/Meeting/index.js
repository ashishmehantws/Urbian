import React from 'react'
import { RightContent, Big } from '../UI/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'react-bootstrap'
import './styled.css'
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import FormControl from 'react-bootstrap/FormControl'
class Meeting extends React.Component {
  render() {
    return (
      <div className="meeting-min">
        <h4>Want to set up a meeting ?</h4>
        <span>
          Please enter your details here and we'll be in touch to arrange a time
        </span>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Company or project name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company or project name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name and surname pretty please"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your company email address"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone uumber</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile number if possible please"
              required
            />
          </Form.Group>
          <div className="mt-4 d-flex justify-content-between align-items-center checkbox-d">
            {['checkbox'].map(type => (
              <div key={`custom-${type}`} className="mb-3">
                <Form.Check
                  custom
                  type={type}
                  id={`custom-${type}`}
                  label={`I want to get ongoing communication ${type}`}
                />
              </div>
            ))}
            <button className="styled__Button-ksqKNN iyLmoo styled__Button-kGpwPX dQtCFI">
              Send
              <svg
                className="Arrow__Svg-gllSXh SARKW styled__Arrow-ihTfeJ cFLifL"
                width="14"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#111314" fill="none" fillRule="evenodd">
                  <path d="M8.5.964L13.036 5.5 8.5 10.036"></path>
                  <path d="M12.5 5.5H.5" strokeLinecap="square"></path>
                </g>
              </svg>
            </button>
          </div>
          <small>
            Once you are signed up to our marketing communication. you can
            unsubscribe and update your preferences at anytime. We'll share our
            news, blogs, and invitations to our events.
            <a href="">View our Privacy Policy</a> to find out more about how we
            take care of your personal date.
          </small>
        </Form>
      </div>
    )
  }
}

export default Meeting
