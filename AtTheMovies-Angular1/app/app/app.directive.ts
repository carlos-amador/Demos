import { app } from '../app.module';


export class App implements ng.IDirective{
    
    public restrict: string = "E";
    public template: string = require("./app.html");
    public controller: string =  "appCtrl";
    public controllerAs: string = "vm";
    public bindToController: boolean =  true;

    constructor(){} 

    static factory(): ng.IDirectiveFactory {
        const directive = () => new App();
        return directive;
    }
   
}

app.directive('app', App.factory());

