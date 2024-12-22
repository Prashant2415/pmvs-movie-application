import React from 'react'
import {useNavigate} from "react-router-dom"
import "./movies.css"
const Movies = (props) => {
    console.log("props112 ", props?.props);
    const movieData = props?.props;
    const navigate = useNavigate();
    const handleView =(details)=>{
        console.log(details);
    }
    const handleFavorite=()=>{
        console.log("Favorite");
    }
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
            <div className="movie-grid-container">
                {movieData?.map((md, index) => {
                    return (
                        <div className="movie-grid" key={index}>
                            <div className="card-container">
                                <div className="card-image">
                                    <img className='image' src={`src/images/${md?.poster}.jpg`} alt="image" />
                                </div>
                                <div className="card-details">
                                    <p className='card-detail-title'>{md?.title}</p>
                                </div>
                                <div className="card-button">
                                    <button className='card-button-view' onClick={()=>{handleView(md)}}>View</button>
                                    <button className='card-button-favorite' onClick={handleFavorite}>Favorite</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Movies
