import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import AboutSection from '../components/UI/AboutSection'
import { Container,Row,Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import driveImg from '../assets/all-images/drive.jpg'
import OurMembers from '../components/UI/OurMembers'
import '../styles/about.css'
const About = () => {
  return (
    <Helmet title='About'>
      <CommonSection title='About Us'/>
      <AboutSection aboutClass='aboutPage'/>
      <section className='about__page-section'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12'>
              <div className="about__page-img">
                <img src={driveImg} alt="" className='w-100' rounded-3 />
              </div>
            </Col>
            <Col lg='6' md='6' sm='12'>
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Comitted To Provide Safe Ride Solutions
                </h2>
                <p className='section__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates temporibus vero placeat, minima repellat pariatur neque sequi nulla, quis cumque non dolores ducimus dignissimos molestiae alias minus consequatur aut modi.
                </p>
                <div className='d-flex align-items-center gap-3 mt-4'>
                  <span className='fs-4'><i className='ri-phone-line'></i></span>
                  <div>
                    <h6 className="section__subtitle">
                      Need Any Help?
                    </h6>

                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomeDriverSection/>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section__subtitle">Expertes</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About