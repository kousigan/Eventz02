import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eventz02';
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    let snackBarRef = this.snackBar.open('Hello !, '+message, action, {
     
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
    apiKey: "AIzaSyD5YrGi_v5sCbUQiTuPZrP8wY6ComI5WZE",
    authDomain: "simpledb-fc1f7.firebaseapp.com",
    databaseURL: "https://simpledb-fc1f7.firebaseio.com",
    projectId: "simpledb-fc1f7",
    storageBucket: "simpledb-fc1f7.appspot.com",
    messagingSenderId: "398743346204"
  });
}
}

@Component({
  selector: 'snack-snack',
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