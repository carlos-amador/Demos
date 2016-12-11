
import ngRedux = require("ng-redux");
import {app} from "../app.module";
import * as I from "../common/movie.interfaces";
import { IMovieActions } from "../common/movie.actions";



export class MovieListCtrl implements ng.IController{


    movies : Array<I.IMovieData>;
    action : I.IAction;
    state: I.IAppState;

    static $inject = ["$ngRedux", "movieActions"];


    constructor(private movieStore: ngRedux.INgRedux,
                private movieActions: IMovieActions){

        this.movieStore.subscribe( () => {
            this.state = this.movieStore.getState();
        })
        
        this.movieStore.dispatch(
            this.movieActions.GetMoviesCreator()
        );

        this.movies = this.state.Movies;
    } 

}

app.controller('movieListCtrl', MovieListCtrl);

