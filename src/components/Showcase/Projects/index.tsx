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
import Work1 from '../../../assets/images/Screenshot-2020.jpg'
import work2 from '../../../assets/images/296562873-copy-10498.jpg'
import work3 from '../../../assets/images/Foonda_Website_2.0.jpg'
import work4 from '../../../assets/images/DSC2108-10790.jpg'
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
      <Container className="pb-5">
        <Row>
          <Col sm="6" className="mt-5 pr-sm-5">
            <Link to="">
              <div className="project-img">
                <img className="img-fluid" src={Work1} alt="#" />
              </div>
              <small className="light-blue">Sanlam Private wealth</small>
              <h6>
                A design system led now brand home generates a 10x increase in
                business leads.
              </h6>
              <p>
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5 pl-sm-6">
            <Link to="">
              <div className="project-img">
                <img className="img-fluid" src={work2} alt="#" />
              </div>
              <small>Standard Bank</small>
              <h6>Clearing a 9-year old feature backlog in 6 months.</h6>
              <p>
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5  pr-sm-5">
            <Link to="">
              <div className="project-img">
                <img className="img-fluid" src={work3} alt="#" />
              </div>
              <small className="light-pink">Foonda</small>
              <h6>
                A new education funding platform venture launched in market in 3
                months.
              </h6>
              <p>
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
          <Col sm="6" className="mt-5  pl-sm-5">
            <Link to="">
              <div className="project-img">
                <img className="img-fluid" src={work4} alt="#" />
              </div>
              <small className="pink">Diageo empowerment trust sa</small>
              <h6>
                Re-vitalising an african-centric social tech incubator program.
              </h6>
              <p>
                Product Management, Branding, UI/UX, Front-End Development,
                Back-End Development
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
