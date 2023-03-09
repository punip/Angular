import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/error.service';
import { LibraryService } from '../library.service';
import { Book } from '../types/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[]=[];
  constructor(private libraryService: LibraryService, public errorService: ErrorService) { }

  ngOnInit(): void {
    this.libraryService.fetchAllBooks().subscribe((books: Book[]) => {
      this.books = books;
    },(error) => {
      this.errorService.showError();
    });
    
  }

}
