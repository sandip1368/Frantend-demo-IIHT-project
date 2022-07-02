import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import BookingTicket from 'src/app/Entity/BookingTicket';

import { Flight } from 'src/app/Entity/Flight';

import { UserService } from 'src/app/_services/user.service';



@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

// ticket :BookingTicket= new BookingTicket();
// tickets :BookingTicket []=[];

flight :Flight = new Flight();

flights :Flight []=[];
  //datepipe: any;
  formattedDeparteDate: any;
  formattedendDate: any;

  isSearchTicket=false;
  isBook: boolean = false;


  bookByTicket(){
    formattedDeparteDate: String;  

    //inside search function
    this.formattedDeparteDate = this.datepipe.transform(this.flight.startDate, 'yyyy-MM-dd');
          console.log(Date.parse(this.formattedDeparteDate));

          this.formattedendDate = this.datepipe.transform(this.flight.endDate, 'yyyy-MM-dd');
          console.log(Date.parse(this.formattedendDate));
        

const observable1 =this.servicesearch.searchFlight(this.flight.fromPlace, this.flight.toPlace,   Date.parse(this.formattedDeparteDate),Date.parse(this.formattedendDate));

observable1.subscribe(
  
(Response:any) =>{
  this.isSearchTicket=true;
    console.log(Response);
    this.flights = Response as Flight[];
  },
function (error) {
  console.log(error);
  // alert('Something went wrong please try again!');
  alert('Succesfully Search Flight!');
}
);
  }
  Booking() {
//    const observable=this.servicesearch.bookFlight(this.ticket)
//    observable._subscribe(
//      (response:any) => {
       
// this.isBook=false;

// console.log(response)
//      }
//    )
this.isSearchTicket=false;
this.isBook = true;
}



      

  constructor(private servicesearch: UserService,public router:Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

}
