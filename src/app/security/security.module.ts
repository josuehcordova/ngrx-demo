import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/primeng';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';

/* Redux */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../../redux/app.state';

/* Angular Material */
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

/* Angular Bootstrap */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* App */
import { SharedModule, SeccionModule } from '../shared';
import { IniciarSesionComponent, RecuperarContraseniaComponent, CambiarContraseniaComponent} from './';

@NgModule({
  imports: [
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,
    NgbModule,
    SecurityRoutingModule, SharedModule, SeccionModule,              
    MessagesModule
  ],
  declarations: [SecurityComponent, IniciarSesionComponent, 
    RecuperarContraseniaComponent, CambiarContraseniaComponent]
})
export class SecurityModule { }
