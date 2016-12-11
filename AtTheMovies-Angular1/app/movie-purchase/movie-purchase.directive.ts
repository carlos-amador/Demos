import {app} from '../app.module';
//import node = require("node");


export class MoviePurchase implements ng.IDirective{

    
    public restrict: string = "E";
    public template: string = require("./movie-purchase.html");
    public controller: string =  "moviePurchaseCtrl";
    public controllerAs: string = "vm";
    public bindToController: boolean =  true;

    constructor(){} 

    static factory(): ng.IDirectiveFactory {
        const directive = () => new MoviePurchase();
        return directive;
    }

   
}

app.directive('moviepurchase', MoviePurchase.factory());

