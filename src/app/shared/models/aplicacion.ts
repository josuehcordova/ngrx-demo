import { Usuario } from './'

export class Aplicacion{
    //pk
    aplicacionId : number;
    //atributos
    descripcion : string;
    estado : string;
    llave : string;
    //relaciones
    listUsuarios : Usuario[];

    //metodos
    copiar(objeto : any){
        //Propios
        this.aplicacionId = objeto.aplicacionId;
        this.descripcion = objeto.descripcion;
        this.estado = objeto.estado;
        this.llave = objeto.llave;

        //Relaciones
        if(objeto.listUsuarios != null){
            let usuario : Usuario;
            this.listUsuarios = new Array();
            for (let r of objeto.listUsuarios) { 
                if(r != null){
                    usuario = new Usuario();
                    usuario.copiar(r);
                    this.listUsuarios.push(usuario);
                }
            }
        }
    }
}