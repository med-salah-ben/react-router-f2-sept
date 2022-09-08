import React, {useState} from 'react';
import {Routes , Route} from "react-router-dom"
import './App.css';
import AddMovie from './components/AddMovie';
import AppNavbar from './components/AppNavbar';
import Home from './components/Pages/Home';
import MoviesList from './components/MoviesList';
import { movieData } from './Data';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Trailer from './components/Pages/Trailer';



function App() {
  const [movies , setMovies] = useState(movieData);
  const [searchRating,setSearchRating] = useState(0);
  const [x ,xy ] = useState('')

  const handleMovie = (movie)=>{
    setMovies([...movies,movie])
  }
  return (
    <div>
      <AppNavbar setSearchRating={setSearchRating} xy={xy} />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/add" element={<AddMovie handleMovie={handleMovie} />} />
      <Route path='/movies' element={<MoviesList movies={movies} searchRating={searchRating} x={x} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/movies/trailer/:id" element={<Trailer movies={movies} />} />

      </Routes>
    </div>
  );
}

export default App;
