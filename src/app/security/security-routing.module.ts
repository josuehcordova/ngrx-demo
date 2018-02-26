import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciarSesionComponent, RecuperarContraseniaComponent, CambiarContraseniaComponent } from './';

const routes: Routes = [
  { path: '', component: IniciarSesionComponent },
  { path: 'recuperar-contrasenia', component: RecuperarContraseniaComponent },
  { path: 'cambiar-contrasenia/:llave', component: CambiarContraseniaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
