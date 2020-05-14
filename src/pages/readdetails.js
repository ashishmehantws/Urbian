import React from 'react'
import Layout from '../components/layout'
import Readdetails from '../components/Read/Readdetails'
import Getintouchread from '../components/Read/Getintouchread'

class readdetails extends React.Component {
  render() {
    return (
      <div className="readdsetails">
        <Layout>
          <Readdetails></Readdetails>
          <Getintouchread></Getintouchread>
        </Layout>
      </div>
    )
  }
}

export default readdetails
