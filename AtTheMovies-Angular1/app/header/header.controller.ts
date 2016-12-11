
import ngRedux = require("ng-redux");
import {app} from '../app.module';
import * as I from "../common/movie.interfaces";
import * as E from "../common/movie.enums"
import {IMovieService} from "../common/movie.service";
import {IMessageService} from "../common/message.service";
import {IMovieActions} from "../common/movie.actions";
import {Subscription, Observable } from "rxjs";


export class HeaderCtrl implements ng.IController{
    
    bestSellingMovie:I.IMovieData;
    bestReviewedMovie:I.IMovieData;
    movies: Array<I.IMovieData>;
    state: I.IAppState;
    headerObservable: Observable<any>;

    static $inject = ["$ngRedux", "movieActions", "movieService", "messageService"];
    //static $inject = ["movieActions", "movieService", "messageService"];


    constructor(private movieStore: ngRedux.INgRedux,
                private movieActions: IMovieActions,
                private movieService: IMovieService,
                private messageService: IMessageService){


        this.movieStore.subscribe( () => {
            this.state = this.movieStore.getState();
            this.bestSellingMovie = this.state.BestSellingMovie;
        })

        this.movieStore.dispatch(
            this.movieActions.GetBestSellingMovieCreator()
        );

        this.bestReviewedMovie = this.movieService.getBestReviewed(this.state.Movies);
        this.movieService = this.movieService;
        this.headerObservable = this.messageService.subscribe();
        this.headerObservable.subscribe((evt) => this.subscriptionHandler(evt));
        
    } 
  
    protected subscriptionHandler(evt: E.EventType){
        if(evt === E.EventType.review){
             this.bestReviewedMovie = this.movieService.getBestReviewed(this.state.Movies);
        }

    }


}

app.controller('headerCtrl', HeaderCtrl);
