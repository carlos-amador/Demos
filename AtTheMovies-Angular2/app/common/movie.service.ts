import { Injectable } from "@angular/core";
import * as I from "./movie.interfaces";

export interface IMovieService{
    getMovie(movies:Array<I.IMovieData>, movieId: string) : I.IMovieData
    addReview(movies:Array<I.IMovieData>, movieId: string, movieReview: I.IMovieReview): void
    purchaseMovie(movies:Array<I.IMovieData>, movieId:string):void;
    getBestSelling(movies:Array<I.IMovieData>): I.IMovieData
    getBestReviewed(movies:Array<I.IMovieData>) : I.IMovieData
}

@Injectable()
export class MovieService implements IMovieService {
    
    constructor(){} 

    public getMovie(movies:Array<I.IMovieData>, movieId: string) : I.IMovieData {
        let movie:I.IMovieData = movies.filter(x => x.id.toString() === movieId)[0];
        return movie;
    }

    public addReview(movies:Array<I.IMovieData>, movieId: string, movieReview: I.IMovieReview){
        let movie: I.IMovieData = movies.filter(x => x.id.toString() === movieId)[0];
        movie.reviews.push(movieReview);
        this.calculateRatings(movies, movieId);
    }

    public purchaseMovie(movies:Array<I.IMovieData>, movieId:string){
        let movie: I.IMovieData = movies.filter(x => x.id.toString() === movieId)[0];
        movie.sold += 1;
    }

    public getBestSelling(movies:Array<I.IMovieData>): I.IMovieData {
        let movie: I.IMovieData = movies.reduce((x, y) => {
            return x.sold > y.sold ? x:y; 
        });
        console.log("best selling "+ movie.title)
        return movie;
    }
  
    public getBestReviewed(movies:Array<I.IMovieData>) : I.IMovieData {
        let movie: I.IMovieData = movies.filter(x => {
            return x.reviews.length > 1
        })
        .reduce((x, y) => {
            return x.stars > y.stars ? x:y; 
        });
        console.log("best reviewed "+ movie.title)
        return movie;

    }

    protected calculateRatings(movies:Array<I.IMovieData> ,movieId: string){
        let movie:I.IMovieData = movies.filter(x => x.id.toString() === movieId)[0];
        let total:number = 0;
        movie.reviews.forEach( (x:I.IMovieReview) => { 
            total = total  + x.stars
        });
        movie.stars = Math.round(total/movie.reviews.length);
    }


}




