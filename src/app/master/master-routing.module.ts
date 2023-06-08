import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { MasterComponent } from './master.component';
import { AuthGuard } from '../guards/auth.guard';
const routes: Routes = [
  {path: '', component: MasterComponent, canActivate:[AuthGuard]},
  {path: 'child1', component: Child1Component, canActivate:[AuthGuard]},
  {path: 'child2', component: Child2Component,canActivate:[AuthGuard]},
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class MasterRoutingModule{ }