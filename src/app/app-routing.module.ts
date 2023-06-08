import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  {path:'', redirectTo: '/auth', pathMatch:'full'},
  {path:'auth', component:AuthComponent},
  {
    path: "master",loadChildren : () => import('./master/master.module').then(mod => mod.MasterModule)
  }
  // {path: 'master', component: MasterComponent},
  // {path: 'child1', component: Child1Component},
  // {path: 'child2', component: Child2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
