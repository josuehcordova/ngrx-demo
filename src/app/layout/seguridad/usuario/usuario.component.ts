import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../../shared';
@Component({
  selector: 'app-usuario',
  template: '<router-outlet> </router-outlet>',  
  providers: [DataProvider]
})
export class UsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
