import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { ActivatedRoute } from '@angular/router';
import * as I from "../common/movie.interfaces";
import { MovieActions } from "../common/movie.actions";


@Component({
  selector: 'movie-purchase',
  templateUrl: './movie-purchase.component.html',
  styleUrls: ['./movie-purchase.component.css']
})
export class MoviePurchaseComponent { 

    movieId: string;
    selectedMovie:I.IMovieData;
    state: I.IAppState;


    constructor(private movieStore: NgRedux<I.IAppState>,
                private movieActions: MovieActions,
                private route: ActivatedRoute,){
                    
        this.movieId =route.snapshot.params["movieId"];
        this.movieStore.subscribe( () => {
            this.state = this.movieStore.getState();
            this.selectedMovie = this.state.SelectedMovie;
        });

        this.movieStore.dispatch(
            this.movieActions.GetMovieCreator(this.movieId)
        );
    } 

    protected purchaseMovie(){
        this.movieStore.dispatch(
            this.movieActions.PurchaseMovieCreator(this.selectedMovie)
        );
        this.movieStore.dispatch(
           this.movieActions.GetBestSellingMovieCreator()
        );
    }


    
}


