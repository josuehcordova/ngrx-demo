import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsuarioComponent, ListadoComponent} from './';

const routes: Routes = [
  { path: '', 
    component: UsuarioComponent, 
    children: [  
      { path:'', component: ListadoComponent, pathMatch:'full'  }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
