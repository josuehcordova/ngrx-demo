import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

/* Redux */
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../../../redux/app.state';

@NgModule({
  imports: [    
    SharedModule,    
    BlankPageRoutingModule
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
