import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AppComponent,PizzaPartyComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRouterModule } from './app.routing';

const config = {
  apiKey: "AIzaSyD5YrGi_v5sCbUQiTuPZrP8wY6ComI5WZE",
  authDomain: "simpledb-fc1f7.firebaseapp.com",
  databaseURL: "https://simpledb-fc1f7.firebaseio.com",
  projectId: "simpledb-fc1f7",
  storageBucket: "simpledb-fc1f7.appspot.com",
  messagingSenderId: "398743346204"
};

@NgModule({
  declarations: [
    AppComponent,
    PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    MainModule,
    AppRouterModule
    
  ],
  exports:[
    PizzaPartyComponent,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
