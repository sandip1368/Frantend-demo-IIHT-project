import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import BookingTicket from 'src/app/Entity/BookingTicket';
import { UserService } from 'src/app/_services/user.service';
import jsPDF, { jsPDFAPI } from 'jspdf';
import { Flight } from 'src/app/Entity/Flight';


@Component({
  selector: 'app-search-pnr',
  templateUrl: './search-pnr.component.html',
  styleUrls: ['./search-pnr.component.css']
})
export class SearchPNRComponent implements OnInit {
  bookTicketpdf: BookingTicket = new BookingTicket();
  flightpdf: Flight = new Flight();
  tickets: BookingTicket[] = [];




  bookTicketpdf1: BookingTicket = new BookingTicket();
  flightpdf1: Flight = new Flight();
  tickets1: BookingTicket[] = [];

  isPnrSearch: boolean = false;
  isEmailSearch: boolean = false;
  hideContent: boolean = false;


  @ViewChild('content') content: ElementRef;

  pnrSearch() {
    const observable = this.userService.searchByPnr(this.bookTicketpdf.pnrNumber).subscribe(
      (Response: any) => {
        this.isPnrSearch = true

        console.log(Response);
        this.tickets = Response as BookingTicket[];
      },
      function (error) {
        console.log(error);

        //alert('Succesfully Search Ticket!');
      });
  }
  searchEmail() {
    const observable1 = this.userService.searchByEmail(this.bookTicketpdf.email).subscribe(
      (Response: any) => {
        this.isEmailSearch = true

        console.log(Response);
        this.tickets = Response as BookingTicket[];
      },
      function (error) {
        console.log(error);

        //alert('Succesfully Search Ticket!');
      }
    );
  }

  downloadPdf(pnrNumber) {
    console.log("-----"+pnrNumber)
    const observable = this.userService.searchByPnr(pnrNumber);
    console.log("-----"+pnrNumber)
    observable.subscribe(


      (response: any) => {
        console.log(response);

        console.log("-----"+pnrNumber)
        this.bookTicketpdf = response as BookingTicket;
        console.log(this.bookTicketpdf1.flightNo);
       
        const promise = this.userService.getFlightByFlighNo(this.bookTicketpdf.flightNo);
        promise.subscribe((response) => {
          console.log("-----"+pnrNumber)
          this.flightpdf = response as Flight;
          console.log("------" + this.flightpdf.fromPlace)
          if (this.flightpdf != null) {
            console.log(this.flightpdf)
            this.hideContent = true;
            // setTimeout(() => {
            //   this.callDownloadPdf(pnrNumber);
            //   this.hideContent = false;
            // }, 10)
          }
        }
        )
      }
    );
  }
  callDownloadPdf(pnrNumber){
        let pdf = new jsPDF('p','pt','a4');
                pdf.html(this.content.nativeElement,{
                  callback: (pdf) => {
                    pdf.save(pnrNumber+".pdf");
                  }
                });
      }


  constructor(private userService: UserService, public router: Router) { }

  ngOnInit(): void {

  }

}
