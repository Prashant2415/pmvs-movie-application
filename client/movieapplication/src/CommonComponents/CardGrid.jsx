import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const FavoriteComp = createContext();

const CardGrid = (movieData, undefined) => {
    console.log("sdadad ", movieData.movieData)
    const flag = true;
    const navigate = useNavigate();
    const [fav,setFav] = useState();
    const [list,setList] = useState([]);
    const handleView = (details) => {
        console.log(details);
        navigate("/particular", {state: {details, flag}})
    }
    const handleFavorite = (detail) => {
        setList((prevFavorites) => {
            // Check if the product is already in favorites
            const isAlreadyFavorite = prevFavorites.some((fav) => fav.id === detail.id);
            if (isAlreadyFavorite) {
              // Remove from favorites if already added
              return prevFavorites.filter((fav) => fav.id !== detail.id);
            } else {
              // Add to favorites if not present
              return [...prevFavorites, detail];
            }
          });
          return(
            <FavoriteComp.Provider value={{list}}>
            </FavoriteComp.Provider>
          )
    }

    console.log("array ",list);
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
                                <button className='card-button-favorite' onClick={()=>{ handleFavorite(md)}}>Favorite</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CardGrid
