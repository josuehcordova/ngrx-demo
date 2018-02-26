/* Librerias */
import { NgModule } from '@angular/core';
import {  InputTextModule, ButtonModule, SplitButtonModule, DropdownModule, ListboxModule, FileUploadModule,
          DialogModule, DataTableModule, PanelModule, GrowlModule, AccordionModule, ConfirmDialogModule, BlockUIModule} from 'primeng/primeng';
/* App */
import { SharedModule, PageHeaderModule } from '../../../shared';
/* Modulo */
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent, ListadoComponent } from './';

@NgModule({
  imports: [
    SharedModule, PageHeaderModule, UsuarioRoutingModule,
    InputTextModule, ButtonModule, SplitButtonModule, DropdownModule, ListboxModule, FileUploadModule,
    DialogModule, DataTableModule, PanelModule, GrowlModule, AccordionModule, ConfirmDialogModule, BlockUIModule
  ],
  declarations: [UsuarioComponent, ListadoComponent]
})
export class UsuarioModule { }
