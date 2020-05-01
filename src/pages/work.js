import React from 'react'
import Layout from '../components/Layout'

import { Projects } from '../components/Showcase'

import Gettouch from '../components/Gettouch'
import '../assets/styled-min.css'
class work extends React.Component {
  render() {
    return (
      <Layout>
        <Projects />
        {/* <CallToAction {...data.showcaseYaml.cta} /> */}
        <div className="proejct-head">
          <h2>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,"
          </h2>
          <span>Lorem Ipsum is simply dummy specimen book</span>
          <span>Lorem Ipsum is simply dummy</span>
        </div>
        <Gettouch></Gettouch>
      </Layout>
    )
  }
}

export default work
