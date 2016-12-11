
// interfaces

export interface IAction{
    type: string,
    payload: any
}

export interface IMovieData{
    id: number;
    title: string;
    image: string;
    stars: number;
    sold: number;
    brief: string;
    reviews: Array<IMovieReview>;
    summary: string;
}

export interface IMovieReview{
    summary: string;
    stars: number;
    reviewer: string;
}

export interface IAppState{
    BestSellingMovie?: IMovieData;
    SelectedMovie?: IMovieData;
    Movies: Array<IMovieData>;

}
