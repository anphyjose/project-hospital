import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ViewdoctorComponent } from './components/viewdoctor/viewdoctor.component';
import { OurserviceComponent } from './components/ourservice/ourservice.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingsComponent } from './components/bookings/bookings.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ViewdoctorComponent,
    OurserviceComponent,
    OurteamComponent,
    BookingsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule { }
