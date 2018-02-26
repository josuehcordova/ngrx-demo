import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
//import { Message } from 'primeng/primeng';

@Injectable()
export class DataProvider {
    public filtro : any;
    public params : URLSearchParams;
    //public mensaje : Message;

    constructor(){
        //this.mensaje = null;
    }

    
}