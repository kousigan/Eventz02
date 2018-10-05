import { Component, OnInit } from '@angular/core';
import { AuthService } from "../userauth.service";

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {
  username: string; 
  password: string;
  constructor( private auth: AuthService) { }

  ngOnInit() {
  }
  register(){
    this.auth.signupUser(this.username,this.password);
  }
}
