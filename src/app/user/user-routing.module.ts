import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.active';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
   // canActivate: [AuthActivate],
  },
  {
    path: 'register',
    component: RegisterComponent,
   // canActivate: [AuthActivate],

  },
  {
    path: 'profile',
    component: ProfileComponent,
   // canActivate: [AuthActivate],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
