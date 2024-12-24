import React, { useState } from 'react'
import CardGrid from '../CommonComponents/CardGrid';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../CommonComponents/BackButton';

const MovieItem = (props, undefined) => {
    console.log("prosp123 ",props.props)
    const movieData = props?.props;
    const stateValue = useLocation();
    console.log(stateValue?.state);
    const [flag, setFlag] = useState(stateValue?.state?.flag);
    const [item, setItem]= useState(stateValue?.state?.details);

  return (
    <div className='movie-item-container'>
      <BackButton/>
      <CardGrid movieData={movieData}/> 
    </div>
  )
}

export default MovieItem
