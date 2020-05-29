import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { Topsection, Worksection, Servicesection } from '../components/Services'
import Gettouch from '../components/Gettouch'
import Testimonials from '../components/Testimonials'
import Headinfo from '../components/Headinfo'
interface IContent {
  data: {
    servicesYaml: {
      seo: {
        title: string
        description: string
      }
      cta: {
        title: string
        text: string
        link: string
        linkText: string
      }
    }
  }
}

const Contact: React.FC<IContent> = ({
  data: {
    servicesYaml: { seo, cta },
  },
}) => {
  return (
    <div className="services_min">
      <Layout>
        <SEO title={seo.title} description={seo.description} />
        <Topsection></Topsection>
        <Testimonials></Testimonials>
        <Worksection></Worksection>
        <Servicesection></Servicesection>
        <Headinfo></Headinfo>
        <Gettouch></Gettouch>
      </Layout>
    </div>
  )
}

export default Contact

export const query = graphql`
  query ServicesQuery {
    servicesYaml {
      seo {
        title
        description
      }
      cta {
        title
        text
        link
        linkText
      }
    }
  }
`
