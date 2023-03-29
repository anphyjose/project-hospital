import { Component, OnInit } from '@angular/core';
import { Bookingmodel } from 'src/app/models/bookingmodel';

import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent implements OnInit {

  studentData!:any;

  constructor(private api:ApiService) { }

data = new  Bookingmodel()

  ngOnInit(): void {

    this.api.getDoctors().subscribe(data=>
      
      
      {
        this.studentData=data;
        console.log("hi")
        console.log(this.studentData.id)
      });
      


  }

  bookNow(booking: any) {
   
this.data.d_id=booking.id;
this.data.name=booking.name;
this.data.specialization=booking.specialization;
this.data.fees=booking.fees;
this.data.time=booking.time;
console.log("hi");
// console.log (this.data.id);

    this.api.bookingDoctor(this.data).subscribe(result=>{
      alert("booked successfylly");

    });
  }


}
