import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
declare var require: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  environmentName : string;  
  appVersion : string; 
  constructor() { }

  ngOnInit() {
    this.environmentName = environment.envName;
    this.appVersion = require('./../../../../../package.json').version;
    
  }

}
