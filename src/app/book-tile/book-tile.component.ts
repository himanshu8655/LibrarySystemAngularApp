import { Component, Input } from '@angular/core';
import { BookModel } from '../models/book-model';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';
import { environment } from '../../../environment';


@Component({
  selector: 'app-book-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-tile.component.html',
  styleUrl: './book-tile.component.css'
})
export class BookTileComponent {
  @Input() book: BookModel | null = null;
  isExpanded: boolean = false;


constructor(private router:Router){
}
checkOut(id: string) {
  this.router.navigate([environment.CHECKOUT_PG], { queryParams: { bookid: id } });
}

toggleReadMore() {
  this.isExpanded = !this.isExpanded;
}
}
