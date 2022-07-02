import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import BookingTicket from 'src/app/Entity/BookingTicket';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

ticket :BookingTicket= new BookingTicket();
tickets :BookingTicket []=[];

bookFlight(){

  const observable =this.service.bookFlight(this.ticket);
  observable.subscribe(
    
    (Response:any) =>{
      console.log(Response);
     // this.tickets.push(Response);
      
    },
  function (error) {
    console.log(error);
    // alert('Something went wrong please try again!');
    alert('Succesfully Book Flight!');
  }
);



}

  constructor(private service:UserService,public router:Router) { }

  ngOnInit(): void {

    
  }
}
