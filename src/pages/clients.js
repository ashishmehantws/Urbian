import React from 'react'
import Layout from '../components/layout'

import Gettouch from '../components/Gettouch'
import Selectclients from '../components/Selectclients'
import Startupinvestements from '../components/Startupinvestements'
class client extends React.Component {
  render() {
    return (
      <div className="clients-div">
        <Layout>
          <Selectclients></Selectclients>
          <Startupinvestements></Startupinvestements>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default client
