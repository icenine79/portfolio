import { MovieService } from './modules/movies/services/movie.service';
import { NasaService } from './modules/nasa/services/nasa.service';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app-components/home/home.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './modules/material/material.module';
import { MoviesModule } from './modules/movies/movies.module';
import { NasaModule } from './modules/nasa/nasa.module';
import { NavbarComponent } from './app-components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './app-components/login/login.component';
import { RegisterComponent } from './app-components/register/register.component';
import { AuthService } from './modules/shared/services/auth.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
//import {errorInterceptor} from './modules/shared/interceptors/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShellComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgbModule,
    NasaModule,
    MoviesModule,
    HttpClientModule

  ],
  providers: [
    HttpClientModule,
    //errorInterceptor,
    NasaService,
    MovieService,
    AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
