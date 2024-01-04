import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/about-section.css'
import aboutImg from '../assets/all-images/cars-img/bmw-22449.png'

const AboutSection = ({aboutClass}) => {
  return (
    <section className='about__section' style={aboutClass === 'aboutPage' ? {marginTop: '0px'} : {marginTop: '280px'}}>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                <div className="about__section-content">
                    <h4 className="secction__subtitle">About Us</h4>
                    <h2 className="section__title">Welcome to car rent service</h2>
                    <p className='section__descriptin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Cum odit corrupti veniam.
                     Ut magni facere corporis quam soluta dolor,
                     id quibusdam est quisquam obcaecati molestiae fuga harum,
                     temporibus illum assumenda voluptatum quas animi minima vel pariatur fugiat quia deleniti blanditiis.</p>
                     <div className="about__section-item d-flex align-items-center gap-2">
                     <p className='section__descriptin d-flex align-items-center gap-2'>
                        <i class='ri-checkbox-circle-line'></i> naveen sjadlkaskld dfnsjdnf</p>

                        <p className='section__descriptin d-flex align-items-center gap-2'>
                        <i class='ri-checkbox-circle-line'></i> naveen sjadlkaskld dfnsjdnf</p>

                     </div>

                     <div className="about__section-item d-flex align-items-center gap-2">
                     <p className='section__descriptin d-flex align-items-center gap-2'>
                        <i class='ri-checkbox-circle-line'></i> naveen sjadlkaskld dfnsjdnf</p>

                        <p className='section__descriptin d-flex align-items-center gap-2'>
                        <i class='ri-checkbox-circle-line'></i> naveen sjadlkaskld dfnsjdnf</p>

                     </div>

                </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt='' className='w-100'/>
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default AboutSection