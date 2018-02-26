import { DatePipe } from '@angular/common';
import { SelectItem } from 'primeng/primeng';
//import * as moment from 'moment';

export function formatDate(value, formato? : string) : string {
    if (typeof formato === "undefined") { formato = "yyyy-MM-ddTHH:mm"; }
    
    let datePipe = new DatePipe("en-US");        
    return datePipe.transform(value, formato);
        
}
/*
export function rangoFechasActual(fecha : Date, tipo : string, respuesta : string) {    
    var format = 'YYYY-MM-DD HH:mm:ss';    
    var dateMoment = moment(fecha);
    var startDate;
    var endDate;
    
    switch(tipo){
        case 'D': startDate = moment([dateMoment.year(), dateMoment.month(), dateMoment.date()]);//Dia
                  endDate = moment(startDate).endOf('day');
                  break;
        case 'M': startDate = moment([dateMoment.year(), dateMoment.month()]);//Mes
                  endDate = moment(startDate).endOf('month');
                  break;
    }

    if(respuesta == 'F'){//Formato
        return { inicio: moment(startDate).format(format), fin: moment(endDate).format(format) };
    }else{//Date
        return { inicio: startDate.toDate(), fin: endDate.toDate() };
    }
}
*/
/**
 * Fechas 
 */
/*
export function stringToDate(date : string, format : string) {
    if(date=="") return null;
    
    var dateMoment = moment(date, format);
    return dateMoment.toDate();
}
export function dateToString(date : Date, formato? : string) {
    let dateMoment = "";
    if (typeof formato === "undefined") { formato = "yyyy-MM-dd"; }
    if(date != null){
        let datePipe = new DatePipe("en-US");        
        dateMoment = datePipe.transform(date, formato);
    }
    return dateMoment;
}
*/
/**
 * Listas  
 */
export function uniqueFilter(dato, lista : Array<SelectItem>){   
    if(dato!=undefined){
        let objeto = { label: dato, value: dato };
        if(lista.findIndex(o => o.value === objeto.value) == -1){
            lista.push(objeto);
        }   
    }
}

export function uniqueFilterFull(label, value, lista : Array<SelectItem>){   
    if(label!=undefined){
        let objeto = { label: label, value: value };
        if(lista.findIndex(o => o.value === objeto.value) == -1){
            lista.push(objeto);
        }   
    }
}

/**
 * Encoding
 */
export function b64EncodeUnicode(str) : string {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode(Number('0x') + p1);
    }));
}

export function b64DecodeUnicode(str) : string{
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}