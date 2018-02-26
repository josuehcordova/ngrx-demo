import { environment } from './../../../environments/environment';

export namespace C {    
    export const BASE: string = environment.apiUrl;
    export const LINK_CLIENTE: string = environment.clienteUrl;
    
    export namespace REGEX{
        export const SHORT_DATE : RegExp = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;// 20/12/2017
        export const LETTERS_NUMBERS : RegExp = /^[a-zA-Z0-9]*$/;// aA 1
        export const LETTERS_NUMBERS_SPACE : RegExp = /^[a-zA-Z0-9 ]*$/;// aA 1
    }
    
    export namespace COMSATELCOLORS{
        export const WHITE : string = '#FFFFFF';
        export const BLACK : string = '#000000';
        export const GRAY_SHAFT : string = '#3A3A3A';
        export const RED_MONZA : string = '#DA0209';
        export const RED_TRINIDAD : string = '#E84700';
        export const GREEN_CUCUMBER : string = '#79AD6A';
        export const BLUE_MARINE : string = '#2D4A66';
        export const YELLOW_GOLD : string = '#F7C800';

        export const GRAY_89 : string = '#E3E3E3';
    }

    export namespace CHARTCOLORS {
        export const RANDOM: string [] = ['#3366CC','#DC3912','#FF9900','#109618','#990099','#3B3EAC','#0099C6','#DD4477','#66AA00','#B82E2E','#316395','#994499','#22AA99','#AAAA11','#6633CC','#E67300','#8B0707','#329262','#5574A6','#3B3EAC'];
        export const red : string = 'rgb(255, 99, 132)';
        export const orange: string = 'rgb(255, 159, 64)';
        export const yellow: string = 'rgb(255, 205, 86)';
        export const green: string = 'rgb(75, 192, 192)';
        export const blue: string = '#3366CC';
        export const purple: string = 'rgb(153, 102, 255)';
        export const grey: string = 'rgb(201, 203, 207)';
    };

    export namespace FORMATOFECHA {
        export const DIA_SIN_CERO : string = 'd';
        export const MES_SIN_CERO : string = 'M';
        export const ANIO : string = 'yyyy';
        export const FECHA : string = 'dd/MM/yyyy';
        export const WEB : string = 'DD/MM/YYYY';
        export const SQL : string = 'YYYY-MM-DD';
    }
    
    /* ESTADOS GENERALES */
    export namespace GENERAL{
        export namespace CRUD{
            export const REGISTRAR: string = "R"; 
            export const MODIFICAR: string = "M"; 
            export const ELIMINAR: string = "E"; 
        }
        export namespace REGISTRO{
            export const ACTIVO: number = 1; 
            export const ELIMINADO: number = 2;             
            export const ELIMINADO_FISICO: number = 3;  
        }
    }

    /* ESTADOS VIAJE */
    export namespace VIAJE{
        export namespace ESTADO{
            export const PROGRAMADO: number = 1;                
            export const APT: number = 2;                
            export const EN_RUTA: number = 3;                
            export const FINALIZADO: number = 4;        
        }
        export namespace TIEMPO{
            export const A_TIEMPO: number = 1;                
            export const RIESGO: number = 2;                
            export const ATRASO: number = 3;                            
            export const REALIZADO: number = 4;  

            export namespace COLORES{
                export const A_TIEMPO: string = '#2D4A66';
                export const RIESGO: string = '#F7C800';
                export const ATRASO: string = '#E84700';
                export const REALIZADO: string = '#79AD6A';
            }
        }
        export namespace COLORES{
            export const PROGRAMADO: string = 'rgb(45, 74, 102)';
            export const RUTA: string = 'rgb(218, 2, 9)';
            export const APT: string = 'rgb(76, 76, 76)';
            export const FINALIZADO: string = 'rgb(121, 173, 106)';
        }
    }
    /* TIPOS DE EVIDENCIA  */
    export namespace EVIDENCIA{
        export namespace TIPO{
            export const TEXTO: number  = 1;                
            export const TEXTO_IMAGENES: number = 2;
        }
    }
    /* ESTADOS TAREA */
    export namespace TAREA{
        export namespace TIPO{
            export const RECOJO: number  = 0;                
            export const ENTREGA: number = 1;                
        }

