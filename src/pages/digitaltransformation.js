import React from 'react'
import Layout from '../components/Layout'
import { Topimage } from '../components/digitaltransformation'
import Gettouch from '../components/Gettouch'
class digitaltransformation extends React.Component {
  render() {
    return (
      <div className="digitaltransformation">
        <Layout>
          <Topimage></Topimage>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default digitaltransformation
