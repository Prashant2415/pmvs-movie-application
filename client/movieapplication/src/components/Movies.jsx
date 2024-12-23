import React from 'react'
import {useNavigate} from "react-router-dom"
import "./movies.css"
import CardGrid from '../CommonComponents/CardGrid';
const Movies = (props) => {
    console.log("props112 ", props?.props);
    const movieData = props?.props;
    return (
        <div className="movie-section">
            <div className="sorting-container">
                <div className="search-container">
                    <input className='search-input' type="text" placeholder='Search by name'/>
                    <button className='search-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search search-svg" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                    </button>
                </div>
            </div>
            <div className="grid-movie-container">
                <CardGrid movieData={movieData}/>
            </div>
        </div>
    )
}

export default Movies
