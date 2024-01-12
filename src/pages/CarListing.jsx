import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../Helmet/Helmet'
import CommonSection from '../UI/CommonSection'
import carData from '../assets/data/carData'
import {CarItem} from '../UI/CarItem'

const CarListing = () => {
  return (
    <Helmet title='Cars'>
      <CommonSection title='Cars'/>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i class='ri-sort-asc'></i> Sort By
                </span>

                <select >
                  <option >Select</option>
                  <option value='low'>Low to High</option>
                  <option value='high'>High to Lower</option>
                </select>
              </div>
            </Col>

            {
              carData.map(item=> <CarItem item={item} key={item.id} />)
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CarListing