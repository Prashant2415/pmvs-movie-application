import Header from "./components/Header"
import HomeTemplate from "./components/HomeTemplate"
import "./index.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeTemplate/>}/>
      </Routes>
    </Router>
  )
}

export default App
