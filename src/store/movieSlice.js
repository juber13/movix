import { createSlice } from "@reduxjs/toolkit";

const movies  = {
    moviesList : [],
    topRated : [],
    upcomings : [],
    tvShowsList : [],
    popular : [],
    movieDay : [],
    movieWeek : [],
    trending : [],
}

export const movieSlice = createSlice({
   initialState: movies, // Change 'initialState' to 'initialState'
   name: 'home',
   reducers: {
    setMovieList: (state , action) => { state.moviesList = action.payload.results },
    setTvShowList: (state , action) => { state.tvShowsList = action.payload.results },
    setTopRated: (state , action) => { state.topRated = action.payload.results },
    setUpcomings: (state , action) => { state.upcomings = action.payload.results },
    setPopular: (state , action) => { state.popular = action.payload.results },
    setMovieDay: (state , action) => { state.movieDay = action.payload.results },
    setMovieWeek: (state , action) => { state.movieWeek = action.payload.results },
    setTrending: (state , action) => { state.trending = action.payload.results },
   }
})

export const {setMovieDay, setMovieList, setMovieWeek, setPopular, setTopRated, setTrending, setTvShowList, setUpcomings} = movieSlice.actions;

export default movieSlice.reducer;
