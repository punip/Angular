import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/tasks/todos.service';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  newTodos = '' ;

  // todoService : TodosService;

  // @Output()
  // done : EventEmitter<Todo> = new EventEmitter();

  constructor(private todosService : TodosService) { }

  ngOnInit(): void {
  }

  saveTodos(){
    // console.log(this.newTodos);
    this.todosService.addNewTodos(this.newTodos);
    this.newTodos = '';
  }

}
