import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    
    { path: 'security', loadChildren: './security/security.module#SecurityModule' },    
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule'/*,
        canActivateChild: [AuthGuard]*/
    },
    //{ path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    /*
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    */
    { path: '**', redirectTo: '/security' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,  {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
