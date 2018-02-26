import { UsuarioAplicacion, Aplicacion, Log, Sesion } from './';

export class Usuario {
    //pk
    usuarioId : number;
    //atributos
    usuario : string;
    contrasenia : string;
    contraseniaMaestra : string;
    nombres : string;
    correo : string;
    estado : string;
    llaveCaducidad : string;
    fechaCaducidad : Date;
    //relaciones
    listUsuarioAplicaciones : UsuarioAplicacion[];
    listAplicaciones : Aplicacion[];
    listLogs : Log[];
    listSesiones : Sesion[];

    //metodos
    copiar(objeto : any){
        //Propios
        this.usuarioId = objeto.usuarioId;
        this.usuario = objeto.usuario;
        this.contrasenia = objeto.contrasenia;
        this.contraseniaMaestra = objeto.contraseniaMaestra;
        this.nombres = objeto.nombres;
        this.correo = objeto.correo;
        this.estado = objeto.estado;
        this.llaveCaducidad = objeto.llaveCaducidad;
        this.fechaCaducidad = objeto.fechaCaducidad;
        
        //Relaciones
        if(objeto.listUsuarioAplicaciones != null){
            let usuarioAplicacion : UsuarioAplicacion;
            this.listUsuarioAplicaciones = new Array();
            for (let r of objeto.listUsuarioAplicaciones) { 
                if(r != null){
                    usuarioAplicacion = new UsuarioAplicacion();
                    usuarioAplicacion.copiar(r);
                    this.listUsuarioAplicaciones.push(usuarioAplicacion);
                }
            }
        }
        if(objeto.listAplicaciones != null){
            let aplicacion : Aplicacion;
            this.listAplicaciones = new Array();
            for (let r of objeto.listAplicaciones) { 
                if(r != null){
                    aplicacion = new Aplicacion();
                    aplicacion.copiar(r);
                    this.listAplicaciones.push(aplicacion);
                }
            }
        }
        if(objeto.listLogs != null){
            let log : Log;
            this.listLogs = new Array();
            for (let r of objeto.listLogs) { 
                if(r != null){
                    log = new Log();
                    log.copiar(r);
                    this.listLogs.push(log);
                }
            }
        }
        if(objeto.listSesiones != null){
            let sesion : Sesion;
            this.listSesiones = new Array();
            for (let r of objeto.listSesiones) { 
                if(r != null){
                    sesion = new Sesion();
                    sesion.copiar(r);
                    this.listSesiones.push(sesion);
                }
            }
        }
    }
}
