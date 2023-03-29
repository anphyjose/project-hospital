import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from 'src/app/admin/booking/booking.component';
import { AdddoctorComponent } from './components/adddoctor/adddoctor.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HomeComponent } from './components/home/home.component';
import { OurserviceComponent } from './components/ourservice/ourservice.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent, children: [
    {path:'home',component:HomeComponent},
    {path:'adddoctor',component:AdddoctorComponent},
    {path:'ourservice',component:OurserviceComponent},
    {path:'ourteam',component:OurteamComponent},
    {path:'',redirectTo:'/admin/home',pathMatch:'full'},
    {path:'bookings',component:BookingsComponent}
   
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
