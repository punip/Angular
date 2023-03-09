import { Component, Input, OnInit } from '@angular/core';
// import { first } from 'rxjs';
// import { first, last } from 'rxjs';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.css']
})
export class NameGeneratorComponent implements OnInit {

  //state of the components

  @Input()
  firstName = '';

  @Input()
  lastName = '';

  constructor() { }

  ngOnInit(): void {
  }

  // onFirstNameChanged(firstName : string){
  //   this.firstName = firstName;
  // }

  // onLastNameChanged(lastName : string){
  //  this.lastName = lastName; 
  // }

}
