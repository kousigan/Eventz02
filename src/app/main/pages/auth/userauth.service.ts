import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      response =>{
        console.log('success!!');
        
        
      }
    )
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                  this.token = firebase.auth().currentUser.email
                  localStorage.setItem('email',this.token)
                }
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    localStorage.removeItem('token')
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = localStorage.getItem('email')
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
