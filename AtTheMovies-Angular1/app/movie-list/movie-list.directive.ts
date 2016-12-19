import {app} from '../app.module';


export class MovieList implements ng.IDirective{
    
    public restrict: string = "E";
    public template: string = require("./movie-list.html");
    public controller: string =  "movieListCtrl";
    public controllerAs: string = "vm";
    public bindToController: boolean =  true;

    constructor(){} 

    static factory(): ng.IDirectiveFactory {
        const directive = () => new MovieList();
        return directive;
    }

   
}

app.directive('movielist', MovieList.factory());


