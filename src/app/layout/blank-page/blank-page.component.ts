import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../shared/models';

import { Store } from '@ngrx/store';
import { AppState } from './../../../redux/app.state';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    usuario : Usuario;

    constructor() {
        
    }

    ngOnInit() {
    }
}
