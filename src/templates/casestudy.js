import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import {
  Topimage,
  Projectdescription,
  Outcomes,
  Contentwrap,
  Demoday,
  Recognition,
  Getintouch,
} from '../components/Casestudy'
import Gettouch from '../components/Gettouch'
import Startup from '../components/Casestudy/Startup'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

const casestudy = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Urbian Case Study</title>
      </Helmet>
      <Topimage data={data.contentfulWork}></Topimage>
      <Projectdescription data={data.contentfulWork}></Projectdescription>
      <Outcomes></Outcomes>
      <Contentwrap data={data.contentfulWork}></Contentwrap>
      <Startup data={data.contentfulWork}></Startup>
      <Demoday></Demoday>
      <Recognition data={data.contentfulWork}></Recognition>
      <Getintouch data={data.contentfulWork}></Getintouch>
      <Gettouch></Gettouch>
    </Layout>
  )
}

casestudy.propTypes = {
  data: PropTypes.object,
}

export default casestudy

export const query = graphql`
  query CaseStudyByID($id: String) {
    contentfulWork(id: { eq: $id }) {
      title
      chooseClient {
        clientName
      }
      projectLinkUrl
      description {
        childContentfulRichText {
          html
        }
      }
      technologies {
        childMarkdownRemark {
          html
        }
      }
      team {
        childMarkdownRemark {
          html
        }
      }
      sources {
        childMarkdownRemark {
          html
        }
      }
      whatWeDid {
        childMarkdownRemark {
          html
        }
      }
      testimonialComments {
        childMarkdownRemark {
          html
        }
      }
      testimonialPersonDetails {
        testimonialPersonDetails
      }
      fullDiscription {
        childMarkdownRemark {
          html
        }
      }
      recognition {
        images {
          fluid {
            src
          }
        }
        text {
          childMarkdownRemark {
            html
          }
        }
        readMoreLink
      }
      getInTouchClientName {
        getInTouchClientName
      }
    }
  }
`
