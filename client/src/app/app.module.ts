import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListCarComponent } from './pages/list-car/list-car.component';
import { CarComponent } from './pages/car/car.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from '../environments/environment';
import { FormLoginComponent } from './components/form-login/form-login.component'; // Correct the import path

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ListCarComponent,
    CarComponent,
    LoginComponent,
    RegisterComponent,
    MainNavbarComponent,
    FooterComponent,
    FormLoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [
    { provide: 'apiUrl', useValue: environment.apiUrl }, // Correct the providers array
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
