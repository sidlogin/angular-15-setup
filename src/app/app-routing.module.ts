import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { LoginComponent } from './components/login/login.component'

import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: LandingPageComponent,
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: {
      role: [
        'admin', 'maanger'
      ]
    },
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'empty-route', component: EmptyRouteComponent },
  { path: '', component: LandingPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
