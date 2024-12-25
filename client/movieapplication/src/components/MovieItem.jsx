import React, { useState } from 'react'
import CardGrid from '../CommonComponents/CardGrid';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../CommonComponents/BackButton';

const MovieItem = (props, undefined) => {
  console.log("prosp123 ", props.props)
  const movieData = props?.props;
 

  const [flag,setFlag] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  
  const handleInputChange=(event)=>{
    setFlag(true);
    const value = event.target.value.toLowerCase();
    setInput(value)
    const filterData = props?.props.filter((item)=> Object.values(item).some((field)=> String(field).toLocaleLowerCase().includes(value)));
    setData(filterData);
    
  }

  const handleSearch =()=>{
    console.log("asdsa")
  }

  return (
    <div className='movie-item-container'>
      <BackButton />
      <div className="search-container">
        <input className='search-input' type="text" placeholder='Search by name' value={input} onChange={handleInputChange} />
        <button className='search-button' onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search search-svg" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </div>
      <div className="display-movies">
        {!flag ? (
          <CardGrid movieData={movieData} />
        ) : (
          <CardGrid movieData={data} />
        )}
      </div>
    </div>
  )
}

export default MovieItem
