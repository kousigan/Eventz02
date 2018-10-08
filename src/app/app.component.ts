import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import * as firebase from 'firebase';
import { AuthService } from './main/pages/auth/userauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eventz02';

  constructor(public snackBar: MatSnackBar, private auth: AuthService) {}

  openSnackBar(message: string, action: string) {
    const snackBarRef = this.snackBar.open('Hello !, ' + message, action, {

    });
    snackBarRef.afterDismissed().subscribe(() => {
     console.log(message + ' left.');
    });

    // snackBarRef.onAction().subscribe(() => {
    //   console.log('The snack-bar action was triggered!');
    // });
  }
  ngOnInit() {
  firebase.initializeApp({
    apiKey: 'AIzaSyD5YrGi_v5sCbUQiTuPZrP8wY6ComI5WZE',
    authDomain: 'simpledb-fc1f7.firebaseapp.com',
    databaseURL: 'https://simpledb-fc1f7.firebaseio.com',
    projectId: 'simpledb-fc1f7',
    storageBucket: 'simpledb-fc1f7.appspot.com',
    messagingSenderId: '398743346204'
  });

}

}

@Component({
  selector: 'app-snack',
  template: `<span class="example-pizza-party">
              Pizza party!!! 🍕
            </span>`
,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
