import Movie from './Movie';
import {useSelector } from 'react-redux';
import { useState } from 'react';
import './movie.css'

const Trending = () => {
  const  movies  = useSelector(store => store.movies);
  const [isWeek, setIsWeek] = useState(false);


  return (
    <div className='trending-movie'>
           <div className='heading flex space-between'>
               <h3>Trending</h3>
               <div className={`toggle-btn flex space-around ${isWeek ? 'active' : ""}`}>
                  <div onClick={() => setIsWeek(false)}>Day</div>
                  <div onClick={() => setIsWeek(true)}>Week</div>
               </div>
           </div>
           <Movie movies={movies.trending} />
        </div>
  )
}

export default Trending