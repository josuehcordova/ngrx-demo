import { Usuario, Aplicacion } from './'

export class UsuarioAplicacion{
    //pk
    usuarioId : number;
    aplicacionId : number;
    //atributos
    //relaciones
    usuario : Usuario;
    aplicacion : Aplicacion;
    
    //metodos
    copiar(objeto : any){
        //Propios
        this.usuarioId = objeto.usuarioId;
        this.aplicacionId = objeto.aplicacionId;

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