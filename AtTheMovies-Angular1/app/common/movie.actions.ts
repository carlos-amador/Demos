
import { app } from '../app.module';
import * as I from "./movie.interfaces"
import * as C from "./movie.constants"



export interface IMovieActions{
    GetMoviesCreator(): I.IAction;
    GetMovieCreator(movieId: string): I.IAction;
    GetBestSellingMovieCreator(): I.IAction;
    GetBestReviewedMovieCreator(): I.IAction;
    PurchaseMovieCreator(movie: I.IMovieData): I.IAction;
    AddMovieReviewCreator(movie: I.IMovieData, movieReview: I.IMovieReview): I.IAction;
    CalculateMovieRatingCreator(movie: I.IMovieData): I.IAction
}

export class MovieActions implements IMovieActions {
    
    constructor(){}    

    public GetMoviesCreator(): I.IAction{
        return {
            type: C.GET_MOVIES,
            payload: undefined
        }
    }

    public GetMovieCreator(id: string): I.IAction{
        return {
            type: C.GET_SELECTED_MOVIE,
            payload: {"id": id}
        }
    }

    public AddMovieReviewCreator(movie: I.IMovieData, movieReview: I.IMovieReview): I.IAction{
        return {
            type: C.ADD_REVIEW,
            payload: { "movie":movie, "movieReview": movieReview}
        }
    }

    public PurchaseMovieCreator(movie: I.IMovieData): I.IAction{
        return {
            type: C.PURCHASE_MOVIE,
            payload: {"movie" : movie}
        }
    }

    public CalculateMovieRatingCreator(movie: I.IMovieData): I.IAction{
        return {
            type: C.CALCULATE_RATINGS,
            payload: undefined
        }
    }

    public GetBestSellingMovieCreator(): I.IAction{
        return {
            type: C.GET_BEST_SELLING,
            payload: undefined
        }
    }

    public GetBestReviewedMovieCreator(): I.IAction{
        return {
            type: C.GET_BEST_REVIEWED,
            payload: undefined
        }
    }



}

app.factory('movieActions', () => { return new MovieActions(); });


