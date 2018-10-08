import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/userauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token;

  constructor( private auth: AuthService, private router: Router) {

  }


  ngOnInit() {

  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/main']);
  }

}
