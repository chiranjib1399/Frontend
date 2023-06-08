import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { MasterComponent } from './master.component';
import { MasterRoutingModule } from './master-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from '../auth/auth.component';


console.warn('loaded....')
@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    MasterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MasterModule { }
