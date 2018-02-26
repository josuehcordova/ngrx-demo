import { SelectItem } from 'primeng/primeng';

//Para los DropDown
export interface ISelectObject<T> extends SelectItem {  
  args?: T;
}

export interface IResultado {
  mensaje: string,
  excepcion: string,
  resultado: any
}

//Para los Graficos
export interface IDataBar {
  labels: Array<any>;
  datasets: Array<
    { 
      backgroundColor?:any;
      borderColor?:any,
      borderWidth?:number,
      label?: string,
      data: Array<any> 
    }>
}

export interface IDataLine{
  labels: Array<any>;
  datasets: Array<{
    label?: string
    data: Array<any>,
    backgroundColor?: string
  }>;
}

export interface IDataPie {
  labels: Array<any>;
  datasets: Array<
    {       
      data: Array<any>,
      backgroundColor?:Array<any>; 
      label?: string,
    }>
}

export interface IDataDoughnut {
  labels: Array<any>;
  datasets: Array<
    {       
      data: Array<any>,
      backgroundColor?:Array<any>; 
      label?: string,
    }>
}