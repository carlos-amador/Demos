import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as I from "../common/movie.interfaces";
import * as E from "../common/movie.enums"
import { MovieActions } from "../common/movie.actions";
import { MovieService } from "../common/movie.service"
import { MessageService } from "../common/message.service"



@Component({
  selector: 'movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent { 

    movieId: string;
    selectedMovie:I.IMovieData;
    state: I.IAppState;
    movieReview : I.IMovieReview;
    starsGiven:string;


    constructor(private movieStore: NgRedux<I.IAppState>,
                private movieActions: MovieActions,
                private route: ActivatedRoute,
                private movieService: MovieService,
                private messageService: MessageService){
                    
        this.movieReview = {};
        this.movieId =route.snapshot.params["movieId"];
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
