import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},

  {path:'',redirectTo:'/login',pathMatch:'full'},

  {path:'admin',
  canActivate:[AuthGuard],
  loadChildren:() => import('./modules/admin/admin.module').then((m) => m.AdminModule)},

  {path:'user',
  canActivate:[AuthGuard], 
  loadChildren: ()  => import('./modules/user/user.module').then((m) =>m.UserModule)},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
