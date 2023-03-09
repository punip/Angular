import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/error.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(public errorService: ErrorService) { }

  title='';
  price='';
  pages='';

  isAddNewBookVisible = false

  ngOnInit(): void {
  }
  onToggleBookForm() {
    this.isAddNewBookVisible = !this.isAddNewBookVisible;
  }
  onSave() {
    console.log(this.title);
    console.log(this.price);
    console.log(this.pages);
  }

}