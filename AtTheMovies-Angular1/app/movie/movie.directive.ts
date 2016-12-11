import {app} from '../app.module';


export class Movie implements ng.IDirective{
    
    public restrict: string = "E";
    public template: string = require("./movie.html");
    public controller: string =  "movieCtrl";
    public controllerAs: string = "vm";
    public bindToController: boolean =  true;

    constructor(){} 

    static factory(): ng.IDirectiveFactory {
        const directive = () => new Movie();
        return directive;
    }
   
}

app.directive('movie', Movie.factory());

