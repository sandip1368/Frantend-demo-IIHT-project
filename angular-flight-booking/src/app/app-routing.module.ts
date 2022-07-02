import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AddFlightComponent } from './component/add-flight/add-flight.component';
import { ShowAllFlightComponent } from './component/show-all-flight/show-all-flight.component';
import { UpdateComponent } from './component/update/update.component';
import { BookFlightComponent } from './component/book-flight/book-flight.component';
import { FlightSearchComponent } from './component/flight-search/flight-search.component';
import { ThankyouComponent } from './component/thankyou/thankyou.component';
import { SearchPNRComponent } from './component/search-pnr/search-pnr.component';
import { BookingHistoryComponent } from './component/booking-history/booking-history.component';

const routes: Routes = [   
    
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'board-admin', component: BoardAdminComponent },
  { path :'add-flight', component:AddFlightComponent},
  { path:'home', component:HomeComponent},
  { path:'show-all-flight', component:ShowAllFlightComponent},
 { path:'updateFlight/:flightNo',component:UpdateComponent},
 { path :'book-flight',component :BookFlightComponent},
 { path:'flight-search', component: FlightSearchComponent },
 { path :"thankyou",component:ThankyouComponent},
 { path:'search-pnr',component:SearchPNRComponent},
 {path:'booking-history',component:BookingHistoryComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
