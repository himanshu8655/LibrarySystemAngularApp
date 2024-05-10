import { Component, Input } from '@angular/core';
import { BookModel } from '../models/book-model';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-book-tile',
  standalone: true,
  imports: [],
  templateUrl: './book-tile.component.html',
  styleUrl: './book-tile.component.css'
})
export class BookTileComponent {
  @Input() book: BookModel | null = null;
constructor(private router:Router){}
checkOut(id: string) {
  this.router.navigate(['/check-out'], { queryParams: { bookid: id } });
}
}
