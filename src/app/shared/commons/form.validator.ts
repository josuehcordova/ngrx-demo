import { AbstractControl } from '@angular/forms';

export class FormValidator {

    static sinEspacios(control : AbstractControl){
        if(control.value==null) return null;                
        if(control.value.indexOf(' ') >= 0){
            return {espacios : true};
        }

        return null;
    }
    static verificarEspacios(control : AbstractControl){
        if(control.value==null) return null;
        let primerEspacio = control.value.indexOf(' ');
        let ultimoEspacio = control.value.lastIndexOf(' ');
        if(primerEspacio == 0){
            return {sinEspacios : true};
        }

        return null;
    }

    static valorNumber(control : AbstractControl){
        if(control.value==null) return null;    
        let valor = Number(control.value);
        if(Number.isNaN(valor)){
            return { noNumero : true }
        }

        return null;
    }

    static valorNumberPositive(control : AbstractControl){
        if(control.value==null) return null;    
        let valor = Number(control.value);
        if(Number.isNaN(valor) || valor<0){
            return { noNumeroPositivo : true }
        }

        return null;
    }

    static fechaHoraMayorAFechaActual(control : AbstractControl){
        if(control.value==null) return null;    
        let valor = new Date(control.value);
        if(valor.getTime() < new Date().getTime()){
            return { fechaPasada : true }
        }

        return null;
    }

    static fechaHoraMayorA(fecha: Date) {
        return (control: AbstractControl): { [key: string]: any } => {
            if(control.value==null) return null;    
            if(fecha==null) return null;  

            let valor = control.value;                                    
            if(valor.getTime() < fecha.getTime()){
                return { fechaInvalida : true }
            }

            return null;
        };
    }

    static formatoCorreo(control: AbstractControl) {
        if(control.value==null) return null;   
        
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }

        return null;
    }

}