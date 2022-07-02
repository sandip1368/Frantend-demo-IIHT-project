import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

import { ProfileComponent } from './component/profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AddFlightComponent } from './component/add-flight/add-flight.component';
import { HomeComponent } from './component/home/home.component';
import { ShowAllFlightComponent } from './component/show-all-flight/show-all-flight.component';
import { UpdateComponent } from './component/update/update.component';
import { BookFlightComponent } from './component/book-flight/book-flight.component';
import { FlightSearchComponent } from './component/flight-search/flight-search.component';
import { DatePipe } from '@angular/common';
import { ThankyouComponent } from './component/thankyou/thankyou.component';
import { SearchPNRComponent } from './component/search-pnr/search-pnr.component';
import { BookingHistoryComponent } from './component/booking-history/booking-history.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddFlightComponent,
    HomeComponent,
    ShowAllFlightComponent,
    UpdateComponent,
    BookFlightComponent,
    FlightSearchComponent,
    ThankyouComponent,
    SearchPNRComponent,
    BookingHistoryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders,DatePipe,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
