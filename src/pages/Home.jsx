import React from 'react'
import HeroSlider from '../UI/HeroSlider'
import Helmet from '../Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'
import FindCarForm from '../UI/FindCarForm'
import AboutSection from '../UI/AboutSection'
import ServicesList from '../UI/ServicesList'
import {CarItem }  from '../UI/CarItem'
import BecomeDriverSection from '../UI/BecomeDriverSection'
import Testimonial from '../UI/Testimonial'

import carData from '../assets/data/carData'

import BlogList from '../UI/BlogList'

const Home = () => {
  return (
   <Helmet title='Home' >

    {/*----------hero section------------*/}
    <section className='p-0 hero__slider-section'>
      <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg='4' md='4'>   
              <div className="find__cars-left">
              <h2>Find your vehicle Here</h2>
              </div>
              </Col>
              <Col lg='8' md='8' sm='12'>
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
    </section>

    {/*-----------About Section-------------*/}
    <AboutSection />

    
    {/*-----------Service Section-------------*/}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className='section__subtitle'>See Our</h6>
            <h2 className="secction__title">Popular Services</h2>

          </Col>
          <ServicesList />
        </Row>
      </Container>
    </section>
    {/*-----------car offer Section-------------*/}

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h6 className='section__subtitle'>Come with</h6>
            <h2 className="section__title">Hot Offers</h2>
          </Col>
          {
            carData.slice(0, 6).map(item=>(
              <CarItem item={item} key={item.id}/>
            ))
          }
        </Row>
      </Container>
    </section>
 {/*-----------become a driver Section-------------*/}
    <BecomeDriverSection />


 {/*-----------Testimonial Section-------------*/}

     <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-4 text-center'>
            <h6 className="section__subtitle">Our Clients says</h6>
            <h2 className="section__title">Testimonials</h2>
          </Col>
          <Testimonial />
        </Row>
      </Container>
     </section>
     <br></br>

     {/*-----------Bloglist Section-------------*/}
     <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
            <h6 className="section__subtitle">Explore Our Blogs</h6>
            <h2 className="section__title">Latest Blogs</h2>
          </Col>
          <BlogList />
        </Row>
      </Container>
     </section>
   </Helmet>
  )
}

export default Home