
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from 'ng2-redux';
import * as I from "../common/movie.interfaces"
import {MovieActions} from "../common/movie.actions";


@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent { 

    movieId: string;
    selectedMovie:I.IMovieData;
    state: I.IAppState;

    constructor(private movieStore: NgRedux<I.IAppState>,
                private movieActions: MovieActions,
                private route: ActivatedRoute){

        this.movieId = route.snapshot.params["movieId"];
        this.movieStore.subscribe( () => {
            this.state = this.movieStore.getState();
            this.selectedMovie = this.state.SelectedMovie;
        })

        this.movieStore.dispatch(
            this.movieActions.GetMovieCreator(this.movieId)
        );
    } 

    
}
