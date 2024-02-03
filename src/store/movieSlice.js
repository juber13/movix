import { createSlice } from "@reduxjs/toolkit";

const movies = {
    movieDay: [],
    movieWeek: [],
    popularMovies: [],
    popularTvShows: [],
    topRatedMovies: [],
    topRatedTvShow: [],
    moviesList: [],
    showList: [],

}

export const movieSlice = createSlice({
    initialState: movies, // Change 'initialState' to 'initialState'
    name: 'home',
    reducers: {
        setMovieDay: (state, action) => { state.movieDay = action.payload.results },
        setMovieWeek: (state, action) => { state.movieWeek = action.payload.results },
        setPopularMovies: (state, action) => { state.popularMovies = [...state.popularMovies, ...action.payload.results] },
        setPopularTvShows: (state, action) => { state.popularTvShows = [...state.popularTvShows, ...action.payload.results] },
        setTopRatedMovies: (state, action) => { state.topRatedMovies = action.payload.results },
        setTopRatedTvShow: (state, action) => { state.topRatedTvShow = action.payload.results },
        setMoviesList: (state, action) => { state.moviesList = action.payload.genres },
        setShowList: (state, action) => { state.showList = action.payload.genres },
        // setTrending: (state , action) => { state.trending = action.payload.results },
    }
})

export const { setMovieDay, setMovieWeek, setPopularMovies, setPopularTvShows, setTopRatedMovies, setTopRatedTvShow, setMoviesList , setShowList }
    = movieSlice.actions;
export default movieSlice.reducer;
