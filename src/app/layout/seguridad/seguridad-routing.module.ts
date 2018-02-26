import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadComponent } from './index';

const routes: Routes = [
  { path: '',
    component: SeguridadComponent, 
    children: [                  
      { path: 'usuario', loadChildren:'./usuario/usuario.module#UsuarioModule' }                                                      
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SeguridadRoutingModule { }
