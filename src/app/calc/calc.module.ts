import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcFormComponent } from './calc-form/calc-form.component';
import {CalcResultsComponent} from './calc-results/calc-results.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { CalculatorServiceService } from './types/calculator-service.service';



@NgModule({
  declarations: [
    CalcFormComponent,
    CalcResultsComponent,
    CalculatorComponent,
    NgModule
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    CalculatorServiceService
  ]
})
export class CalcModule { }
