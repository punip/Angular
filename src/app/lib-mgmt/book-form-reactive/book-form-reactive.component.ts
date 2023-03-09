import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookTitleVaildator } from '../validators/book-title-validator';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent implements OnInit {

  formGroup: FormGroup

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      title: ['',[Validators.required,Validators.maxLength(10),bookTitleVaildator()]],
      price: [0],
      pages: [0,[Validators.required, Validators.min(1)]],
      authors: fb.array([])
    });
   }

  ngOnInit(): void {
  }

  get title() {
    return this.formGroup.get('title');
  }

  get authors() {
    return this.formGroup.get('authors') as FormArray
  }

  // get pages() {
  //   return this.formGroup.get('pages');
  // }

  onSave() {
    // console.log(this.formGroup)

    if(!this.formGroup.valid) {
      alert('still some errors in form .Please correct them')
    }

    const newBook = this.formGroup.value;
    console.log(newBook)
  }
  onAddAuthor() {
    this.authors.push(
      this.fb.group({
        name: [''],
        gender: ['m']
      })
    );
  }

  onRemove(i: number) {
    this.authors.removeAt(i)
  };

}
