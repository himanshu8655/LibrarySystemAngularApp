import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookTileComponent } from '../book-tile/book-tile.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environment';
import { BookModel } from '../models/book-model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookTileComponent,HttpClientModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  books_data:BookModel[]=[]
  constructor(private http:HttpClient,private cookieService: CookieService,private router:Router){
    this.getBooks();
    }
    ngOnInit(): void {
      if(this.cookieService.get('uid') == null)
        this.router.navigate(['login'])
    }
  checkOut(){
    
    this.router.navigate(['/check-out']);
  }
  addBook(){
    this.router.navigate(['/book'])
  }
  logout(){
    this.cookieService.deleteAll()
    this.router.navigate(['/login'])
    }
    getBooks() {
      this.http.get<BookModel[]>(environment.base_url+'books').subscribe(data=>{
        this.books_data=data
        console.log(data)
      })
    }
}
