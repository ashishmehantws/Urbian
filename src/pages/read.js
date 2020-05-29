import React from 'react'
import Layout from '../components/Layout'
import { Readcategories } from '../components/Read'
import Gettouch from '../components/Gettouch'
import { Helmet } from 'react-helmet'
class read extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Urbian Read</title>
        </Helmet>
        <Readcategories></Readcategories>
        <Gettouch></Gettouch>
      </Layout>
    )
  }
}

export default read
