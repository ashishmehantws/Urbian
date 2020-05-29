import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Projects } from '../components/Showcase'

import Gettouch from '../components/Gettouch'
import '../assets/styled-min.css'
export interface Project {
  url: string
  uid: string
  data: {
    hero_theme: string
    themes: Array<{ name: string; background: string }>
    project_title: string
    tagline: string
    services: Array<{
      service: string
    }>
    thumb_image: {
      alt: string
      fluid: FluidObject
    }
  }
}

interface Showcase {
  data: {
    showcaseYaml: {
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

const Showcase: React.FC<Showcase> = ({ data }) => {
  const projects = []
  return (
    <Layout>
      <SEO
        title={data.showcaseYaml.seo.title}
        description={data.showcaseYaml.seo.description}
      />
      <Projects projects={projects} />
      {/* <CallToAction {...data.showcaseYaml.cta} /> */}
      <div className="proejct-head">
        <h2>
          "Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,"
        </h2>
        <span>Lorem Ipsum is simply dummy specimen book</span>
        <span>Lorem Ipsum is simply dummy</span>
      </div>
      <Gettouch></Gettouch>
    </Layout>
  )
}

export default Showcase

export const query = graphql`
  query ShowcaseQuery {
    showcaseYaml {
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
