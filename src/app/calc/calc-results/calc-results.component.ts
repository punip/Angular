import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-results',
  templateUrl: './calc-results.component.html',
  styleUrls: ['./calc-results.component.css']
})
export class CalcResultsComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Input()
  firstNo = '';

  @Input()
  secondNo = '';

  @Input()
  operatation = '+';

  @Input()
  calculate = '';

  constructor() { }

  ngOnInit(): void {
  }

}
