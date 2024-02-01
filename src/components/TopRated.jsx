import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Movie from './Movie';


const TopRated = () => {
    const movies = useSelector(store => store.movies);
    console.log(movies)
    const [isWeek, setIsWeek] = useState(true);


    return (
        <div className='toprated-movie'>
           <div className='heading flex space-between'>
               <h3>Top Rated</h3>
               <div className={`toggle-btn flex space-around ${isWeek ? '' : "active"}`}>
                  <div onClick={() => setIsWeek(true)}>Movies</div>
                  <div onClick={() => setIsWeek(false)}>Tv Shows</div>
               </div>
           </div>
           <Movie movies={isWeek ? movies.topRatedMovies : movies.topRatedTvShow} />
        </div>
    )
}

export default TopRated