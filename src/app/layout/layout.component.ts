import { Component, OnInit, HostListener, Directive, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

    constructor(public router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard/diario']);
        }
    }

    @HostListener('document:click', ['$event'])
    onClick(ev: MouseEvent) {
        // do something meaningful with it          
        this.authenticationService.detectedActivity();
    }

}
