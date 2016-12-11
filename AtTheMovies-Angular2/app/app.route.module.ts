
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieReviewsComponent } from './movie-reviews/movie-reviews.component';
import { MoviePurchaseComponent } from './movie-purchase/movie-purchase.component';
import { MovieReviewComponent } from './movie-review/movie-review.component';




export const RootRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  { 
    path: 'movies',
    component: MovieListComponent
  },
  { 
    path: 'movie/:movieId', 
    component: MovieComponent,
    children: [
      {
        path: ''
      },
      {
        path: 'reviews/:movieId',
        component: MovieReviewsComponent
      },
      {
        path: 'purchase/:movieId',
        component: MoviePurchaseComponent
      },
      {
        path: 'review/:movieId',
        component: MovieReviewComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(RootRoutes)],
  exports: [
    RouterModule
  ],
  providers: []
})
export class RoutingModule {

}


  // { 
  //   path: 'movie/:movieId', 
  //   component: MovieComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: 
  //     },

  //     {
  //       path: 'reviews',
  //       component: MovieReviewsComponent
  //     },
  //     {
  //       path: 'purchase',
  //       component: MoviePurchaseComponent
  //     },
  //     {
  //       path: 'review',
  //       component: MovieReviewComponent
  //     }
  //   ]
  // },


  // { 
  //   path: 'movie', 
  //   children: [
  //     {
  //       path: ':movieId',
  //       children:[
  //           {
  //             path: '',
  //             component: MovieComponent
  //           },
  //           {
  //             path: 'reviews/:movieId',
  //             component: MovieReviewsComponent
  //           },
  //           {
  //             path: 'purchase',
  //             component: MoviePurchaseComponent
  //           },
  //           {
  //             path: 'review',
  //             component: MovieReviewComponent
  //           }
  //       ]
  //     }
  //   ]
  // }
