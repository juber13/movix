import Movie from './Movie';
import {useSelector } from 'react-redux';
import { useState } from 'react';
import './movie.css'

const Trending = () => {
  const  movies  = useSelector(store => store.movies);
  const [isWeek, setIsWeek] = useState(true);


  return (
    <div className='trending-movie'>
           <div className='heading flex space-between'>
               <h3>Trending</h3>
               <div className={`toggle-btn flex space-around ${isWeek ? "" : "active"}`}>
                  <div onClick={() => setIsWeek(true)}>Day</div>
                  <div onClick={() => setIsWeek(false)}>Week</div>
               </div>
           </div>
           <Movie movies={isWeek ? movies.movieDay : movies.movieWeek} />
        </div>
  )
}

export default Trending