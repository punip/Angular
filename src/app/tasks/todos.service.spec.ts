import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(() => {
    service = new TodosService();
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosService);
  });

  it('should be created for todos completed', () => {
    service.todos = [
      {
        id : 1,
        title : 'Todo-1',
        isDone : true,
        createdDate : new Date()
      },
      {
        id : 2,
        title : 'Todo-2',
        isDone : false,
        createdDate : new Date()
      },
      {
        id : 3,
        title : 'Todo-3',
        isDone : true,
        createdDate : new Date()
      }
    ];
    const completedTodos = service.getCompletedTodos();
    expect(completedTodos.length).toBe(2);
    expect(completedTodos[0].title).toBe('Todo-1');
    expect(completedTodos[1].title).toBe('Todo-3');
  });

  it('add new  todos in the test', ()=>{
    expect(service.todos.length).toBe(0);
    service.addNewTodos('Todo-1');
    service.addNewTodos('Todo-2');
    expect(service.todos.length).toBe(2);
    expect(service.todos[0].title).toBe('Todo-1');
  });

  it('To Remove the todos test case',()=>{
    service.todos = [
      {
        id:1,
        title : 'Todo-1',
        isDone : true,
        createdDate : new Date()
      },
      {
        id:2,
        title : 'Todo-2',
        isDone : false,
        createdDate : new Date()
      },
      {
        id:3,
        title : 'Todo-3',
        isDone : true,
        createdDate : new Date()
      }
    ];
    service.removeCompletedTodos();
    expect(service.todos.length).toBe(1);
    expect(service.todos[0].title).toBe('Todo-2');
  });
});
