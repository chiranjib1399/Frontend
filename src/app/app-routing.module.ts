import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
const routes: Routes = [
  {path:'', redirectTo: '/auth', pathMatch:'full'},
  {path:'auth', component:AuthComponent},
  {
    path: "master",loadChildren : () => import('./master/master.module').then(mod => mod.MasterModule), canActivate:[AuthGuard]
  },
  {path:'shared', component:SharedComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'login2',component:Login2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
