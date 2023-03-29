import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { StudentModel } from './studentdash.model';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
 formValue!:FormGroup;
 studentModelObj : StudentModel = new StudentModel();
 studentData!:any;
 showAdd!:boolean;
 showUpdate!:boolean;

  constructor(private formbuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      id:[''],
      name:[''],
      specialization:[''],
      fees:[''],
      time:[''],
    })
    this.getAllStudents()
  }
  clickAddStudents(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postStudentDetails(){
    this.studentModelObj.id = this.formValue.value.id;
    this.studentModelObj.name = this.formValue.value.name;
    this.studentModelObj.specialization = this.formValue.value.specialization;
    this.studentModelObj.fees = this.formValue.value.fees;
    this.studentModelObj.time = this.formValue.value.time;

    this.api.postStudents(this.studentModelObj).subscribe(res=>{
      console.log(res);
      alert("Doctor Record Added Successfull")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllStudents()
    },
    err=>{
      alert("Something Went Wrong,Please Check Again")
    })
  }

  getAllStudents(){
    this.api.getStudents().subscribe(res=>{
      this.studentData = res;
    })
  }

  deleteStudents(stu:any){
    this.api.deleteStudents(stu.id).subscribe(res=>{
      alert("Doctor records deleted")
      this.getAllStudents()
    })
  }
onEdit(stu:any){
  this.showAdd = false;
  this.showUpdate = true;

  this.studentModelObj.id =stu.id;
  this.formValue.controls['id'].setValue(stu.id);
  this.formValue.controls['name'].setValue(stu.name);
  this.formValue.controls['specialization'].setValue(stu.specialization);
  this.formValue.controls['fees'].setValue(stu.fees);
  this.formValue.controls['time'].setValue(stu.time);
}
updateStudentDetails(){

  this.studentModelObj.id = this.formValue.value.id;
  this.studentModelObj.name = this.formValue.value.name;
  this.studentModelObj.specialization = this.formValue.value.specialization;
  this.studentModelObj.fees = this.formValue.value.fees;
  this.studentModelObj.time = this.formValue.value.time;

  this.api.updateStudents(this.studentModelObj,this.studentModelObj.id).subscribe(res=>{
    alert("Doctor Record Update Successfull");
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllStudents()
  })

}

}
