import { useSelector } from 'react-redux'
import { useState } from 'react';
import Movie from './Movie';


const Upcoming = () => {
    const  movies  = useSelector(store => store.movies);
    const [isWeek, setIsWeek] = useState(false);

    return (
        <div className='upcoming-movie'>
           <div className='heading flex space-between'>
               <h3 className="">What's Popular</h3>
               <div className={`toggle-btn flex space-around ${isWeek ? 'active' : ""}`}>
                  <div onClick={() => setIsWeek(false)}>Day</div>
                  <div onClick={() => setIsWeek(true)}>Week</div>
               </div>
           </div>
           <Movie movies={movies.upcomings} />
        </div>
    )
}

export default Upcoming