import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookingData:any

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getBooking().subscribe(data=>{

      this.bookingData=data;

    })
    
  }

}
