import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/events/home/home.component';
import { RegUserComponent } from './pages/auth/reg-user/reg-user.component';


let mainroute:Routes =[
  { path: 'home', component: HomeComponent },
  {path:'main',children:[
    { path: 'login', component: LoginComponent },
    { path: 'newuser', component: RegUserComponent },
    { path: '', component: LoginComponent  }
  ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports:[
    RouterModule.forChild(mainroute)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule{}
