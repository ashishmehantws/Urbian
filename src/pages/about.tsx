import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import Testimonials from '../components/Testimonials'

import {
  Topabout,
  Facts,
  Culture,
  Handbookabout,
  Joinus,
  Review,
} from '../components/About'

import Headinfo from '../components/Headinfo'
import Gettouch from '../components/Gettouch'
// import Projecthead from '../components/Services/Projecthead'
interface IAbout {
  data: {
    aboutYaml: {
      seo: {
        title: string
        description: string
      }
      hero: {
        title: string
        photos: Array<{
          alt: string
          image: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }>
      }
    }
  }
}

const Contact: React.FC<IAbout> = ({ data }) => {
  return (
    <div className="aboutBg">
      <Layout>
        <SEO
          title={data.aboutYaml.seo.title}
          description={data.aboutYaml.seo.description}
        />

        <Topabout />
        <Review />
        <Facts />
        <Culture />
        <Handbookabout />
        <Joinus />
        <Headinfo></Headinfo>
        <Gettouch></Gettouch>
      </Layout>
    </div>
  )
}

export default Contact

export const query = graphql`
  query AboutQuery {
    aboutYaml {
      seo {
        title
        description
      }
    }
  }
`
