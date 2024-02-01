import React from 'react'
import Upcoming from './Upcoming'
import Trending from './Trending'
import TopRated from './TopRated'

const Movies = () => {
    return (
        <div className='container'>
            <Trending/>
            <Upcoming/>
            <TopRated/>
        </div>
    )
}

export default Movies