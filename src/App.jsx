import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import './App.css'
import { useDispatch } from 'react-redux'
import customHookApi from './customHookApi'
import { setMovieDay, setMovieWeek, setPopularMovies, setPopularTvShows, setTopRatedMovies, setTopRatedTvShow, setMoviesList, setShowList } from './store/movieSlice'

import { Routes, Route } from 'react-router-dom'

// components
import Header from './components/header/Header'
import { Home } from './components/Hero/Home'
import Movies from './components/Movies'
import ExploreMovies from './pages/ExploreMovies'
import ExploreTvShow from './pages/ExploreTvShow'
import MovieDetails from './components/MovieDetails'

function App() {
  const disPatch = useDispatch();
  const [number, setNumber] = useState(2);
  const [loading, setLoaing] = useState(false);
  const movies = useSelector(store => store.movies);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmNhM2I4NTAyNmEzNjhmODBlYzFmZTdiY2M0ZGI2NyIsInN1YiI6IjYzZjc5ZDE1NjhiMWVhMDA4NjY4ZmEzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wRTRJ028nqEeEpsf8Xzgkch43vDKfVodY8s2OLesGAU'
    }
  };

  const fetchData = async (url, param) => {
    try {
      const res = await fetch(url, param);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  const handleScroll = async () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight)
        setNumber(prev => prev + 1);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    fetchData(`https://api.themoviedb.org/3/discover/tv?page=${number}`, options).then(data => {
      disPatch(setPopularTvShows(data));
    })

    fetchData(`https://api.themoviedb.org/3/discover/movie?page=${number}`, options).then(data => {
      disPatch(setPopularMovies(data));
    })
  }, [number])

  useEffect(() => {



    if (movies.moviesList.length <= 0) {
      customHookApi("https://api.themoviedb.org/3/genre/movie/list", {})
        .then(data => disPatch(setMoviesList(data)))
        .catch(err => console.log(err));
    }

    if (movies.showList.length <= 0) {
      customHookApi("https://api.themoviedb.org/3/genre/tv/list", {})
        .then(data => disPatch(setShowList(data)))
        .catch(err => console.log(err));
    }

    // day and week api for movie
    if (movies.movieDay.length <= 0) {
      customHookApi("https://api.themoviedb.org/3/trending/movie/day", {})
        .then(data => disPatch(setMovieDay(data)))
        .catch(err => console.log(err));
    }

    if (movies.movieWeek.length <= 0) {
      customHookApi("https://api.themoviedb.org/3/trending/movie/week", {})
        .then(data => disPatch(setMovieWeek(data)))
        .catch(err => console.log(err));
    }
    // ending here

    if (movies.popularMovies.length <= 0) {
      customHookApi("https://api.themoviedb.org/3/movie/popular", {})
        .then(data => disPatch(setPopularMovies(data)))
        .catch(err => console.log(err));
    }

    if (movies.popularTvShows.length <= 0) {
      customHookApi("https://api.themoviedb.org/3/tv/popular", {})
        .then(data => disPatch(setPopularTvShows(data)))
        .catch(err => console.log(err));
    }


    if (movies.topRatedMovies.length <= 0) {
      customHookApi("https://api.themoviedb.org/3/movie/top_rated", {})
        .then(data => disPatch(setTopRatedMovies(data)))
        .catch(err => console.log(err));
    }

    if (movies.topRatedTvShow.length <= 0) {
      customHookApi("https://api.themoviedb.org/3/tv/top_rated", {})
        .then(data => disPatch(setTopRatedTvShow(data)))
        .catch(err => console.log(err));
    }

  }, [])



  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/explore/movie' element={<ExploreMovies loading={loading} />} />
        <Route path='/explore/show' element={<ExploreTvShow loading={loading} />} />
      </Routes>
    </div>
  )
}

export default App
