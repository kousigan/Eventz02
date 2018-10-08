import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './common/nav/nav.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/events/home/home.component';
import { AppRouterModule } from './main.routing';
import { RegUserComponent } from './pages/auth/reg-user/reg-user.component';
import { AuthService } from './pages/auth/userauth.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRouterModule
  ],
  declarations: [NavComponent, LoginComponent, HomeComponent, RegUserComponent],
  exports: [NavComponent, MaterialModule],
  providers: [AuthService]
})
export class MainModule {
  constructor(private auth: AuthService) {
    this.auth.isAuthenticated();
  }
}
