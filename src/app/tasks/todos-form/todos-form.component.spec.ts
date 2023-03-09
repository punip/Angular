import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TodosService } from '../todos.service';
import { TodosComponent } from '../todos/todos.component';

import { TodosFormComponent } from './todos-form.component';

describe('TodosFormComponent', () => {
  let component: TodosFormComponent;
  let fixture: ComponentFixture<TodosFormComponent>;

  let inputField : HTMLInputElement;
  let saveField : HTMLButtonElement;
  saveField : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosFormComponent, TodosComponent ],
      imports :[FormsModule],
      providers:[TodosService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosFormComponent);
    component = fixture.componentInstance;

    inputField = fixture.debugElement.query(By.css('.t-newTodos')).nativeElement;

    saveField = fixture.debugElement.query(By.css('.t-save')).nativeElement;

    fixture.detectChanges();

  });

  it('It should check the Todo-Form Input Test Case', () => {

    expect(saveField.disabled).toBeUndefined();

    // fixture.detectChanges();

    expect(inputField.value).toBe('');

    fixture.detectChanges();

    inputField.value='go to school';
    inputField.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(saveField.disabled).toBeUndefined();

    inputField.value = '';
    inputField.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(saveField.disabled).toBeUndefined();

  });

  it('updating the input value', fakeAsync ( () => {
    inputField.value='go to school';
    inputField.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();

    expect(inputField.value).toBe('go to school'); 
    fixture.detectChanges();

    // saveField.click();
    saveField.addEventListener('click', ()=>{
      inputField.value = '';
    });
    fixture.detectChanges();
    // expect(inputField.value).toBe('');
    expect(saveField.disabled).toBeUndefined();
  }));

});
