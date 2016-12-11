
import angular = require("angular");
//import ngRedux = require("ng-redux");
//import * as ngRedux from "ng-redux";
import "ng-redux";


export let app = angular.module("app", [
    require("angular-ui-router"),
    //require("ng-redux")
    "ngRedux"
]);

