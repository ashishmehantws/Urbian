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
import Headinfo from '../components/Headinfo'
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
          <Headinfo></Headinfo>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default digitaltransformation
