import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BookTileComponent } from '../book-tile/book-tile.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environment';
import { BookModel } from '../models/book-model';
import { CommonModule } from '@angular/common';
import { BookPaginationDTO } from '../models/book-pagination-dto';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookTileComponent,HttpClientModule,CommonModule,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  books_data:BookPaginationDTO=new BookPaginationDTO()
  constructor(private http:HttpClient,private cookieService: CookieService,private router:Router){
    }
    ngOnInit(): void {

      this.getBooks();

    }
  checkOut(){
    
    this.router.navigate([environment.CHECKOUT_PG]);
  }
  addBook(){
    this.router.navigate([environment.ADD_EDIT_BOOK_PG])
  }
  logout(){
    this.cookieService.deleteAll()
    this.router.navigate([environment.LOGIN_PG])
    }
    profile(){
      this.router.navigate([environment.PROFILE_PG])
    }
    getBooks() {
      this.http.get<BookPaginationDTO>(environment.base_url+'/book').subscribe(data=>{
        this.books_data=data
        console.log(this.books_data)
      })
    }
}
