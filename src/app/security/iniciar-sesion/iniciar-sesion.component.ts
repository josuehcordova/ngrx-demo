import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { routerTransition } from '../../router.animations';
import 'rxjs/add/observable/throw';

/* Shared */
import { AuthenticationService } from '../../shared/services';
import { Usuario } from '../../shared/models';

/* Redux */
import { Store } from '@ngrx/store';
import { AppState } from './../../../redux/app.state';
import * as UsuarioActions from './../../../redux/usuario/usuario.actions';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss'],
  animations: [routerTransition()]
})
export class IniciarSesionComponent implements OnInit {

    model: any = {};
    page: string;
    mensaje: IMessage;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private store: Store<AppState>) { 

                  
    }

    ngOnInit() {    
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.page = this.route.snapshot.queryParams['page'] || '/bienvenida';

        this.iniciazalizarDatos();
    }

    iniciazalizarDatos(){
        this.mensaje = {message : "", type : "danger", isClosed:true}
    }

    onLoggedin() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                respuesta => {
                    let usuario = <Usuario>respuesta;                                                        
                    console.log(usuario);                                                          
                    this.router.navigate([".."+this.page]);
                    localStorage.setItem('isLoggedin', 'true');

                    this.store.dispatch(new UsuarioActions.SetUsuarioAction(usuario));
                },
                error => {
                    this.mensaje.message = error.mensaje;
                    this.mensaje.isClosed = false;
                    this.mensaje.type = "danger";
                }
            );
    }
}

interface IMessage {
    message: string;
    type: string;
    isClosed: boolean;
}
