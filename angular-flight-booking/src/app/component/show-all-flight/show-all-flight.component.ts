import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/Entity/Flight';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-show-all-flight',
  templateUrl: './show-all-flight.component.html',
  styleUrls: ['./show-all-flight.component.css']
})
export class ShowAllFlightComponent implements OnInit {
  flight :Flight= new Flight();
  flights :Flight[]=[];


  
  deleteFlight(flight) {
    console.log(flight)
    const observable = this.service.removeFlight(flight);
    observable.subscribe((response: any) => {
      console.log(response);
      this.flights.slice(flight, 1);
      
    });
  }


  constructor(private service:UserService,public router:Router) { }

  ngOnInit(): void {
    const promise = this.service.getFlight();
    promise.subscribe((response) => {
      console.log(response);
      this.flights = response as Flight[];

     
    });
  }
}
