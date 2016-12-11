import {app} from '../app.module';
//import node = require("node");


export class MovieReviews implements ng.IDirective{

    
    public restrict: string = "E";
    public template: string = require("./movie-reviews.html");
    public controller: string =  "movieReviewsCtrl";
    public controllerAs: string = "vm";
    public bindToController: boolean =  true;

    constructor(){} 

    static factory(): ng.IDirectiveFactory {
        const directive = () => new MovieReviews();
        return directive;
    }

   
}

app.directive('moviereviews', MovieReviews.factory());

