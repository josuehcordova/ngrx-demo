import { NgModule }            from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent, HeaderComponent, SidebarComponent, HeaderFullComponent } from './';

@NgModule({  
  imports: [ CommonModule, RouterModule, TranslateModule, NgbDropdownModule.forRoot() ],
  declarations: [  FooterComponent, HeaderComponent, SidebarComponent, HeaderFullComponent ],
  exports:      [ FooterComponent, HeaderComponent, SidebarComponent, HeaderFullComponent ]
})
export class SeccionModule { }
