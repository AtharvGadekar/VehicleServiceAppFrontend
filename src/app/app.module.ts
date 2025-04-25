import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './customerpage/homepage.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AddressComponent } from './address/address.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ShoppageComponent } from './shoppage/shoppage.component';
import { ShopnavbarComponent } from './shopnavbar/shopnavbar.component';
import { ShopdetailsComponent } from './shopset/shopdetails/shopdetails.component';
import { ShopAppointmentsComponent } from './shopset/shop-appointments/shop-appointments.component';
import { ShopDashboardComponent } from './shopset/shop-dashboard/shop-dashboard.component';
import { ShopvehiclesComponent } from './shopset/shopvehicles/shopvehicles.component';
import { LoginshopComponent } from './shopset/loginshop/loginshop.component';
import { RegistershopComponent } from './shopset/registershop/registershop.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ShopListComponent,
    AddressComponent,
    AppointmentComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    VehicleComponent,
    ServiceListComponent,
    DashboardComponent,
    HomeComponent,
    ShoppageComponent,
    ShopnavbarComponent,
    ShopdetailsComponent,
    ShopAppointmentsComponent,
    ShopDashboardComponent,
    ShopvehiclesComponent,
    LoginshopComponent,
    RegistershopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
