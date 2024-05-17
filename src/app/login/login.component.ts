import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginModel } from '../models/login-model';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environment';
import { ResMsg } from '../models/res-msg';
import { CookieService } from 'ngx-cookie-service';
import { UserModel } from '../models/user-model';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:  [ AuthenticationService ]
})
export class LoginComponent implements OnInit{
login_model:LoginModel = new LoginModel()
constructor(private router: Router, private authService:AuthenticationService,private cookieService: CookieService) { 
  this.login_model.email_id='test@gmail.com'
  this.login_model.password = '123456'
}
  ngOnInit(): void {
    const token = this.cookieService.get('token')
   if (token) this.router.navigate([environment.HOME_PG])
  }

login(){
  this.authService.login(this.login_model).subscribe(isLoggedIn=>{
    if(!isLoggedIn) {
      alert("Invalid Email ID/Password")
    }
      else{
        console.log("log",this.authService.isLoggedIn())
        this.router.navigate([environment.HOME_PG])      
      }
  })
}
}
