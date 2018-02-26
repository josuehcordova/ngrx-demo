import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/throw';

/* Shared */
import { AuthenticationService } from '../../shared/services';
import { Usuario } from '../../shared/models';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.scss'],
  animations: [routerTransition()]

})

export class RecuperarContraseniaComponent implements OnInit {
  model: any = {};
  page: string;

  //Manejo de Mensajes
  mensaje: IMessage;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private translate: TranslateService) { }

  ngOnInit() {
    this.iniciazalizarDatos();
  }

  iniciazalizarDatos() {
    this.mensaje = { message: "", type: "", isClosed: true }
  }

  onEnvioin() {
    if (this.model.username != "") {
      this.authenticationService.envio(this.model.username)
        .subscribe(
        resultado => {
          let usuario = <Usuario>resultado.resultado;
          //Mensaje de confirmacion
          this.mensaje.message = this.translate.instant("WEB.solicitud-cambio-contraseña.mensajes.solicitud-satisfactoria");
          this.mensaje.isClosed = false;
          this.mensaje.type = "success";
          setTimeout(() => {
            this.router.navigate(["/security"]);
          }, 3000);
        },
        error => {
          this.mensaje.message = error.mensaje;
          this.mensaje.isClosed = false;
          this.mensaje.type = "danger";
        }
        );
    } else {
      this.mensaje.message = this.translate.instant("WEB.solicitud-cambio-contraseña.mensajes.usuario-vacio");
      this.mensaje.isClosed = false;
      this.mensaje.type = "danger";
    }

  }

}

interface IMessage {
  message: string;
  type: string;
  isClosed: boolean;
}