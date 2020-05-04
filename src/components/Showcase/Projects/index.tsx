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
interface Projects {
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

const Projects: React.FC<Projects> = ({ projects }) => {
  return (
    <div className="work-min">
      <Container>
        <Row>
          <Col>
            {' '}
            <h1>Our work.</h1>
            <span>
              For over a decade we've helped ambitious companies re-imagine
              customer experiences, create new models for growth and build new
              capbilities.
            </span>
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
      <Container>
        <Row>
          <Col sm="6" className="mt-5 pr-sm-5">
            <Link to="">
              <div className="project-img">
                <img
                  className="img-fluid"
                  src="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&h=1000&fit=max&q=50&auto=compress%2Cformat"
                  alt="#"
                />
              </div>
              <small>Cimple</small>
              <h6>Public procurement made simple.</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5 pl-sm-6">
            <Link to="">
              <div className="project-img">
                <img
                  className="img-fluid"
                  src="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&h=1000&fit=max&q=50&auto=compress%2Cformat"
                  alt="#"
                />
              </div>
              <small>Cimple</small>
              <h6>Public procurement made simple.</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5  pr-sm-5">
            <Link to="">
              <div className="project-img">
                <img
                  className="img-fluid"
                  src="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&h=1000&fit=max&q=50&auto=compress%2Cformat"
                  alt="#"
                />
              </div>
              <small>Cimple</small>
              <h6>Public procurement made simple.</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5  pl-sm-5">
            <Link to="">
              <div className="project-img">
                <img
                  className="img-fluid"
                  src="https://images.prismic.io/significa/7eb033b2-cbae-4632-8cef-06ab2d198825_Thumbnail+800x800.png?w=1000&h=1000&fit=max&q=50&auto=compress%2Cformat"
                  alt="#"
                />
              </div>
              <small>Cimple</small>
              <h6>Public procurement made simple.</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
