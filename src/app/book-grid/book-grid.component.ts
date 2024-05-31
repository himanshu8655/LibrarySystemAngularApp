import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookModel } from '../models/book-model';
import { Router } from '@angular/router';
import { environment } from '../../../environment';

@Component({
  selector: 'app-book-grid',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-grid.component.html',
  styleUrl: './book-grid.component.css'
})
export class BookGridComponent {
@Input() book:BookModel | null = null

constructor(private router:Router){
}
checkOut(id: string) {
  this.router.navigate([environment.CHECKOUT_PG], { queryParams: { bookid: id } });
}
}
