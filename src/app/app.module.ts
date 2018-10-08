import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRouterModule } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    AppRouterModule

  ],
  exports: [
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
