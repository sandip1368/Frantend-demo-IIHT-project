import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/Entity/Flight';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  

  flightNo:number;
  flight: Flight = new Flight();
massage :any;
butDisable :boolean=true;


getFlightByFlighNo (){
  const observable =this.service.updateFlight(this.flightNo,this.flight);
  observable.subscribe(
    
    (Response:any) =>{
      console.log(Response);
      
      
    },
  function (error) {
    console.log(error);
    // alert('Something went wrong please try again!');
    alert('Succesfully Add Flight!');
  }
);
  }
  
    

  constructor(private service:UserService,private router:ActivatedRoute) { }
  
  ngOnInit(): void {

    this.router.params.subscribe(params => {
          this.flightNo = params.flightNo;
          console.log(this.flightNo);
      });


    const promise = this.service.getFlightByFlighNo( this.flightNo);
    promise.subscribe((response) => {
      console.log(response);
      this.flight = response as Flight;

     
    });
  
  }

}
