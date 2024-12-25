import { useEffect, useState } from "react"
import Header from "./components/Header"
import HomeTemplate from "./components/HomeTemplate"
import MovieItem from "./components/MovieItem"
import "./index.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import axios from "axios"
import ParticularMovie from "./components/ParticularMovie"
import FavoriteMovie from "./components/FavoriteMovie"
function App() {
  const [movieItems, setMovieItems] = useState();
  const getAllMovieData = async () => {
    await axios.get("http://localhost:8081/getAll").then((res) => {
      console.log(res.data);
      setMovieItems(res?.data[1]?.compConfig);
    }).catch((error) => { console.log(error) });
  }
  useEffect(()=>{
    getAllMovieData();
  },[])
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeTemplate/>}/>
        <Route path="/movies" element={<MovieItem props={movieItems}/>}/>
        <Route path="/particular" element={<ParticularMovie/>}/>
        <Route path="/favorite" element={<FavoriteMovie/>}/>
      </Routes>
    </Router>
  )
}

export default App
