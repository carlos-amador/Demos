
import {IAction} from "../common/index";


export interface IStore{
    reducer: Function;
    state: any;
    listeners: Array<any>;
    getState():any;
    dispatch(action:IAction):any;
    subscribe(listener: Function): any;
    //initialiizeStore(storeArgs: IStoreArgs):void;
}

export interface IMovieStore extends IStore{
    initialiizeStore(storeArgs: IStoreArgs):void;
}

export interface IStoreArgs{
    reducer: Function;
    initialState: Object;
}



export class Store implements IMovieStore {
    
    reducer: Function;
    state: any;
    listeners: Array<Function>;

    
    // note - constructor should take "reducer" and "intial state"
    //        parameters
    constructor(){
        // this.reducer = storeArgs.reducer;
        // this.state = storeArgs.initialState;
        // this.listeners = [];
    } 

    public initialiizeStore(storeArgs: IStoreArgs){
        this.reducer = storeArgs.reducer;
        this.state = storeArgs.initialState;
        this.listeners = [];
    }


    public getState(){
        return this.state;        
    }

    public dispatch(action: IAction){
        this.state = this.reducer(this.state, action);
        this.listeners.forEach( listener => listener() );
    }

    public subscribe(listener: Function){
        this.listeners = [...this.listeners, listener];

    }

}



