import { Usuario, Aplicacion } from './';


export class Sesion{
    //pk
    usuarioId : number;
    aplicacionId : number;
    ipMac : string;
    //atributos
    token : string;
    fechaSesion : Date;
    //relaciones
    usuario : Usuario;
    aplicacion : Aplicacion;
    
    //Metodos
    copiar(objeto : any){
        //Propios
        this.usuarioId = objeto.usuarioId;
        this.aplicacionId = objeto.aplicacionId;
        this.ipMac = objeto.ipMac;

        //Relaciones
        if(objeto.usuario != null){
            this.usuario = new Usuario();
            this.usuario.copiar(objeto.usuario);
        }
        if(objeto.aplicacion != null){
            this.aplicacion = new Aplicacion();
            this.aplicacion.copiar(objeto.aplicacion);
        }
    }
}