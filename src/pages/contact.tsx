import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { Forms, Contacts, WhatMatters, Results } from '../components/Contact'

interface IContent {
  data: {
    contactYaml: {
      seo: {
        title: string
        description: string
      }
    }
  }
}

const Contact: React.FC<IContent> = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.contactYaml.seo.title}
        description={data.contactYaml.seo.description}
      />
      <Forms />
      <WhatMatters />
      <Results />
      <Contacts />
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query ContactQuery {
    contactYaml {
      seo {
        title
        description
      }
    }
  }
`
