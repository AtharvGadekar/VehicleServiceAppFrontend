import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './customerpage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AddressComponent } from './address/address.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ShopComponent } from './shop/shop.component';
import { AuthGuard } from './AuthGuard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ShoppageComponent } from './shoppage/shoppage.component';
import { ShopDashboardComponent } from './shopset/shop-dashboard/shop-dashboard.component';
import { ShopAppointmentsComponent } from './shopset/shop-appointments/shop-appointments.component';
import { ShopdetailsComponent } from './shopset/shopdetails/shopdetails.component';
import { ShopvehiclesComponent } from './shopset/shopvehicles/shopvehicles.component';
import { LoginshopComponent } from './shopset/loginshop/loginshop.component';
import { RegistershopComponent } from './shopset/registershop/registershop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shopvehicles',component:ShopvehiclesComponent},
  {path:'shopdashboard',component:ShopDashboardComponent},
  {path:'shopappointment',component:ShopAppointmentsComponent},
  {path:'shopdetails',component:ShopdetailsComponent},
  {path:'customer',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'loginshop',component:LoginshopComponent},
  {path:'registershop',component:RegistershopComponent},
  {path:'appointments',component:AppointmentComponent,canActivate: [AuthGuard]},
  {path:'address',component:AddressComponent,canActivate: [AuthGuard]},
  {path:'shops',component:ShopListComponent},
  {path:'vehicles',component:VehicleComponent},
  {path:'services',component:ServiceListComponent},
  {path:'shop/:id',component:ShopComponent},
  {path:'dashboard',component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'shop',component:ShoppageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