        export namespace ESTADO{
            export const PENDIENTE: number  = 1;                
            export const EN_APT: number = 2;
            export const EN_RUTA: number = 3;
            export const EN_ESPERA: number = 4;
            export const EN_CLIENTE: number = 5;
            export const REALIZANDO_TAREA: number = 6;
            export const TERMINADO_TOTAL: number = 7;
            export const TERMINADO_PARCIAL: number = 8;
            export const RECHAZADO: number = 9;
            export const NO_REALIZADO: number = 10;
        }

        export namespace COLORES{
            export const PENDIENTE: string  = '#B82E2E';                
            export const EN_APT: string = '#990099';
            export const EN_RUTA: string = '#FF9900';
            export const EN_ESPERA: string = '#DD4477';
            export const EN_CLIENTE: string = '#3366CC';
            export const REALIZANDO_TAREA: string = '#AAAA11';
            export const TERMINADO_TOTAL: string = '#109618';
            export const TERMINADO_PARCIAL: string = '#22AA99';
            export const RECHAZADO: string = '#994499';
            export const NO_REALIZADO: string = '#5574A6';
        }
    }

    /* ESTADOS GUIA */
    export namespace GUIA{
        export namespace ESTADO{
            export const ENTREGA_PENDIENTE: number  = 1;                
            export const ENTREGA_TOTAL: number = 2;
            export const ENTREGA_PARCIAL: number = 3;
            export const RECHAZO_TOTAL: number = 4;
        }
    }

    /* FUNCIONALIDADES */
    export namespace FUNCIONALIDAD{
        export namespace SEGURIDAD{
            export const PERFIL : number = 4; 
            export const USUARIO : number = 5; 
            export const ACCESOS : number = 14; 
            export const SUPERVISOR : number = 33; 
            export const REPORTE_ACTIVIDAD : number = 17; 
            export const REPORTE_FUNCIONES_USADAS : number = 26; 
        }
        export namespace MANTENIMIENTO{
            export const CLIENTES : number = 16; 
            export const ALMACEN : number = 34; 
            export const EMPRESA_TRANSPORTE : number = 20; 
            export const CANAL : number = 30; 
            export const CATEGORIA : number = 31; 
            export const COMPANIA : number = 32; 
            export const ZONA_TRANSPORTE : number = 36; 
            export const MOTIVO_RECHAZO : number = 35; 
            export const CLIENTE_TRANSPORTE : number = 38; 
            export const FORMA_PAGO : number = 39; 
        }
        export namespace REPORTE{
            export const INCIDENTES : number = 21; 
            export const MOTIVO_RECHAZO : number = 22; 
            export const USO_FLOTA_PESO : number = 24; 
            export const USO_FLOTA_CAPACIDAD_CONSOLIDADO : number = 44; 
            export const ESPERA_APT : number = 27; 
            export const EFECTIVIDAD_COBRANZA : number = 28; 
            export const RECOJO : number = 29; 
            export const VIAJE : number = 37; 
            export const TAREAS : number = 41; 
            export const ON_TIME : number = 42; 
            export const ATRASOS : number = 18; 
            
        }
        export namespace PROGRAMACION{
            export const IMPORTACION_VIAJE : number = 7; 
            export const VIAJE : number = 9; 
            export const ASIGNAR_SUPERVISOR : number = 23; 
        }

        export const DASHBOARD : number = 8; 

        export namespace CONTROL{
            export const ESTADOS_VIAJE : number = 11; 
            export const INDICADORES_ESTADO : number = 12; 
            export const INDICADORES_REPARTO : number = 13; 
            export const INDICADOR_LEAD_TIME : number = 15; 
            export const REPORTE_ATRASOS : number = 18; 
            export const INDICADORES_DESPACHO : number = 19; 
            export const INGRESO_SALIDA_UNIDAD : number = 25; 
        }
    }

    /* TIPO USUARIO */
    export namespace TIPO_USUARIO{
        export const INTERNO: number  = 1;                
        export const EMPRESA_TRANSPORTE: number = 2;
        export const TRANSPORTISTA: number = 3;
        export const CLIENTE: number = 4;
    }

    /* TIPO PERFIL */
    export namespace TIPO_PERFIL{
        export const SUPER_USUARIO = 99;
    }
}
