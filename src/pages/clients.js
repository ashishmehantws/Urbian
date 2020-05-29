import React from 'react'
import Layout from '../components/Layout'

import Gettouch from '../components/Gettouch'
import Selectclients from '../components/Selectclients'
import Startupinvestements from '../components/Startupinvestements'
import { Helmet } from 'react-helmet'
class client extends React.Component {
  render() {
    return (
      <div className="clients-div">
        <Layout>
          <Helmet>
            <title>Urbian Clients</title>
          </Helmet>
          <Selectclients></Selectclients>
          <Startupinvestements></Startupinvestements>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default client
