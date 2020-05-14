import React from 'react'
import Layout from '../components/Layout'

import { Projects } from '../components/Showcase'

import Gettouch from '../components/Gettouch'
import Headinfo from '../components/Headinfo'
import '../assets/styled-min.css'
import { Helmet } from 'react-helmet'
class work extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Urbian Work</title>
        </Helmet>
        <Projects />
        {/* <CallToAction {...data.showcaseYaml.cta} /> */}
        <Headinfo></Headinfo>
        <Gettouch></Gettouch>
      </Layout>
    )
  }
}

export default work
