import React from 'react'
import Layout from '../components/Layout'
import { Topsection, Ourculture } from '../components/Careers'
import Gettouch from '../components/Gettouch'

class careers extends React.Component {
  render() {
    return (
      <div className="career_min">
        <Layout>
          <Topsection></Topsection>
          <Ourculture></Ourculture>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default careers
