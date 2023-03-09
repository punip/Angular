import { Component, OnInit } from '@angular/core';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  todosAdd = '';

  id = 0;
  
  isDone = false;

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  addTodos(todo : Todo){
    this.id = todo.id;
    this.todosAdd = todo.title;
    this.isDone = todo.isDone;
    this.date = todo.createdDate;
  }


}
