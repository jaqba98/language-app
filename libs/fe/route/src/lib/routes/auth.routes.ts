import { Routes } from '@angular/router';

import {
  ForgotPasswordComponent,
  LoginComponent,
  RegistrationComponent,
} from '@english-learning/fe-page';

export const authRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  // i am here
  // { path: 'change-password', component: ChangePasswordComponent },
];
