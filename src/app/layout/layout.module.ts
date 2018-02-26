import { NgModule, Directive, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
/*App*/
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SeccionModule } from '../shared';

@Directive({
    selector: 'section[menu]',
    host: {
        '(click)': 'onClick($event.target)'
    }
})
export class SectionDirective {
    
    constructor(private elementRef: ElementRef,
                private renderer: Renderer2) { }
    
    onClick(section) {
        //console.log("section", section);        
        let submenus = document.body.querySelectorAll('.expand');
        let menus= document.body.querySelectorAll('.router-link-active');
        for(let index=0; index < submenus.length; index++ ) {
            var element = submenus[index];
            this.renderer.removeClass(element, "expand");    
        }
        for(let index=0; index < menus.length; index++ ) {
            var element = menus[index];
            this.renderer.removeClass(element, "router-link-active");
        }                

    }

}
@NgModule({
    imports: [
        CommonModule, SeccionModule,      
        LayoutRoutingModule,
        TranslateModule
    ],
    declarations: [
        LayoutComponent, SectionDirective
    ],
    providers:[]
})
export class LayoutModule { }
