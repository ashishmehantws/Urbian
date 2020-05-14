import React from 'react'
import Layout from '../components/Layout'

import Readdetails from '../components/Read/Readdetails'
import Getintouchread from '../components/Read/Getintouchread'

class readdetails extends React.Component {
  render() {
    return (
      <Layout>
        <Readdetails></Readdetails>
        <Getintouchread></Getintouchread>
      </Layout>
    )
  }
}

export default readdetails
