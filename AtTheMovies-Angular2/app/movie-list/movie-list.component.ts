
import { Component } from "@angular/core";
import { NgRedux } from 'ng2-redux';
import * as I from "../common/movie.interfaces";
import { MovieActions } from "../common/movie.actions";



@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent { 

    movies : Array<I.IMovieData>;
    action : I.IAction;
    state: I.IAppState;

    constructor(private movieStore: NgRedux<I.IAppState>,
                private movieActions: MovieActions){
        
        this.movieStore.subscribe( () => {
            this.state = this.movieStore.getState();
        })
        
        this.movieStore.dispatch(
            this.movieActions.GetMoviesCreator()
        );

        this.movies = this.state.Movies;
        
    } 



    
}
