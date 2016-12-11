import {app} from '../app.module';


export class Header implements ng.IDirective{
    
    public restrict: string = "E";
    public template: string = require("./header.html");
    public controller: string =  "headerCtrl";
    public controllerAs: string = "vm";
    public bindToController: boolean =  true;

    constructor(){} 

    static factory(): ng.IDirectiveFactory {
        const directive = () => new Header();
        return directive;
    }
   
}

app.directive('header', Header.factory());

