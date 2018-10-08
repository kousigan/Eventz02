import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const route: Routes = [
  {path: 'main', loadChildren: './main/main.module#MainModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
