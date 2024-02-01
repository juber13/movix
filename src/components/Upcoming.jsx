import { useSelector } from 'react-redux'
import { useState } from 'react';
import Movie from './Movie';


const Upcoming = () => {
    const  movies  = useSelector(store => store.movies);
    const [isWeek, setIsWeek] = useState(true);

    return (
        <div className='upcoming-movie'>
           <div className='heading flex space-between'>
               <h3 className="">What's Popular</h3>
               <div className={`toggle-btn flex space-around ${isWeek ? '' : "active"}`}>
                  <div onClick={() => setIsWeek(true)}>Movie</div>
                  <div onClick={() => setIsWeek(false)}>Tv Shows</div>
               </div>
           </div>
           <Movie movies={isWeek ?  movies.popularMovies : movies.popularTvShows} />
        </div>
    )
}

export default Upcoming