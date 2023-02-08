import { Box } from '@mui/material';
import { Route, Routes } from 'react-router';
import Header from './components/header/Header';
import Home from './pages/Home';
import Movieinfo from './pages/Movieinfo';
import { createContext, useEffect, useState } from 'react';
import MovieList from './components/movielist/MovieList';
// import { useParams } from "react-router-dom"
export const Productcontext = createContext();

function App() {
  const [popmovie, setpopmovies] = useState([]);
  // const type = useParams();
  

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
   
      .then(res => res.json())
      .then(data => setpopmovies(data.results))
  }, [])


  return (
    <Productcontext.Provider value={{popmovie}}>

      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:id" element={<Movieinfo />}></Route>
          <Route path="/movies/:type" element={<MovieList />}></Route>
        </Routes>

      </Box>
    </Productcontext.Provider>


  );
}

export default App;

