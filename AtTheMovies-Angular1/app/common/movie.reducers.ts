
import * as I from "./movie.interfaces";
import * as C from "./movie.constants";
import { AppState } from "./movie.state";
//import { createSelector } from "reselect";




export const MoviesReducer = (state: any = AppState, action: any) => {
        switch(action.type){
            case C.GET_MOVIES:
                return action.payload || state;
            case C.GET_SELECTED_MOVIE:
                state.SelectedMovie = state.Movies.filter((movie:I.IMovieData) => {
                   return movie.id.toString() === action.payload.id 
                })[0];
                return state;
            case C.ADD_REVIEW:
                state.SelectedMovie.reviews = [...state.SelectedMovie.reviews, action.payload.movieReview];
                state.Movies = state.Movies.map((movie:I.IMovieData) => {
                    return movie.id === state.SelectedMovie.id ? state.SelectedMovie: movie;
                });
                return state;
            case C.CALCULATE_RATINGS:
                state.SelectedMovie = Object.assign({}, state.SelectedMovie);
                let sum = state.SelectedMovie.reviews.reduce((previous:I.IMovieReview, current: I.IMovieReview) =>{
                    return current.stars += previous.stars;
                });
                state.SelectedMovie.stars = Math.round(sum/state.SelectedMovie.reviews.length);
                state.Movies = state.Movies.map((movie:I.IMovieData) => {
                    return movie.id === state.SelectedMovie.id ? state.SelectedMovie: movie;
                });
                return state;
            case C.PURCHASE_MOVIE:
                state.SelectedMovie = Object.assign({}, state.SelectedMovie);
                state.SelectedMovie.sold += 1;
                state.Movies = state.Movies.map((movie:I.IMovieData) => {
                    return movie.id === state.SelectedMovie.id ? state.SelectedMovie: movie;
                });
                return state;
            case C.GET_BEST_SELLING:
                state.BestSellingMovie = state.Movies.reduce((x:I.IMovieData, y:I.IMovieData) => {
                    return x.sold > y.sold ? x:y; 
                });
                return state;
            default:
                return state;
        }

}



