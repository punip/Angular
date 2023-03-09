import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/tasks/todos.service';

@Component({
  selector: 'app-todos-lists',
  templateUrl: './todos-lists.component.html',
  styleUrls: ['./todos-lists.component.css']
})
export class TodosListsComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  // private todosService : TodosService;

  // @Input()
  // todos : Todo[] = [
  //   // {
  //   //   id : 1,
  //   //   title : 'todo-1',
  //   //   isDone : false,
  //   //   createdDate : new Date()
  //   // },
  //   // // {
  //   // //   id : 2,
  //   // //   title : 'Todo-2',
  //   // //   isDone : false,
  //   // //   createdDate : new Date()
  //   // // },
  //   // {
  //   //   id : 3,
  //   //   title : 'todo-3',
  //   //   isDone : false,
  //   //   createdDate : new Date()
  //   // }
  // ];
  
  // get isButtonDisabled(){
  //   return this.todos.every(todo => !todo.isDone);
  // }
  constructor( public todosService : TodosService) {
    // this.todosService = todosService;
   }

get isCheck(){
  // if(this.todos.filter(f=> !f.isDone).length){
  //  return this.count++;
  // }
  // return this.todos.filter(todo => todo.isDone).length;
  return this.todosService.getCompletedTodos().length;
}

  


  ngOnInit(): void {
  }

  done(){
    // this.todos = this.todos.filter(todo => !todo.isDone);
    // console.log(bag);
    // const arr = this.todos.find(todo => todo.id===bag[0].id);
    // if(arr){
    //   console.log(this.todos.splice(arr.id,0));
    // }
    // this.todosService.todos = this.todosService.todos.filter(todo => !todo.isDone);
    this.todosService.removeCompletedTodos();
  }


}
