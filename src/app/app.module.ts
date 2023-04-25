import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    LandingPageComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    LoginComponent
  ],
  imports: [
    MatCardModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
