import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NameGeneratorComponent } from './name-generator.component';

describe('NameGeneratorComponent', () => {
  let component: NameGeneratorComponent;
  let fixture: ComponentFixture<NameGeneratorComponent>;

  let firstNameField : HTMLInputElement;
  let lastNameField : HTMLInputElement;
  let fullNameField : HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameGeneratorComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameGeneratorComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    const firslNameElement = fixture.debugElement.query(By.css('.t-firstName'));
    firstNameField = firslNameElement.nativeElement;

    const lastNameElement = fixture.debugElement.query(By.css('.t-lastName'));
    lastNameField = lastNameElement.nativeElement;

    const fullNameElement = fixture.debugElement.query(By.css('.t-fullName'));
    fullNameField = fullNameElement.nativeElement;
    
    fixture.detectChanges();
  });

  it('should live update for full name', () => {

    firstNameField.value = 'Akshay';

    firstNameField.dispatchEvent(new Event('input'));

    // lastNameField.dispatchEvent(new Event('input'));

    lastNameField.value = 'Wankar';
    lastNameField.dispatchEvent(new Event('input'));

    // firstNameField.value = 'Akshay';


    fixture.detectChanges(); // tells angular

    expect(fullNameField.textContent).toBe(' Full Name : Akshay Wankar ');


    // expect(component).toBeTruthy();
  });
});
