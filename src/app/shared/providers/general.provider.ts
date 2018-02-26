import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//import { Chart } from 'chart.js';
//import * as moment  from 'moment';
//import { SelectItem } from 'primeng/primeng';

import { C , ISelectObject} from '../commons';
//import { Usuario, LogActividad, Funcionalidad, LogSession } from '../../shared';


@Injectable()
export class GeneralProvider {
    public storage: any;
    
    constructor(private translate : TranslateService) {}
    /*
    getListaTipoEvidencia() : SelectItem[]{
        let listTipoMotivo : SelectItem[] = [];

        listTipoMotivo.push(
                {
                    label: this.translate.instant("COMMON.constantes.tipo-evidencia.texto"), 
                    value: C.EVIDENCIA.TIPO.TEXTO
                }, 
                {
                    label: this.translate.instant("COMMON.constantes.tipo-evidencia.texto-imagenes"), 
                    value: C.EVIDENCIA.TIPO.TEXTO_IMAGENES
                }            
        );

        return listTipoMotivo;
    }

    getListaTipoTarea() : SelectItem[]{
        let listTarea : SelectItem[] = [];

        listTarea.push(
                {
                    label: this.translate.instant("COMMON.constantes.tipo-tarea.entrega-label"), 
                    value: C.TAREA.TIPO.ENTREGA
                }, 
                {
                    label: this.translate.instant("COMMON.constantes.tipo-tarea.recojo-label"), 
                    value: C.TAREA.TIPO.RECOJO
                }            
        );

        return listTarea;
    }
    
    getListaMeses(cantidadMeses : number) : SelectItem[]{
        let listMeses : SelectItem[] = [];
        let now = moment();

        while(cantidadMeses >=1) {             
            listMeses.push(
                {
                    label: now.format("MMM YYYY"), 
                    value: now.get('year')+"-"+(now.get('month') + 1)+"-01"
                }
            );     
            now = now.subtract(1, 'M');;
            cantidadMeses--;            
        }

        return listMeses;
    }
    
    getListaEstadosViaje() : SelectItem[]{
        let listEstados : SelectItem[] = [];

        listEstados.push(
                {
                    label: this.translate.instant("COMMON.constantes.estados-viaje.programado"), 
                    value: C.VIAJE.ESTADO.PROGRAMADO
                }, 
                {
                    label: this.translate.instant("COMMON.constantes.estados-viaje.apt"), 
                    value: C.VIAJE.ESTADO.APT
                },
                {
                    label: this.translate.instant("COMMON.constantes.estados-viaje.en-ruta"), 
                    value: C.VIAJE.ESTADO.EN_RUTA
                },
                {
                    label: this.translate.instant("COMMON.constantes.estados-viaje.finalizado"), 
                    value: C.VIAJE.ESTADO.FINALIZADO
                }
        );

        return listEstados;
    }

    getListaEstadosTarea() : SelectItem[]{
        let listEstados : SelectItem[] = [];

        listEstados.push(
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.pendiente"), 
                    value: C.TAREA.ESTADO.PENDIENTE
                }, 
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.en-apt"), 
                    value: C.TAREA.ESTADO.EN_APT
                },
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.en-ruta"), 
                    value: C.TAREA.ESTADO.EN_RUTA
                },
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.en-espera"), 
                    value: C.TAREA.ESTADO.EN_ESPERA
                },
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.en-cliente"), 
                    value: C.TAREA.ESTADO.EN_CLIENTE
                }, 
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.inicio-descarga"), 
                    value: C.TAREA.ESTADO.REALIZANDO_TAREA
                },
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.terminado-total"), 
                    value: C.TAREA.ESTADO.TERMINADO_TOTAL
                },
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.terminado-parcial"), 
                    value: C.TAREA.ESTADO.TERMINADO_PARCIAL
                },
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.rechazado"), 
                    value: C.TAREA.ESTADO.RECHAZADO
                }, 
                {
                    label: this.translate.instant("COMMON.constantes.estados-tarea.no-realizado"), 
                    value: C.TAREA.ESTADO.NO_REALIZADO
                }
        );
        return listEstados;
    }

    getListaEstadosTiempo() : SelectItem[]{
        let listEstados : SelectItem[] = [];

        listEstados.push(
                {
                    label: this.translate.instant("WEB.control.estados-viaje.constantes.estado-a-tiempo"), 
                    value: C.VIAJE.TIEMPO.A_TIEMPO
                }, 
                {
                    label: this.translate.instant("WEB.control.estados-viaje.constantes.estado-riesgo"), 
                    value: C.VIAJE.TIEMPO.RIESGO
                },
                {
                    label: this.translate.instant("WEB.control.estados-viaje.constantes.estado-atraso"), 
                    value: C.VIAJE.TIEMPO.ATRASO
                },
                {
                    label: this.translate.instant("WEB.control.estados-viaje.constantes.estado-realizado"), 
                    value: C.VIAJE.TIEMPO.REALIZADO
                }
        );

        return listEstados;
    }

    getListaTipoAcceso() : SelectItem[]{
        let listAcceso : SelectItem[] = [];

        listAcceso.push(
                {
                    label: this.translate.instant("COMMON.constantes.tipo-acceso.web-label"), 
                    value: this.translate.instant("COMMON.constantes.tipo-acceso.web-value")
                }, 
                {
                    label: this.translate.instant("COMMON.constantes.tipo-acceso.movil-label"), 
                    value: this.translate.instant("COMMON.constantes.tipo-acceso.movil-value")
                }
        );

        return listAcceso;
    }
    /*
    //Plugins para Graficos
    getPluginPorcentaje() : Object{
        return {
            afterDatasetsDraw: function(chart, easing) {
                // To only draw at the end of animation, check for easing === 1
                var ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i) {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function(element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgb(0, 0, 0)';

                            var fontSize = 10;
                            var fontStyle = 'normal';
                            var fontFamily = 'Arial';
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            var dataString = dataset.data[index].toString()+" %";

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            var padding = 5;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                        });
                    }
                });
            }
        };
    }

    //Muestra el Valor y el Porcentaje ( 5 | 10%)
    getPluginHorizontalValorPorcentaje() : Object{
        return {
            afterDatasetsDraw: function(chart, easing) {
                // To only draw at the end of animation, check for easing === 1
                var ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i) {
                    // Obtenemos el valor total
                    var total = 0;
                    for(var j of dataset.data){
                        total+=j;
                    }

                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function(element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgb(0, 0, 0)';

                            var fontSize = 10;
                            var fontStyle = 'normal';
                            var fontFamily = 'Arial';
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            var valor = dataset.data[index];
                            var porcentaje = total == 0 ? 0 : Math.round(valor*100/total);//Math.round(valor*10000/total) / 100;
                            var dataString1 = valor.toString();
                            var dataString2 = porcentaje.toString()+"%";

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            var position = element.tooltipPosition();
                            ctx.fillText(dataString1+" - "+dataString2, (position.x+fontSize*2), position.y);
                        });
                    }
                });
            }
        };
    }

    //Muestra el Valor en un grafico de barras horizontal ( 5 )
    getPluginHorizontalValor() : Object{
        return {
            afterDatasetsDraw: function(chart, easing) {
                // To only draw at the end of animation, check for easing === 1
                var ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i) {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function(element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgb(0, 0, 0)';

                            var fontSize = 10;
                            var fontStyle = 'normal';
                            var fontFamily = 'Arial';
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            var valor = dataset.data[index];
                            var dataString1 = valor.toString();

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            var position = element.tooltipPosition();
                            ctx.fillText(dataString1, (position.x+fontSize), position.y);
                        });
                    }
                });
            }
        };
    }

    getPluginTopData() : Object{
        return {
            afterDatasetsDraw: function(chart, easing) {
                // To only draw at the end of animation, check for easing === 1
                var ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i) {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function(element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgb(0, 0, 0)';
                            
                            var fontSize = 10;
                            var fontStyle = 'normal';
                            var fontFamily = 'Arial';
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            var dataString = dataset.data[index].toString();

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            var padding = 5;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                        });
                    }
                });
            }
        };
    }
    */
}