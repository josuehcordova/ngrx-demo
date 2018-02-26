import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'bienvenida', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'seguridad', loadChildren: './seguridad/seguridad.module#SeguridadModule' }      
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
