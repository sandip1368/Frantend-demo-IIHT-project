import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Flight } from 'src/app/Entity/Flight';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

 flight : Flight = new Flight();
 flights:Flight [] = [];
  


 save()
 {
        const observable =this.service.doAdd(this.flight);
        observable.subscribe(
          
          (Response:any) =>{
            console.log(Response);
            this.flights.push(Response);
            
          },
        function (error) {
          console.log(error);
          // alert('Something went wrong please try again!');
          alert('Succesfully Add Flight!');
        }
      );
    
      }
     

  constructor(private service:UserService, public router:Router) { }

  ngOnInit(): void {
  }

}
