import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private router: Router,private cookieService:CookieService) {}
  ngOnInit(): void {
    let uid = this.cookieService.get('uid')
      this.router.navigate([uid?environment.HOME_PG:environment.LOGIN_PG]);
  }
  title = 'angular-book-app';
}
