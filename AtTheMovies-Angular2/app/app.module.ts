
import { NgModule } from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RoutingModule, RootRoutes } from './app.route.module';
import { NgReduxModule, NgRedux } from "ng2-redux";
import { AppComponent } from "./app/app.component";
import { HeaderComponent } from "./header/header.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieComponent } from "./movie/movie.component";
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { MoviePurchaseComponent } from './movie-purchase/movie-purchase.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';
import { MovieService, MessageService, MoviesReducer,
          MovieActions, AppState, IAppState} from "./common/index";
import "../styles/app.css"


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    NgReduxModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieComponent,
    MoviePurchaseComponent,
    MovieReviewComponent,
    MovieReviewsComponent
  ],
  providers: [NgRedux, MovieService, MessageService, MovieActions],
  bootstrap: [AppComponent]
})

export class AppModule { 

    constructor(ngRedux: NgRedux<IAppState>){
        ngRedux.configureStore(MoviesReducer, AppState);

    }

}
