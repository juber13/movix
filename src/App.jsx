import { useEffect, useState } from 'react'

import './App.css'
import {useDispatch } from 'react-redux'
import customHookApi from './customHookApi'
import {setMovieDay, setMovieWeek, setPopularMovies, setPopularTvShows, setTopRatedMovies, setTopRatedTvShow, setMoviesList } from './store/movieSlice'

import { Routes , Route } from 'react-router-dom'

// components
import Header from './components/header/Header'
import { Home } from './components/Hero/Home'
import Movies from './components/Movies'
import ExploreMovies from './pages/ExploreMovies'
import ExploreTvShow from './pages/ExploreTvShow'

function App() {
  const disPatch = useDispatch();
  useEffect(() => {
    customHookApi("https://api.themoviedb.org/3/genre/movie/list",{})
    .then(data => disPatch(setMoviesList(data)))
    .catch(err => console.log(err));

    
    // customHookApi("https://api.themoviedb.org/3/genre/tv/list",{})
    // .then(data => disPatch(setTvShowList(data)))
    // .catch(err => console.log(err));

    // customHookApi("https://api.themoviedb.org/3/movie/upcoming",{})
    // .then(data => disPatch(setUpcomings(data)))
    // .catch(err => console.log(err));
   
    // day and week api for movie
    customHookApi("https://api.themoviedb.org/3/trending/movie/day",{})
    .then(data => disPatch(setMovieDay(data)))
    .catch(err => console.log(err));

    customHookApi("https://api.themoviedb.org/3/trending/movie/week",{})
    .then(data => disPatch(setMovieWeek(data)))
    .catch(err => console.log(err));
    // ending here


    customHookApi("https://api.themoviedb.org/3/movie/popular",{})
    .then(data => disPatch(setPopularMovies(data)))
    .catch(err => console.log(err));
   
    customHookApi("https://api.themoviedb.org/3/tv/popular",{})
    .then(data => disPatch(setPopularTvShows(data)))
    .catch(err => console.log(err));

    
    
    customHookApi("https://api.themoviedb.org/3/movie/top_rated",{})
    .then(data => disPatch(setTopRatedMovies(data)))
    .catch(err => console.log(err));

    customHookApi("https://api.themoviedb.org/3/tv/top_rated",{})
    .then(data => disPatch(setTopRatedTvShow(data)))
    .catch(err => console.log(err));

  },[])
  
 

  return (
    <div className='app'>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/explore/movie' element={<ExploreMovies/>} />
        <Route path='/explore/show' element={<ExploreTvShow/>} />
       </Routes>
     </div>
  )
}

export default App
