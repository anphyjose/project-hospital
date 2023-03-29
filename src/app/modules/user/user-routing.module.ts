import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HomeComponent } from './components/home/home.component';
import { OurserviceComponent } from './components/ourservice/ourservice.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ViewdoctorComponent } from './components/viewdoctor/viewdoctor.component';

const routes: Routes = [
  {path:'',component:UserDashboardComponent, children:[
   {path: 'home',component:HomeComponent},
   {path: 'viewdoctor',component:ViewdoctorComponent},
   {path:'ourservice',component:OurserviceComponent},
   {path:'ourteam',component:OurteamComponent},
   {path:'',redirectTo:'/user/home',pathMatch:'full'}, 
   {path:'bookings',component:BookingsComponent}
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
