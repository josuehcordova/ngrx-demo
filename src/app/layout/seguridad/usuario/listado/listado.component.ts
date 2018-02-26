import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Message, SelectItem, MenuItem, ConfirmationService } from 'primeng/primeng';

/* App */
import { C } from '../../../../shared/commons/constantes';
import { Usuario } from '../../../../shared';
import { DataProvider } from '../../../../shared';
import { ClaseGenericaDTO } from '../../../../shared';
/* Modulo */


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
  providers: [ConfirmationService]
})
export class ListadoComponent implements OnInit {
  //Variables Generales
  msgs: Message[] = [];
  logActividadId: number;
  currentUser : Usuario;
  //Variables Filtros
  formFiltros: FormGroup;
  listado: Usuario[];
  listPerfil: SelectItem[];
  superUsuario: boolean;
  //Variables Listado
  opciones: MenuItem[];
  selectedUsuario: Usuario;
  
  
  constructor(private translate: TranslateService,
    private fb: FormBuilder,
    private data: DataProvider,
    private activatedRoute: ActivatedRoute, private router: Router,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    //this.cargarFiltros();
    this.inicializarDatos();
  }

  ngOnDestroy() {
    //LogActividad
    //this.logActividadService.cerrar(this.logActividadId).subscribe();
  }

  inicializarDatos(): void {
    this.opciones = [
      {
        label: this.translate.instant("COMMON.boton.eliminar"), icon: 'fa-trash', command: () => {
          //this.onClickEliminar();
        }
      }
    ];

  }
  /*
  //Funciones Filtros
  cargarFiltros(): void {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    //this.superUsuario = this.currentUser.esSuperUsuario;

    this.formFiltros = this.fb.group({
      usuario: ['',[Validators.pattern(C.REGEX.LETTERS_NUMBERS), Validators.maxLength(50)]],
      nombre: ['', [Validators.pattern(C.REGEX.LETTERS_NUMBERS_SPACE), Validators.maxLength(50)]],
      tipoUsuarioId: 1,
      perfilId: 0
    });
    
    this.perfilService.listar().subscribe(
      data => {
        this.listPerfil = [];
        this.listPerfil.push({ label: this.translate.instant("COMMON.combo.seleccion-ninguno"), value: 0 });
        data.forEach(objeto => {
          this.listPerfil.push({ label: objeto.descripcion, value: objeto.perfilId });
        });
      }
    );
    
    //Cargar
    if (this.data.filtro != undefined) {
      this.formFiltros.setValue(this.data.filtro);
      this.onClickFiltrar();
      if (this.data.mensaje != null) {
        let mensaje = this.data.mensaje;
        this.showGrowl(mensaje.severity, mensaje.summary, mensaje.detail);
      }
    }
  }

  onClickFiltrar() {
    let form = this.formFiltros.value;
    let companiaId;
    //Enviar CompaniaId si es SuperUsuario
    if (this.superUsuario) {
      companiaId = "/0";
    }

    this.usuarioService.consultar(form, companiaId).subscribe(
      (data: Usuario[]) => {
        this.listado = data;
      }
    );
    // Guardamos Filtro
    this.data.filtro = form;
  }

  onClickLimpiar() {
    this.formFiltros.reset();
    this.formFiltros.controls.tipoUsuarioId.setValue(1);
    this.formFiltros.controls.perfilId.setValue(0);
  }

  //Funciones Listado
  exportarComoXLS() {
    let data: ClaseGenericaDTO[] = [];
    let cabecera: { [key: string]: string } = {
      usuario: this.translate.instant("MODEL.usuario.titulo"),
      nombre: this.translate.instant("MODEL.usuario.nombre"),
      correo: this.translate.instant("MODEL.usuario.correo")
    }
    this.listado.forEach(usuario => {
      let dto = new ClaseGenericaDTO();
      dto[cabecera.usuario] = usuario.usuario;
      dto[cabecera.nombre] = usuario.nombre;
      dto[cabecera.correo] = usuario.correo;

      data.push(dto);
    });
    this.excelService.exportAsExcelFile(data, this.translate.instant("WEB.seguridad.usuario.listado.archivo"));
  }
  showGrowl(severidad: string, titulo: string, detalle: string) {
    //success,info,warn,error
    this.msgs = [{ severity: severidad, summary: titulo, detail: detalle }];
  }

  onClickOpciones(usuario: Usuario) {
    this.selectedUsuario = usuario;
  }
  onClickNuevo() {
    this.router.navigate(["nuevo"], { relativeTo: this.activatedRoute });
  }
  onClickModificar(usuario: Usuario) {
    this.router.navigate([usuario.usuarioId], { relativeTo: this.activatedRoute });
  }
  onClickEliminar() {

    if(this.selectedUsuario.usuarioId != this.currentUser.usuarioId){
      this.confirmationService.confirm({
        message: this.translate.instant("WEB.seguridad.usuario.listado.mensaje-eliminar"),
        key: "eliminar-usuario",
        accept: () => {
          //Eliminamos                
          this.usuarioService.eliminar(this.selectedUsuario.usuarioId).subscribe(
            data => {
              this.onClickFiltrar();
              this.msgs = [{ severity: 'success', detail: data.mensaje }];
            },
            error => {
              this.msgs = [{ severity: 'error', detail: error.mensaje }];
            }
          );
        }
      });
    }else{
      this.msgs = [{ severity: 'error', detail: this.translate.instant("WEB.seguridad.usuario.listado.mensaje-eliminar-invalido") }];
    }

  }
  //Funciones Importar
  onClickImportar() {
    this.importarComponent.cargarImportar();
  }
  */
}
