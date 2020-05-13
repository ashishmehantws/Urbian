import React from 'react'
import Layout from '../components/Layout'
// import { Readcategories } from '../components/Read'
import Gettouch from '../components/Gettouch'
class read extends React.Component {
  render() {
    return (
      <div className="blog-min">
        <Layout>
          {/* <Readcategories></Readcategories> */}
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default read
