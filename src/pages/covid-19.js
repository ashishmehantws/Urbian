import React from 'react'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Gettouch from '../components/Gettouch'
import {
  Topsection,
  Downloadreport,
  Testimonials,
  Strategy,
  Blog,
  Overviewwork,
  Offers,
} from '../components/Covid-19'
import Headinfo from '../components/Headinfo'

class covidm extends React.Component {
  render() {
    return (
      <div className="covid-div">
        <Layout>
          <Topsection />
          <Downloadreport />
          <Testimonials />
          <Strategy />
          <Blog />
          <Overviewwork />
          <Offers />
          <Headinfo> </Headinfo>
          <Gettouch> </Gettouch>
        </Layout>
      </div>
    )
  }
}

export default covidm
