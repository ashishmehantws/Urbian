import React from 'react'
import Layout from '../components/Layout'
import {
  Topimage,
  Whyurbian,
  Howdothis,
  Casestudies,
  Articles,
} from '../components/digitaltransformation'
import Gettouch from '../components/Gettouch'
import Projecthead from '../components/Services/Projecthead'
class digitaltransformation extends React.Component {
  render() {
    return (
      <div className="digitaltransformation">
        <Layout>
          <Topimage></Topimage>
          <Whyurbian></Whyurbian>
          <Howdothis></Howdothis>
          <Casestudies></Casestudies>
          <Articles></Articles>
          <Projecthead></Projecthead>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default digitaltransformation
