import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { LibraryService } from '../library.service';



@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  
  title='';
  price=0;
  pages=0;

  @Output()
  cancel: EventEmitter<void> = new EventEmitter()


  constructor( private libraryService: LibraryService) { }

  ngOnInit(): void {
  
  }
  onSave() {
    this.libraryService.createNewBook(this.title,this.price,this.pages)
    .subscribe(book => {
      console.log('New book created', book);

      this.title='';
      this.price=0;
      this.pages=0;
    });
    
  }
  onCancel() {
    this.cancel.emit();
  }


}

