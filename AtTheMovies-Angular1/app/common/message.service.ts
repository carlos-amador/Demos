
import rxjs = require("rxjs");
import { app } from '../app.module';
import * as cmn from "../common/index"


export interface IMessageService{
    publish(event: cmn.EventType): void;
    subscribe(): rxjs.Observable<any>;
    event: cmn.EventType;
}


export class MessageService implements IMessageService {
    
    private message : rxjs.Subject<any>;
    private subscribers: Array<Function>;
    public event: cmn.EventType;

    constructor(){
        this.subscribers = [];
        this.message = new rxjs.Subject<any>();
    } 

    public publish(event: cmn.EventType){
        this.message.next(event);
    }

    public subscribe(): rxjs.Observable<any>{
        return this.message.asObservable()
    }


}

app.service('messageService', MessageService);

