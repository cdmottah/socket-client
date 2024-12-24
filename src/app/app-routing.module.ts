import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  { path: 'auth', loadComponent: () => import('./components/login/login.component').then(res => res.LoginComponent) },
  {
    path: 'home',
    canActivate:[userGuard],
    loadComponent: () => import('./components/home/home.component').then(res => res.HomeComponent)
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
