import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../pages/auth/userauth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  token: Subscription;
  user;
  constructor(private auth: AuthService) {
    this.auth.user.subscribe(x => this.user = x);
   }

  ngOnInit() {
  }

}
