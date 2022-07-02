import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

const API_URL = 'http://localhost:8802/api/test/';


                  // Admin Mode
const API_URL_Add_Flight ='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/register';

const API_URL_Show_All_Flight='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/allFlight';

const API_URL_CancelFlight='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/removeFlight';

const API_URL_UpdateFlight='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/editFlight';

const API_URl_GetFlightByID='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8802/api/V1.0/flight/viewFlight';


                    // User Mode

                    const API_URL_Book_Flight='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8081/user/bookFlight';
                    const API_URL_SearchFlight='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8081/user/FindFlight';

                    const API_URL_Search_By_PNR='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8081/user/flight/ticket/';
                    const API_URL_Search_By_Email='http://ec2-34-211-143-32.us-west-2.compute.amazonaws.com:8081/user/booking/history/';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

// Admin-Mode
  public doAdd(flight:{flightNo : number,airLinename:string,fromPlace :string,toPlace:string,startDate:Date,endDate:Date
  instrument:string,businessSeat:number,nonBusinessSeat:number,ticket:number,meal:string,ways:string}){

    return this.http.post(API_URL_Add_Flight,flight);

  }
  public getFlight() {
  
  return this.http.get(API_URL_Show_All_Flight);
  }

  public removeFlight(flightNo :any){
    return this.http.delete(API_URL_CancelFlight+"/"+flightNo);
  }

  getFlightByFlighNo (flightNo){
    return this.http.get(API_URl_GetFlightByID+"/"+flightNo);
  }


  public updateFlight(flightNo,flight:{flightNo : number,airLinename:string,fromPlace :string,toPlace:string,startDate:Date,endDate:Date
    instrument:string,businessSeat:number,nonBusinessSeat:number,ticket:number,meal:string,ways:string}){
  
      return this.http.put(API_URL_UpdateFlight+"/"+flightNo,flight);
  
    }


//User_Mode


public bookFlight(bookingTicket:{ticketNo:number,pnrNumber:number,flightNo:number,email:string,noOfSeats:number,bookingData:Date,optMeal:string})
{

  return this.http.post(API_URL_Book_Flight,bookingTicket);
}

searchFlight(fromPlace, toPlace, startDate, endDate){
  return this.http.get(API_URL_SearchFlight+"/"+fromPlace+"/"+toPlace+ "/"+startDate+"/"+endDate);
}    


public searchByPnr(pnrNumber)
{
  return this.http.get(API_URL_Search_By_PNR+pnrNumber);
}

public searchByEmail(email)
{
  return this.http.get(API_URL_Search_By_Email+email);
}

}
