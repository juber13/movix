import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Movie from './Movie';


const TopRated = () => {
    const movies = useSelector(store => store.movies);
    const [isWeek, setIsWeek] = useState(false);
    return (
        <div className='toprated-movie'>
           <div className='heading flex space-between'>
               <h3>Top Rated</h3>
               <div className={`toggle-btn flex space-around ${isWeek ? 'active' : ""}`}>
                  <div onClick={() => setIsWeek(false)}>Day</div>
                  <div onClick={() => setIsWeek(true)}>Week</div>
               </div>
           </div>
           <Movie movies={movies.topRated} />
        </div>
    )
}

export default TopRated