import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { SeguridadComponent } from './seguridad.component';

@NgModule({
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ],
  declarations: [SeguridadComponent]
})
export class SeguridadModule { }
