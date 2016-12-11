
import ngRedux = require("ng-redux");
import {app} from '../app.module';
import * as I from "../common/movie.interfaces";
import {IMovieActions} from "../common/movie.actions";

export class MovieReviewsCtrl implements ng.IController{
    
    movieId: string;
    selectedMovie:I.IMovieData;
    state: I.IAppState;

    static $inject = ["$ngRedux",  "movieActions", "$stateParams"];

    constructor(private movieStore: ngRedux.INgRedux,
                private movieActions: IMovieActions,
                private stateParams: ng.ui.IStateParamsService){

        this.movieId = stateParams["movieId"];
        this.movieStore.subscribe( () => {
            this.state = this.movieStore.getState();
            this.selectedMovie = this.state.SelectedMovie;
        });

        this.movieStore.dispatch(
            this.movieActions.GetMovieCreator(this.movieId)
        );
    }

}

app.controller('movieReviewsCtrl', MovieReviewsCtrl);

