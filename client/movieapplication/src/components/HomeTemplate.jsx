import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import axios from "axios"
import Movies from './Movies';
const HomeTemplate = () => {
  const [carouselData, setCarouselData] = useState();
  const [movieData, setMovieData] = useState();
  const getAllMovieData = async () => {
    await axios.get("http://localhost:8081/getAll").then((res) => {
      console.log(res.data);
      setCarouselData(res?.data[0]?.compConfig);
      setMovieData(res?.data[1]?.compConfig);
    }).catch((error) => { console.log(error) });
  }

  useEffect(() => {
    getAllMovieData();
  }, [])
  
  return (
    <div className='home-container'>
      <div className="carousel-main-container">
        <Carousel props={carouselData} />
      </div>
      <div className="movie-container">
        <Movies props={movieData}/>
      </div>
    </div>
  )
}

export default HomeTemplate
