export class Funcionalidad{
    funcionalidadId : number;
    descripcion : string;
    etiqueta : string;
    ruta: string;
    icono : string;
    
    //Relaciones
    funcionalidad : Funcionalidad;

    copiar(objeto : any){
        //Propios
        this.funcionalidadId = objeto.funcionalidadId;
        this.descripcion = objeto.descripcion;
        this.etiqueta = objeto.etiqueta;
        this.ruta = objeto.ruta;
        this.icono = objeto.icono;

        //Relaciones
        if(objeto.funcionalidad != null){
            this.funcionalidad = new Funcionalidad();
            this.funcionalidad.copiar(objeto.funcionalidad);
        }
    }
}