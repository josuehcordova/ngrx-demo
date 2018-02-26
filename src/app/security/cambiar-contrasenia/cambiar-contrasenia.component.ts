import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { TranslateService } from '@ngx-translate/core';

/*shared */
import { AuthenticationService } from '../../shared/services';

@Component({
  selector: 'app-cambiar-contrasenia',
  templateUrl: './cambiar-contrasenia.component.html',
  styleUrls: ['./cambiar-contrasenia.component.scss'],
  animations: [routerTransition()]
})
export class CambiarContraseniaComponent implements OnInit {

  model: any = {};
  page: string;
  
  //Manejo de Mensajes
  mensaje : IMessage;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private translate: TranslateService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.iniciazalizarDatos();
  }

  iniciazalizarDatos(){
    this.mensaje = {message : "", type : "danger", isClosed:true}
  }

  onChangePassword() {
    
    this.activatedRoute.params.subscribe(params => {
      //Obtenemos la llave de la caducidad de la URL
      let llaveCaducidad : string = params['llave'];

      //Validaciones
      if(llaveCaducidad != null){
        if(this.model.password==this.model.password2){
          this.authenticationService.cambiarContrasenia(llaveCaducidad, this.model.password)
          .subscribe(
            resultado => {
              this.mensaje.message = this.translate.instant("WEB.cambio-contraseña.mensajes.cambio-satisfactorio");
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
          )
        }else{
          this.mensaje.message = this.translate.instant("WEB.cambio-contraseña.mensajes.claves-no-coinciden");
          this.mensaje.isClosed = false;
          this.mensaje.type = "danger";
        }
      }
    });
  }
}

interface IMessage {
  message: string;
  type: string;
  isClosed: boolean;
}