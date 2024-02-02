import { useSelector } from 'react-redux';
const ExploreTvShow = ({ loading }) => {
    const movies = useSelector(store => store.movies);
    // console.log(movies.moviesList);
    // console.log(loading)
    const truncateString = (str = "") => {
        return str.length > 16 ? str.slice(0, 16) + "..." : str;
    }

    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='heading flex space-between'>
                    <div className="left">
                        <h4>Explore Movies</h4>
                    </div>

                    <div className="select-options flex gap">
                        <select name="" id="options">
                            {movies.moviesList.map((list, index) => <option value={list.name} key={index}>{list.name}</option>)}
                        </select>
                        <select name="" id="options">
                            <option value="Popularity Decending">Popularity Decending</option>
                            <option value="Popularity Acending">Popularity Acending</option>
                            <option value="Rating Decending">Rating Decending</option>
                            <option value="Rating Acending">Rating Acending</option>
                            <option value="Release Date Decending">Release Date Decending</option>
                            <option value="Release Date Acending">Release Date Acending</option>
                            <option value="Title">Title (A - Z)</option>
                        </select>
                    </div>
                </div>

                <div className="item-start flex-wrap movies gaps">
                    {movies.popularTvShows.map((movie, index) => {
                        const { poster_path, original_title, release_date, id, vote_average, name, first_air_date } = movie;
                        return (
                            <div className='movie' key={`${movie.id}-${index}`}>
                                <img src={poster_path === null ?
                                    `https://moviex-olive.vercel.app/assets/no-poster-af8294eb.png` :
                                    `https://image.tmdb.org/t/p/original${poster_path}`}
                                    alt={original_title} className='movie-poster' />

                                {/* rating  */}

                                <div className='flex rating parent'>
                                    {vote_average.toFixed(1)}
                                </div>


                                <div className='description'>
                                    <h5>{truncateString(original_title) || truncateString(name)}</h5>
                                    <p>{release_date || first_air_date}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ExploreTvShow