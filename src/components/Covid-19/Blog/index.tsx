import React, { useRef } from 'react'

import { ProjectThumb } from '../../UI'
import { Link } from 'gatsby'
import * as S from './styled'
import { Project } from '../../../pages/showcase'
import useMeasure from '../../../hooks/useMeasure'
import getThumbBgColor from '../../../utils/getThumbBgColor'
import './styled.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import Work1 from '../../../assets/images/low-touch-economy.jpg'
import work2 from '../../../assets/images/upcoming-webinar.jpg'
import work3 from '../../../assets/images/video-interview.jpg'
import work4 from '../../../assets/images/business-model.jpg'
interface Blog {
  projects: Project[]
}

const ThumbHolder: React.FC<{}> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { height } = useMeasure(ref, 'a')
  const rowSpan = Math.ceil(height / 4)

  return (
    <S.Holder ref={ref} rowAmount={rowSpan}>
      {children}
    </S.Holder>
  )
}

const Blog: React.FC<Projects> = ({ projects }) => {
  return (
    <div className="work-min blog-min">
      <Container>
        <Row>
          <Col>
            {' '}
            <h2 className="h2 text-center">Dive into our ongoing research</h2>
          </Col>
        </Row>
      </Container>

      {/* <S.Container>
        <ThumbHolder>
          <ProjectThumb
            title={project.data.project_title}
            tagline={project.data.tagline}
            to={project.url}
            fluid={project.data.thumb_image.fluid}
            services={project.data.services.map(s => s.service)}
            backgroundColor={getThumbBgColor(
              project.data.hero_theme,
              project.data.themes
            )}
          />
        </ThumbHolder>

      </S.Container> */}
      <Container className="pb-5 pt-4">
        <Row>
          <Col sm="6" className="mt-5 pr-sm-4">
            <Link to="">
              <div className="project-img">
                <img className="img-fluid" src={Work1} alt="#" />
              </div>

              <h6 className="h3">What is the Hi-Tech Low Touch Economy?</h6>
              <p>
                How the Covid-19 crisis of 2020 is shaping a new generation of
                consumer behaviors.
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5 pl-sm-4">
            <Link to="">
              <div className="project-img">
                <img className="img-fluid" src={work2} alt="#" />
              </div>

              <h6 className="h3">Join Our Upcoming Webinar</h6>
              <p>
                During a 45-min interactive webinar, we will talk about the
                opportunities & white spaces to explore. We look at what
                companies can learn from other regions and from frontrunners of
                the hi-Tech Low Touch Economy.
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5 pr-sm-4">
            <Link to="">
              <div className="project-img">
                <img className="img-fluid" src={work3} alt="#" />
              </div>
              <h6 className="h3">
                Video Interview: CEO of African safari Group About Travel and
                Tourism and Where to From Here.
              </h6>
              <p>
                There are so many moving parts in this rapidly evolving crisis.
                With this mind map, we track a selection of shifts and how they
                influence each other.
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5 pl-sm-4">
            <Link to="">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt="#" />
              </div>

              <h6 className="h3">
                Business Model pivots in the Hi-Tech Low Touch Economy
              </h6>
              <p>
                Plenty of companies are now shifting their focus. It's
                remarkable how many enterpreneurs are already building a new Low
                Touch Economy to get our society back up and running.
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog
