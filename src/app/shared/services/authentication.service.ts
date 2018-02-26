import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http'
import { HttpClient2 } from './http-client.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

/*App */
import { Usuario, Sesion } from '../models';
import { GeneralProvider } from '../providers';
import { IResultado } from '..';

interface IRespuesta {
    statusCode?: string;
    mensaje?: string;
    servicioId?: string;
    servicioUrl?: string;
    metodo?: string;
    excepcion?: string;
    resultado?: Object;
}
export enum AuthState {
    LOGGED_IN,
    LOGGED_OUT,
    DETECTED
}
//30 minutos  
const SESSION_TIMEOUT = 1800000;

@Injectable()
export class AuthenticationService {
    private authState: AuthState;
    private authManager: BehaviorSubject<AuthState>;
    public authChange$: Observable<AuthState>;

    constructor(private translate: TranslateService,
        private http: HttpClient2,
        private router: Router) {

        this.authManager = new BehaviorSubject(AuthState.LOGGED_OUT);
        this.authChange$ = this.authManager.asObservable();
        this.authChange$
            .filter((authState: AuthState) => authState === AuthState.LOGGED_IN)
            .map((authState: AuthState) => Observable.timer(SESSION_TIMEOUT))
            .do(() => {
                //console.log('Actividad detectada! Session ha sido reseteado a 30 minutos')
            })
            .switch()
            .subscribe(() => {
                console.log('Tiempo expirado: Logging out')
                let snapshot = this.router.routerState.snapshot;
                if (snapshot.url.search("/login") == -1) {
                    this.router.navigate(['/login'], { queryParams: { page: snapshot.url } });
                }

            });
        //Validar F5
        let url = this.router.routerState.snapshot.url;
        if (url.search("/sesion") == -1) {
            this.detectedActivity();
        }

    }

    login(username: string, password: string): Observable<Usuario> {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
        headers = headers.append('Aplicacion', 'SEGURIDAD_WEB'); 
        let httpOptions = { headers, observe: 'response' };
        let user = new Usuario();
        user.usuarioId = 1;
        user.nombres = "demo"

        return new Observable((observer) => {    
            // observable execution
            observer.next(user)
            observer.complete()
        });
    }
    cambiarContrasenia(llaveCaducidad: string, password: string): Observable<IRespuesta> {
        return 
    }
    envio(username: string): Observable<IRespuesta> {
        return 
    }
    logout() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser != null) {
            this.http.post('/usuarios/invalidar', currentUser.usuarioId)
                .subscribe(
                    (response: Response) => {
                        let resultado = <IRespuesta>response.json();
                        let usuario = resultado.resultado;
                        if (response.ok) {
                            // Eliminar usuario del local storage para cerrar la sesión del usuario        
                            localStorage.removeItem('currentUser');
                            this.setAuthState(AuthState.LOGGED_OUT);
                            console.log(resultado.mensaje);
                        }

                    },
                    (response: Response) => {

                        let resultado: IRespuesta = {
                            statusCode: "",
                            mensaje: "",
                            servicioId: "",
                            servicioUrl: "",
                            metodo: "",
                            excepcion: "",
                            resultado: null
                        };
                        console.log(response);
                        try {
                            switch (response.status) {
                                case 404:
                                    resultado.mensaje = this.translate.instant("COMMON.mensajes.error-envio");
                                    break;
                                default:
                                    //resultado = response.json();
                                    console.log(resultado.excepcion);
                            }

                        } catch (error) {
                            resultado.mensaje = this.translate.instant("COMMON.mensajes.error-envio");
                            console.log(error);
                        }

                    }

                );
        }

    }

    private emitAuthState(): void {
        this.authManager.next(this.authState);
    }
    private setAuthState(newAuthState: AuthState): void {
        //console.log('AuthService: setAuthState: ', AuthState[newAuthState.toString()]);
        if (newAuthState != this.authState) {
            this.authState = newAuthState;
            this.emitAuthState();
        }
    }

    detectedActivity() {
        this.setAuthState(AuthState.DETECTED);
        this.setAuthState(AuthState.LOGGED_IN);
    }

}
