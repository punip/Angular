import { Injectable } from '@angular/core';
import { Todo } from './types/todo';
// import { Todo } from '../types/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  id : number = 0;

  todos : Todo[] = [];

  constructor() { }

  addNewTodos(newTodos : string){
    const todo : Todo={
      id : ++this.id,
      title : newTodos,
      isDone : false,
      createdDate : new Date()
    }
    this.todos.push(todo);
  }

  getCompletedTodos(){
    return this.todos.filter(todo => todo.isDone);
  }

  removeCompletedTodos(){
    this.todos = this.todos.filter(todo => !todo.isDone);
  }

}
