import { Observable } from "rxjs";
import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import * as I from "../common/movie.interfaces";
import * as E from "../common/movie.enums"
import { MovieActions } from "../common/movie.actions";
import { MovieService } from "../common/movie.service";
import { MessageService } from "../common/message.service";
//import { EventType, IMovieActions, IAppState, } from "../common/index";



@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 

    bestSellingMovie:I.IMovieData;
    bestReviewedMovie:I.IMovieData;
    movies: Array<I.IMovieData>;
    state: I.IAppState;
    headerObservable: Observable<any>;


    constructor(private movieStore: NgRedux<I.IAppState>,
                private movieActions: MovieActions,
                private movieService: MovieService,
                private messageService: MessageService){

        this.movieStore.subscribe( () => {
            this.state = this.movieStore.getState();
            this.bestSellingMovie = this.state.BestSellingMovie;
        })

        this.movieStore.dispatch(
            this.movieActions.GetBestSellingMovieCreator()
        );
       
        this.bestReviewedMovie = this.movieService.getBestReviewed(this.state.Movies);
        this.movieService = this.movieService;
        this.headerObservable = messageService.subscribe();
        this.headerObservable.subscribe((evt) => this.subscriptionHandler(evt));
        
    } 

  
    protected subscriptionHandler(evt: E.EventType){
        if(evt === E.EventType.review){
             this.bestReviewedMovie = this.movieService.getBestReviewed(this.state.Movies);
        }

    }



}
