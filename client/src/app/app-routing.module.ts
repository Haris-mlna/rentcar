import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListCarComponent } from './pages/list-car/list-car.component';
import { CarComponent } from './pages/car/car.component';

const routes: Routes = [
  {
    component : HomeComponent,
    path : ''
  },
  {
    component : DashboardComponent,
    path : 'dashboard'
  },
  {
    component : LoginComponent,
    path : 'login'
  },
  {
    component : RegisterComponent,
    path : 'register'
  },
  {
    component : ListCarComponent,
    path : 'list-car'
  },
  {
    component : CarComponent,
    path : 'list-car/car/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
