import { Routes } from '@angular/router';

import {
  ChangePasswordComponent,
  ForgotPasswordComponent,
  Http404Component,
  LoginComponent,
  RegistrationComponent,
} from '@english-learning/fe-page';

export const authRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: '**', component: Http404Component },
];
