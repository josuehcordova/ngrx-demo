import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Funcionalidad } from "../../models";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
    
})
export class SidebarComponent implements OnInit {
    funcionalidadesArray : Array<Funcionalidad>;
    isActive : boolean;           
    constructor(private elementRef : ElementRef, 
                private renderer : Renderer2) {        
      let currentUser  = JSON.parse(localStorage.getItem("currentUser"));        
      this.funcionalidadesArray = currentUser.funcionalidades;
    }
    
    ngOnInit() {
        //Menu SideBar Adaptable
        setTimeout(()=>{ this.onResizeWindow(); },1000);
        window.addEventListener('resize', this.onResizeWindow, false);

        this.isActive = false;
    }

    onResizeWindow(){
        var header = document.getElementsByClassName("header");
        var listgroup = document.getElementsByClassName("list-group");
        var footer = document.getElementsByClassName("footer");
        let menu = document.getElementsByClassName("sidebar");

        var tamWindow = window.innerHeight;
        var tamGrupo = header[0].clientHeight + listgroup[0].clientHeight + footer[0].clientHeight;

        if(tamGrupo>tamWindow){
            if(!/tablet/.test(menu[0].className)){
                menu[0].classList.add("tablet");
            }
        }else{
            if(/tablet/.test(menu[0].className)){
                menu[0].classList.remove("tablet");
            }
        }
    }

    onClickMenu(funcionalidadId: number) {         
        //Seleccionar
        let menu = this.elementRef.nativeElement.querySelector('#menu'+funcionalidadId+'>.list-group-item');
        let submenu = this.elementRef.nativeElement.querySelector('#menu'+funcionalidadId+'>.nested');
        
        let classNameStr = submenu.className;
        if (/expand/.test(classNameStr)){
            this.limpiarSeleccion();
        }else{
            this.limpiarSeleccion();
            this.renderer.addClass(submenu,"expand");
            this.renderer.addClass(menu,"router-link-active");
        }
    }
    
    onClickSubMenu(funcionalidadId: number){
        this.limpiarSeleccion();
        //Limpiamos la flecha del del SubMenu-Previo
        let flechas = this.elementRef.nativeElement.querySelectorAll('.show');
        for(let index=0; index < flechas.length; index++ ) {
            var element = flechas[index];
            this.renderer.removeClass(element, "show");
        }

        let flecha = this.elementRef.nativeElement.querySelector('#menu'+funcionalidadId+'>.arrow');    
        this.renderer.addClass(flecha,"show");
    }

    limpiarSeleccion(){
        //Limpiar
        let expandidos = this.elementRef.nativeElement.querySelectorAll('.expand');
        let seleccionados = this.elementRef.nativeElement.querySelectorAll('.router-link-active');
        for(let index=0; index < expandidos.length; index++ ) {
            var element = expandidos[index];
            this.renderer.removeClass(element, "expand");    
        }
        for(let index=0; index < seleccionados.length; index++ ) {
            var element = seleccionados[index];
            this.renderer.removeClass(element, "router-link-active");
        } 
    }

    
}
