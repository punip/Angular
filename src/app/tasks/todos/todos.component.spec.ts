import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CommonUtilitiesModule } from 'src/app/common-utilities/common-utilities.module';
import { TodosFormComponent } from '../todos-form/todos-form.component';
import { TodosListsComponent } from '../todos-lists/todos-lists.component';
import { TodosService } from '../todos.service';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  let inputField: HTMLInputElement;
  let buttonField : HTMLButtonElement;
   let actionArea : HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosComponent, TodosFormComponent, TodosListsComponent ],
      imports : [
        FormsModule,
        CommonUtilitiesModule
      ],
      providers : [TodosService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;

     const inputElement = fixture.debugElement.query(By.css('.t-newTodo'));
    // inputField = inputElement.nativeElement;

    // const buttonElement = fixture.debugElement.query(By.css('.t-save'));
    // buttonField = buttonElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {

    let actionArea = fixture.debugElement.query(By.css('.t-actionArea'));
     expect(actionArea).toBeNull();

    // inputField.value = 'go to School';
    // inputField.dispatchEvent(new Event('input'));
    // buttonField.click();

    // fixture.detectChanges();

    // actionArea = fixture.debugElement.query(By.css('.t-actionArea'));

    // expect(actionArea).toBeNull();

    // expect(component).toBeTruthy();
  });
});
