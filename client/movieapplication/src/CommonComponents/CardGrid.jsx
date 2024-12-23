import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardGrid = (movieData, undefined) => {
    console.log("sdadad ", movieData.movieData)
    const flag = true;
    const navigate = useNavigate();
    const handleView = (details) => {
        console.log(details);
        navigate("/movies", {state: {details, flag}})
    }
    const handleFavorite = () => {
        console.log("Favorite");
    }
    return (
        <div className="movie-grid-container">
            {movieData?.movieData?.map((md, index) => {
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
                                <button className='card-button-view' onClick={() => { handleView(md) }}>View</button>
                                <button className='card-button-favorite' onClick={handleFavorite}>Favorite</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardGrid
