import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { TodosListsComponent } from './todos-lists/todos-lists.component';
import { FormsModule } from '@angular/forms';
import { CalcModule } from '../calc/calc.module';



@NgModule({
  declarations: [
    TodosComponent,
    TodosFormComponent,
    TodosListsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgModule,
    CalcModule
  ]
})
export class TasksModule { }
