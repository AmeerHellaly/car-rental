


import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import '../../styles/about-section.css'
import bmwOffer from '../../assets/all-images/cars-img/bmw-offer.png'
const AboutSection = ({aboutClass}) => {
  return <section className='about__section' style={aboutClass==='aboutPage'?{marginTop:'0px'}:{marginTop:'280px'}}>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className="about__section-content">
            <h4 className="section__subtitle">About Us</h4>
            <h2 className="section__title">Welcome to car rent</h2>
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga expedita tempore asperiores facilis? At fugiat culpa deserunt a, nesciunt, enim cupiditate commodi beatae, vel consequuntur cum eius autem laboriosam et fugit eos obcaecati tempora necessitatibus dolores eaque ex libero odit?
            </p>
            <div className="about__section-item d-flex align-items-center" >
            <p className="section description d-flex align-items-center gap-2">
            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.

            </p>
            <p className="section description d-flex align-items-center gap-2">
            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.

            </p>
            </div>
            <div className="about__section-item d-flex align-items-center" >
            <p className="section description d-flex align-items-center gap-2">
            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.

            </p>
            <p className="section description d-flex align-items-center gap-2">
            <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.

            </p>
            </div>
         
        
                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className="about__img">
                    <img src={bmwOffer} className='w-100
                    ' />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AboutSection