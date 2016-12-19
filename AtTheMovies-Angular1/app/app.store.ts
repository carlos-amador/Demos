import {app} from "./app.module";
import * as ngRedux from "ng-redux";
import {MoviesReducer, AppState} from "./common/index";

config.$inject = ["$ngReduxProvider"];

export function config(ngReduxProvider: ngRedux.INgReduxProvider){

    ngReduxProvider.createStoreWith(MoviesReducer);

}


app.config(config);