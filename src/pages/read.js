import React from 'react'
import Layout from '../components/Layout'
import { Readcategories } from '../components/Read'
import Gettouch from '../components/Gettouch'

class read extends React.Component {
  render() {
    return (
      <Layout>
        <Readcategories></Readcategories>
        <Gettouch></Gettouch>
      </Layout>
    )
  }
}

export default read
