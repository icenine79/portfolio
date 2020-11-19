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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    NasaModule,
    MoviesModule,
    HttpClientModule

  ],
  providers: [HttpClientModule, NasaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
