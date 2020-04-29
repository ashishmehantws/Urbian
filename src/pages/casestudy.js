import React from 'react'
import Layout from '../components/layout'
import {
  Topimage,
  Projectdescription,
  Outcomes,
  Contentwrap,
} from '../components/Casestudy'
import Gettouch from '../components/Gettouch'
import Startup from '../components/Casestudy/Startup'

class casestudy extends React.Component {
  render() {
    return (
      <Layout>
        <Topimage></Topimage>
        <Projectdescription></Projectdescription>
        <Outcomes></Outcomes>
        <Contentwrap></Contentwrap>
        <Startup></Startup>
        <Gettouch></Gettouch>
      </Layout>
    )
  }
}

export default casestudy
