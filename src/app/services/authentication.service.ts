import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';
import { Router, RouterModule } from '@angular/router';
import { UserModel } from '../models/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(login_model:LoginModel){
    this.http.post(environment.base_url+"/auth/login",login_model).subscribe((data)=>{
      return data;
    })  }

    register(user:UserModel){
      return this.http.post(environment.base_url+"/auth/register",user);
    }
}
