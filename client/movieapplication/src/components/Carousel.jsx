import React, { useEffect, useState } from 'react'
import "./carousel.css"
import image from "../images/The_Shawshank_Redemption.jpg"
const Carousel = (props) => {
  console.log(props.props)
  const data = props.props;
  const [currentItem, setCurrentItem] = useState(0);
  console.log("data", data.length -1)
  //handle Next
  const handleNext =()=>{
    setCurrentItem((item)=> (item + 1) % data.length);
  }

  //handle Previous
  const handlePrevious =()=>{
   setCurrentItem((item)=> item === 0 ? data.length - 1 : item -1)
  }
  console.log(currentItem)
  return (
    <div className='carousel-container'>
      <div className="carousel-content">
        <h1 className='movie-name'>{data[currentItem].title}</h1>
        <p className='movie-description'>{data[currentItem].plot}</p>
        <p className='movie-directory'>By {data[currentItem].director}</p>
        <button className='explore-button'>Explore</button>
        
      </div>
      <div className="button-container">
          <button className='previous-button' onClick={handlePrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle previous" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
          </button>
          <button className='next-button' onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-circle next" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
          </svg>
          </button>
        </div>
      <div className="carousel-image-container">
        <img className='carousel-image' src={`src/images/${data[currentItem].poster}.jpg`} alt={data[currentItem].title} />
      </div>
      
    </div>
  )
}

export default Carousel
