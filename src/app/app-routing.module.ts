import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { DishViewComponent } from './dish-view/dish-view.component';

const routes: Routes = [
  { path: '', component: LoginViewComponent },
  {path: 'view', component: DishViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }