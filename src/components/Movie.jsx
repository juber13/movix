import React, { useState , useRef } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import './movie.css'

const Movie = (props) => {
  const movies = props.movies;
  console.log(movies);
  const element = useRef(null);

  const handlePrevClick = () => {
    const width = element.current.clientWidth;
    element.current.scrollLeft = element.current.scrollLeft - width + 100;  
  };

  const handleNextClick = () => {
    const width = element.current.clientWidth;
    element.current.scrollLeft = element.current.scrollLeft + width + 10; 
  };

  const truncateString = (str = "") => {
    return str.length > 16 ? str.slice(0 , 16) + "..." : str;
  }

  return (
    <>
      <div className='carousel-btn container item-start'>
        <BsArrowLeftCircleFill className='carousel-icon' onClick={handlePrevClick} />
        <BsArrowRightCircleFill className='carousel-icon' onClick={handleNextClick} />
      </div>
      <div className='movies gap' ref={element}>
        {movies.map((movie, index) => {
          const { poster_path, original_title, release_date, id, vote_average , name ,first_air_date } = movie;
          return (
            <div className='movie' key={index}>
              <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={original_title}  className='movie-poster'/>

             {/* rating  */}
              <div className='rating flex  parent'>
                 {vote_average.toFixed(1)}
                 <div>
                   
                 </div>
              </div>

              <div className='description'>
                 <h5>{truncateString(original_title) ||  truncateString(name)}</h5>
                 <p>{release_date || first_air_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movie;
