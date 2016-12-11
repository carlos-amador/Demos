import {app} from '../app.module';
//import node = require("node");


export class MovieReview implements ng.IDirective{

    
    public restrict: string = "E";
    public template: string = require("./movie-review.html");
    public controller: string =  "movieReviewCtrl";
    public controllerAs: string = "vm";
    public bindToController: boolean =  true;

    constructor(){} 

    static factory(): ng.IDirectiveFactory {
        const directive = () => new MovieReview();
        return directive;
    }

   
}

app.directive('moviereview', MovieReview.factory());
