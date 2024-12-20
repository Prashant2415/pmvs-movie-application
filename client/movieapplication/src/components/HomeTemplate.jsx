import React, { useEffect } from 'react'
import Carousel from './Carousel'
import { DummyResponseData } from './DummyResponseData'

const HomeTemplate = () => {
  const dummyData = DummyResponseData;
  return (
    <div className='home-container'>
        <div className="carousel-main-container">
            <Carousel props={dummyData}/>
        </div>
    </div>
  )
}

export default HomeTemplate
