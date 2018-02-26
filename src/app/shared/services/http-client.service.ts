import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { TranslateService } from '@ngx-translate/core';

import { IResultado  } from '../commons';
import { C } from '../commons/index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operator/map';


@Injectable()
export class HttpClient2 {

  constructor(private translate : TranslateService,
              private httpClient: HttpClient) { }

  //Metodos Genericos
  get(url : string, httpOptions? : {}) {
    return this.httpClient.get(C.BASE + url, httpOptions);
  }

  post(url : string, data : any, httpOptions? : {}) {
    return this.httpClient.post(C.BASE + url, data, httpOptions);
  }

  patch(url : string, data : any, httpOptions? : {}) {
    return this.httpClient.patch(C.BASE + url, data, httpOptions);
  }

  put(url : string, data : any, httpOptions? : {}) {
    return this.httpClient.put(C.BASE + url, data, httpOptions);
  }

  delete(url : string, httpOptions? : {}) {
    return this.httpClient.delete(C.BASE + url, httpOptions);
  }
  
  /****************
   * METODOS FULL
   ****************/
  
  listar(url : string, httpOptions? : {}) {
    return this.get(url, httpOptions)
    .map((response : HttpResponse<any>) => {
      switch(response.status){
        case 200:
          console.log(response.body)
          return response.body
          //return response.json().resultado; 
        case 204: //No Content
          console.log(response.body); 
          //console.log(response.json()); 
          return [];                
        default : 
          console.log(response.body);
          //let json = response.json();
          //console.log(json.excepcion);
          return [];
      } 
    })
    /*
    return this.get(url, httpOptions)
    .map(response =>{
      switch(response.status){
        case 200:
          return response.json().resultado; 
        case 204: //No Content
          console.log(response.json()); 
          return [];                
        default : 
          let json = response.json();
          console.log(json.excepcion);
          return [];
      }       
    })
    .catch(error =>{
        if(error instanceof Response){
          let json = error.json();
          console.log(json); 
        }else{
          console.log(error); 
        }
                     
        return Observable.throw([]); // Observable.throw() is undefined at runtime using Webpack
    });
    */
  }
  /*
  obtener(url : string, requestOptions? : RequestOptions) {
    
    return this.get(url, requestOptions)
    .map(response =>{
      switch(response.status){
        case 200:
          return response.json().resultado;                         
        default : 
         throw(response);          
      }       
    })
    .catch(error =>{
        if(error instanceof Response){
          let json = error.json();
          console.log(json); 
        }else{
          console.log(error); 
        }
                     
        return Observable.throw([]); // Observable.throw() is undefined at runtime using Webpack
    });
  }

  consultar(url : string, data : any, requestOptions? : RequestOptions) {
    return this.post(url, data, requestOptions)
        .map( response => {
            let json = response.json();
            switch(response.status){
              case 200:
                return response.json().resultado;                                                    
              case 204: //No Content     
                return [];
              default : 
                let json = response.json();
                console.log(json.mensaje);
                return [];    
            }                                                   
        })
        .catch(error =>{
          if(error instanceof Response){
            let json = error.json();
            console.log(json); 
          }else{
            console.log(error); 
          }
                      
          return Observable.throw([]); // Observable.throw() is undefined at runtime using Webpack
      });
  }

  registrar(url : string, data : any, requestOptions? : RequestOptions){        
    return this.post(url, data, requestOptions)
      .map(response => {
          if(response.ok){                                                                      
            return response.json();                                                                               
          }else{
            console.log(response);
            return {mensaje:this.translate.instant("COMMON.mensajes.error")}
          }                                                   
      })
      .catch(response =>{
        let resultado : IResultado = {mensaje:"", excepcion:"", resultado:null};
        console.log(response);  
        try {  
          switch(response.status){
              case 0: case 404:
                  resultado.mensaje = this.translate.instant("COMMON.mensajes.error-conexion");
                  break;
              default:
                  resultado = response.json();  
                  console.log(resultado.excepcion);  
          }                                           
        } catch (error) {
          resultado.mensaje = this.translate.instant("COMMON.mensajes.error-envio");
          console.log(error);
        }
                                    
        return Observable.throw(resultado); // Observable.throw() is undefined at runtime using Webpack
      });
    
  }

  modificarParcial(url : string, data : any){        
    return this.patch(url, data)
      .map(response => {
          if(response.ok){                                                                      
            return response.json();                                                                               
          }else{
            console.log(response);
            return {mensaje:this.translate.instant("COMMON.mensajes.error")}
          }                                                   
      })
      .catch(response =>{
        let resultado : IResultado = {mensaje:"", excepcion:"", resultado:null};
        console.log(response);  
        try {  
          switch(response.status){
              case 0: case 404:
                  resultado.mensaje = this.translate.instant("COMMON.mensajes.error-conexion");
                  break;
              default:
                  resultado = response.json();  
                  console.log(resultado.excepcion);  
          }                                           
        } catch (error) {
          resultado.mensaje = this.translate.instant("COMMON.mensajes.error-envio");
          console.log(error);
        }
                                    
        return Observable.throw(resultado); // Observable.throw() is undefined at runtime using Webpack
      });
    
  }

  modificar(url : string, data : any, requestOptions? : RequestOptions){        
    return this.put(url, data, requestOptions)
      .map(response => {
          if(response.ok){                                                                      
            return response.json();                                                                               
          }else{
            console.log(response);
            return {mensaje:this.translate.instant("COMMON.mensajes.error")}
          }                                                   
      })
      .catch(response =>{
        let resultado : IResultado = {mensaje:"", excepcion:"", resultado:null};
        console.log(response);  
        try {  
          switch(response.status){
              case 0: case 404:
                  resultado.mensaje = this.translate.instant("COMMON.mensajes.error-conexion");
                  break;
              default:
                  resultado = response.json();  
                  console.log(resultado.excepcion);  
          }                                           
        } catch (error) {
          resultado.mensaje = this.translate.instant("COMMON.mensajes.error-envio");
          console.log(error);
        }
                                    
        return Observable.throw(resultado); // Observable.throw() is undefined at runtime using Webpack
      });
    
  }

  eliminar(url : string, requestOptions? : RequestOptions){        
    return this.delete(url, requestOptions)
      .map(response => {
          if(response.ok){                                                                      
            return response.json();                                                                               
          }else{
            console.log(response);
            return {mensaje:this.translate.instant("COMMON.mensajes.error")}
          }                                                   
      })
      .catch(response =>{
        let resultado : IResultado = {mensaje:"", excepcion:"", resultado:null};
        console.log(response);  
        try {  
          switch(response.status){
              case 0: case 404:
                  resultado.mensaje = this.translate.instant("COMMON.mensajes.error-conexion");
                  break;
              default:
                  resultado = response.json();  
                  console.log(resultado.excepcion);  
          }                                           
        } catch (error) {
          resultado.mensaje = this.translate.instant("COMMON.mensajes.error-envio");
          console.log(error);
        }
                                    
        return Observable.throw(resultado); // Observable.throw() is undefined at runtime using Webpack
      });
    
  }
  */
}