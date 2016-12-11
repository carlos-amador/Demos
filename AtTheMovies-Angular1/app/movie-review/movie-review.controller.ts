
import ngRedux = require("ng-redux");
import {app} from '../app.module';
import * as I from "../common/movie.interfaces";
import * as E from "../common/movie.enums"
import {IMovieActions} from "../common/movie.actions";
import {IMovieService} from "../common/movie.service"
import {IMessageService} from "../common/message.service"


export class MovieReviewCtrl implements ng.IController{
    
    movieId: string;
    selectedMovie:I.IMovieData;
    state: I.IAppState;
    movieReview: I.IMovieReview;
    starsGiven:string;

    static $inject = ["$ngRedux",  "movieActions", "$stateParams", "movieService", "messageService"];

    constructor(private movieStore: ngRedux.INgRedux,
                private movieActions: IMovieActions,
                private stateParams: ng.ui.IStateParamsService,
                private movieService: IMovieService,
                private messageService: IMessageService){

        this.movieId = stateParams["movieId"];
        this.movieStore.subscribe( () => {
            this.state = this.movieStore.getState();
            this.selectedMovie = this.state.SelectedMovie;
        });
        
        this.movieStore.dispatch(
            this.movieActions.GetMovieCreator(this.movieId)
        );

    } 

    protected saveReview(){
        this.movieReview.stars = parseInt(this.starsGiven);
        this.movieStore.dispatch(
            this.movieActions.AddMovieReviewCreator(this.selectedMovie, this.movieReview)
        );
        this.movieStore.dispatch(
            this.movieActions.CalculateMovieRatingCreator(this.selectedMovie)
        );

        this.messageService.publish(E.EventType.review);
    }
   
}

app.controller('movieReviewCtrl', MovieReviewCtrl);
