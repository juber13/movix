import { useEffect, useState } from 'react'

import './App.css'
import {useDispatch } from 'react-redux'
import customHookApi from './customHookApi'
import { setMovieDay , setPopular , setTopRated , setMovieList , setUpcomings , setTrending , setTvShowList , setMovieWeek } from './store/movieSlice'


// components
import Header from './components/header/Header'
import { Home } from './components/home/home'
import Movies from './components/Movies'

function App() {
  const disPatch = useDispatch();
  useEffect(() => {
    customHookApi("https://api.themoviedb.org/3/genre/movie/list",{})
    .then(data => disPatch(setMovieList(data)))
    .catch(err => console.log(err));

    
    customHookApi("https://api.themoviedb.org/3/genre/tv/list",{})
    .then(data => disPatch(setTvShowList(data)))
    .catch(err => console.log(err));

    customHookApi("https://api.themoviedb.org/3/movie/upcoming",{})
    .then(data => disPatch(setUpcomings(data)))
    .catch(err => console.log(err));

    customHookApi("https://api.themoviedb.org/3/trending/movie/day",{})
    .then(data => disPatch(setTrending(data)))
    .catch(err => console.log(err));

    customHookApi("https://api.themoviedb.org/3/movie/popular",{})
    .then(data => disPatch(setPopular(data)))
    .catch(err => console.log(err));

    customHookApi("https://api.themoviedb.org/3/movie/top_rated",{})
    .then(data => disPatch(setTopRated(data)))
    .catch(err => console.log(err));

    
    customHookApi("https://api.themoviedb.org/3/trending/movie/week",{})
    .then(data => disPatch(setMovieWeek(data)))
    .catch(err => console.log(err));

    customHookApi(" https://api.themoviedb.org/3/trending/movie/day",{})
    .then(data => disPatch(setMovieDay(data)))
    .catch(err => console.log(err));

    

  },[])
  
 

  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Movies/>
     </div>
  )
}

export default App
