import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginModel } from '../models/login-model';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environment';
import { ResMsg } from '../models/res-msg';
import { CookieService } from 'ngx-cookie-service';
import { UserModel } from '../models/user-model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username:string=''
password:string = ''
login_model:LoginModel = new LoginModel()
constructor(private router: Router,private http:HttpClient,private cookieService: CookieService) { 
  
}

login(){
  this.http.post<UserModel>(environment.base_url+'login',this.login_model).subscribe(data=>{
    this.cookieService.set('uid', data.UID ? data.UID : '');
    this.router.navigate(['/home'])
  },err=>{
    alert("Invalid Email ID/Password")
  })
}
}
