import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameGeneratorComponent } from './name-generator/name-generator.component';
// import { CalculatorComponent } from './calculator/calculator.component';
// import { CalResultsComponent } from './cal-results/cal-results.component';
// import { CalFormComponent } from './cal-form/cal-form.component';
import { TodosComponent } from './tasks/todos/todos.component';
import { TodosListsComponent } from './tasks/todos-lists/todos-lists.component';
// import { CapitalizePipe } from './capitalize.pipe';
import { TodosFormComponent } from './tasks/todos-form/todos-form.component';
import { TodosService } from './tasks/todos.service';
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';
import { CalcFormComponent } from './calc/calc-form/calc-form.component';
import {CalcResultsComponent} from './calc/calc-results/calc-results.component';
import { CalculatorComponent } from './calc/calculator/calculator.component';
import { LibMgmtModule } from './lib-mgmt/lib-mgmt.module';
import { ErrorService } from './error.service';

@NgModule({
  declarations: [
    AppComponent,
    NameGeneratorComponent,
    CalcFormComponent,
    CalcResultsComponent,
    CalculatorComponent,
    // CalculatorComponent,
    // CalcResultsComponent,
    // CalFormComponent,
    TodosComponent,
    TodosListsComponent,
    // CapitalizePipe,
    TodosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonUtilitiesModule,
    LibMgmtModule
  ],
  providers: [
    TodosService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
