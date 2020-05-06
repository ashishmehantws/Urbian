import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'gatsby'
import './styled.css'
import startup1 from '../../../assets/images/startup1.jpg'
import startup2 from '../../../assets/images/startup2.jpg'
import startup3 from '../../../assets/images/startup3.jpg'
import startup4 from '../../../assets/images/startup4.png'
import startup5 from '../../../assets/images/startup5.jpg'
class Startup extends React.Component {
  render() {
    return (
      <div className="Startup-min">
        <Container className="mt-5 clearfix">
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <h4>
                We designed, developed and launched 5 MVP's in market which
                resulthed in a startup going live every 2 months.
              </h4>
              <p className="pt-5">
                We paired small multi-disciplinary teams made up of a designer,
                developer and product manger with each entrepreneur full-time.
                This meant we were able to keep feedback loops fast ensuring
                precious time was spent on essential features only.
              </p>
            </Col>
            <Col md="3"></Col>
          </Row>
          <Row className="mt-5 mb-5 pt-5">
            <Col md="1"></Col>
            <Col md="5" className="mt-5">
              <span>Startup 1 of 5</span>
              <h6>Skillshift</h6>
              <p>
                Skillshift takes the hassle out of finding and managing skilled
                shift workers throught and on-demand marketplace.
              </p>
              <strong>What we did:</strong>
              <p>
                Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design
                &amp; Fullstack Development.
              </p>
              <strong>Techstack we used:</strong>
              <p>CSS, Django, Python, Wagtail CMS.</p>
            </Col>
            <Col md="5" className="mt-5">
              <img
                src={startup1}
                className="w75 img-fluid mt-1 mb-3 float-md-right"
                alt="#"
              />
            </Col>
            <Col md="1"></Col>
          </Row>
          <Row className="mt-5 mb-5 pt-5">
            <Col md="1"></Col>
            <Col md="5" className="mt-5">
              <img
                src={startup2}
                className="w75 img-fluid mt-1 mb-3 float-md-left"
                alt="#"
              />
            </Col>
            <Col md="5" className="mt-5">
              <span>Startup 2 of 5</span>
              <h6>Foonda</h6>
              <p>
                Foonda makers applying to every bursary university, and
                government financial aid program simple using one form.
              </p>
              <strong>What we did:</strong>
              <p>
                Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design
                &amp; Fullstack Development.
              </p>
              <strong>Techstack we used:</strong>
              <p>CSS, Django, Python, Wagtail CMS</p>
            </Col>
            <Col md="1"></Col>
          </Row>
          <Row className="mt-5 mb-5 pt-5">
            <Col md="1"></Col>
            <Col md="5" className="mt-5">
              <span>Startup 3 of 5</span>
              <h6>Balltalent</h6>
              <p>
                Balltalent is a soccer talent discovery tool helping scouts find
                africa's future soccer star.
              </p>
              <strong>What we did:</strong>
              <p>
                Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design
                &amp; Fullstack Development.
              </p>
              <strong>Techstack we used:</strong>
              <p>CSS, Django, Python, Wagtail CMS.</p>
            </Col>
            <Col md="5" className="mt-5">
              <img
                src={startup3}
                className="w75 img-fluid mt-1 mb-3 float-md-right"
                alt="#"
              />
            </Col>
            <Col md="1"></Col>
          </Row>
          <Row className="mt-5 mb-5 pt-5">
            <Col md="1"></Col>
            <Col md="5" className="mt-5">
              <img
                src={startup4}
                className="w-75 img-fluid mt-1 mb-3 float-md-left"
                alt="#"
              />
            </Col>
            <Col md="5" className="mt-5">
              <span>Startup 4 of 5</span>
              <h6>Jonga</h6>
              <p>
                Jonga provides community-based security to low-income families.
              </p>
              <strong>What we did:</strong>
              <p>
                Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design
                &amp; Fullstack Development.
              </p>
              <strong>Techstack we used:</strong>
              <p>CSS, Django, Python.</p>
            </Col>
            <Col md="1"></Col>
          </Row>
          <Row className="mt-5 mb-5 pt-5">
            <Col md="1"></Col>
            <Col md="5" className="mt-5">
              <span>Startup 5 of 5</span>
              <h6>Ispani</h6>
              <p>
                Ispani provides micro-jobbing for emerging markets through data
                -driven market research.
              </p>
              <strong>What we did:</strong>
              <p>
                Content &amp; Video, Rapid Prototyping, Branding, UX/UI Design
                &amp; Fullstack Development.
              </p>
              <strong>Techstack we used:</strong>
              <p>CSS, Django, Python, Wagtail CMS.</p>
            </Col>
            <Col md="5" className="mt-5">
              <img
                src={startup5}
                className="w75 img-fluid mt-1 mb-3 float-md-right"
                alt="#"
              />
            </Col>
            <Col md="1"></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Startup
