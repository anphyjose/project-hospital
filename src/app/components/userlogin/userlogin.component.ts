import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  faLock=faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
   
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.userlogin(this.loginForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/user']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }


}
