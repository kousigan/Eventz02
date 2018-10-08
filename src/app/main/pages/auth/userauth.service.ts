import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import {  BehaviorSubject } from 'rxjs';
@Injectable()
export class AuthService {
  token: string;
  public user = new BehaviorSubject<string>('');
  data = this.user.asObservable();
  constructor(private router: Router) {
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
    this.token = null;
    localStorage.removeItem('token');
    this.user.next(this.token);
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
    this.user.next(localStorage.getItem('email'));
  }
}
