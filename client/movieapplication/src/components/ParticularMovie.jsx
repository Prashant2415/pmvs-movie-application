import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import image from "../images/The_Shawshank_Redemption.jpg"
import "./particularMovie.css"
import { BackButton } from '../CommonComponents/BackButton';
const ParticularMovie = (props, undefined) => {
    const movieData = props?.props;
    const stateValue = useLocation();
    console.log(stateValue?.state);
    const [flag, setFlag] = useState(stateValue?.state?.flag);
    const [item, setItem]= useState(stateValue?.state?.details);
    const dummy = {
      "id": 1,
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": [
        "Drama"
      ],
      "rating": 9.3,
      "director": "Frank Darabont",
      "actors": [
        "Tim Robbins",
        "Morgan Freeman"
      ],
      "plot": "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
      "poster": "https://fakeimg.pl/220x310/ff0000",
      "trailer": "https://example.com/shawshank_redemption_trailer.mp4",
      "runtime": 142,
      "awards": "Nominated for 7 Oscars",
      "country": "USA",
      "language": "English",
      "boxOffice": "$28.3 million",
      "production": "Columbia Pictures",
      "website": "http://www.warnerbros.com/movies/shawshank-redemption"
    }
    const {title,year,rating,director,plot,poster,awards,language,production,website,actors,genre} = item;
  return (
    <>
    <BackButton title="Back"/>
    <div className='particular-movie-container'>
      
      <div className="particular-image-container">
        <img className='particular-image' src={`src/images/${poster}.jpg`} alt="" />
      </div>
      <div className="particular-movie-content">
        <p className='content-title p-tag'>{title}</p>
        <p className='content-production p-tag'>{production}</p>
        <p className='content-date p-tag'>{year}</p>
        <p className='content-overview'>Overview</p>
        <p className='content-plot'>{plot}</p>
        <div className="casting-container">
            <div className="inner-content">
              <p className='actors-title p-gap p-tag'>Starring</p>
              {actors?.map((a,index)=>{
                return(
                  <span className='actors-name' key={index}>{a} &nbsp;</span>
                )
              })}
            </div>
            <div className="inner-content">
              <p className='actors-title p-gap p-tag'>Created by</p>
              <span className='content-createdby'>{director}</span>
            </div>
            
            <div className="inner-content">
              <p className='content-genre p-gap p-tag'>Genre</p>
              {genre?.map((g,index)=>{
                return(
                  <span className='genre-name' key={index}>{g} &nbsp;</span>
                )
              })}
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ParticularMovie
