import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Col, Container, FormGroup, Input,Form, Row } from 'reactstrap'
import { Link } from 'react-router-dom';
import '../styles/contact.css'
const socialLinks = [
    {
      url: "#",
      icon: "ri-facebook-line",
    },
    {
      url: "#",
      icon: "ri-instagram-line",
    },
    {
      url: "#",
      icon: "ri-linkedin-line",
    },
    {
      url: "#",
      icon: "ri-twitter-line",
    },
  ];
  
const Contact = () => {
    
  return (
<Helmet title={'contact'} >
<CommonSection title={'Contact'}/>
<section>
    <Container>
        <Row>
            <Col lg='7' md='7'>
                <h6 className='fw-bold mb-4'>Get In Touch </h6>
                <Form>
                    <FormGroup className='contact__form'>
                        <Input placeholder='Your Name ' type='text'/>
                    </FormGroup>
                    <FormGroup className='contact__form'>
                        <Input placeholder='Email ' type='email'/>
                    </FormGroup>
                    <FormGroup className='contact__form'>
                        <textarea 
                        rows="5" 
                        placeholder='Message' 
                        className='textarea'>

                        </textarea>
                      
                    </FormGroup>
                    <button className='btn contact__btn ' type='submit'>Send Message</button>
                </Form>
            </Col>
            <Col lg='5' md='5'>
                <div className="contact__info">
                    <h6 className='fw-bold '>Contact Information</h6>
                    <p className="section__decription mb-0">123,ZindaBazar, Sylhet,Bangladesh</p>
                    <div className='d-flex align-items-center gap-2'>
                        <h6 className='mb-0 fs-6'>Phone:</h6>
                        <p className="section__description mb-0">+963:940577603</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <h6 className='mb-0 fs-6'>Phone:</h6>
                        <p className="section__description mb-0">ameer-hellaly@gmail.com</p>
                    </div>
                    <h6 className='fw-bold'>Follw Us</h6>
                    <div className='d-flex align-items-center gap-4 mt-3'>
                        {
                            socialLinks.map((item,index)=>(
                                <Link className='social__link-icon' to={item.url} key={index}><i className={item.icon}></i></Link>
                            ))
                        }
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>
</Helmet>
  )
}

export default Contact