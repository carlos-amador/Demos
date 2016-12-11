import {app} from "./app.module";
import * as ngRedux from "ng-redux";
import {MoviesReducer, AppState} from "./common/index";

config.$inject = ["$ngReduxProvider"];

export function config(ngReduxProvider: ngRedux.INgReduxProvider){

    // needed to manually update ngRedux index.d.ts for this method to 
    // include initialState parameter
    ngReduxProvider.createStoreWith(MoviesReducer);


}


app.config(config);