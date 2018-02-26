import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Usuario } from '../../../shared/models';

@Component({
  selector: 'app-header-full',
  templateUrl: './header-full.component.html',
  styleUrls: ['./header-full.component.scss']
})
export class HeaderFullComponent implements OnInit {
  currentUser: Usuario;
  constructor(private translate: TranslateService, public router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd && window.innerWidth <= 992) {
        this.toggleSidebar();
      }
    });

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() { }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right');
  }
  /*
  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }
  
  changeLang(language: string) {
      this.translate.use(language);
  }
  */
}
