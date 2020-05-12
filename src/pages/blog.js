import React from 'react'
import Layout from '../components/layout'
import { Blogcategories } from '../components/Blog'
import Gettouch from '../components/Gettouch'
class blog extends React.Component {
  render() {
    return (
      <div className="blog-min">
        <Layout>
          <Blogcategories></Blogcategories>
          <Gettouch></Gettouch>
        </Layout>
      </div>
    )
  }
}

export default blog
