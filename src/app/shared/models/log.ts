export class Log{
    //pk
    logId : number;
    
    //atributos
    usuarioId : number;
    fecha : Date;
    transaccion : string;

    //relaciones

    //metodos
    copiar(objeto : any){
        //Propios
        this.logId = objeto.logId;
        this.usuarioId = objeto.usuarioId;
        this.fecha = objeto.fecha;
        this.transaccion = objeto.transaccion;
    }
}