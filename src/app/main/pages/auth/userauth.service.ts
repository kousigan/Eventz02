import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthService {
  token: string;
  public user = new BehaviorSubject<string>('');
  data = this.user.asObservable();
  constructor(private router: Router, private snack: MatSnackBar) {
   }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response => {
        console.log('success!!');


      }
    )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                  this.token = firebase.auth().currentUser.email;
                  localStorage.setItem('email', this.token);
                  this.user.next(this.token);
                  this.snack.open('Hello! ' + this.token, '', {
                    duration: 4000,
                  });
                }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.snack.open('Bye! ' + this.token, '', {
      duration: 4000,
    });
    this.token = null;
    localStorage.removeItem('email');
    this.user.next('Guest');
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = localStorage.getItem('email');
          this.user.next(this.token);
        }
      );
    return this.token;
  }

  isAuthenticated() {
    // return this.token != null;
    const user = localStorage.getItem('email');
    this.token = user;
    if (user) {
      this.user.next(user);
      this.snack.open('Hello! ' + user, '', {
        duration: 4000,
      });
    } else {
      this.user.next('Guest');
      this.snack.open('Hello! ' + 'Guest', '', {
        duration: 4000,
      });
    }

  }
}
