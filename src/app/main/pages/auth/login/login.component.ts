import { Component, OnInit } from '@angular/core';
import { AuthService } from "../userauth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string; 
  password: string;
  constructor( private auth: AuthService) { }

  ngOnInit() {
  }
  login(){
    this.auth.signinUser(this.username,this.password);
  }
}
