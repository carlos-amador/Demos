import {app} from '../app.module';
//import node = require("node");


export class MovieRater implements ng.IDirective{

    
    public restrict: string = "E";
    public template: string = require("./movie-rater.html");
    public controller: string =  "movieRaterCtrl";
    public controllerAs: string = "vm";
    public bindToController: boolean =  true;

    constructor(){} 

    static factory(): ng.IDirectiveFactory {
        const directive = () => new MovieRater();
        return directive;
    }

   
}

app.directive('movierater', MovieRater.factory());

