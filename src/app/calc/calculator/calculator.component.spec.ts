import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CalcFormComponent } from '../calc-form/calc-form.component';
import { CalcResultsComponent } from '../calc-results/calc-results.component';
import { CalculatorServiceService } from '../types/calculator-service.service';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  let firstNoElement : HTMLInputElement;
  let secondNoElement :HTMLInputElement;
  let ansElement : HTMLInputElement;
  let operationsElement : HTMLInputElement;
  let buttonElement : HTMLButtonElement;

  beforeEach(async () => {
    const mockCalculatorService = jasmine.createSpyObj('CalculatorServiceService',['fetchDefaultCalcData']);
    mockCalculatorService.fetchDefaultCalcData.and.returnValue({
      firstNo: '6',
      secondNo: '4',
      operations: '+',
      ans: '10'
    });

    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent,CalcFormComponent,CalcResultsComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        {
          provide: CalculatorServiceService,
          useValue: mockCalculatorService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach( fakeAsync(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;

    firstNoElement = fixture.debugElement.query(By.css('.t-firstNo')).nativeElement;
    secondNoElement = fixture.debugElement.query(By.css('.t-secondNo')).nativeElement;
    operationsElement = fixture.debugElement.query(By.css('.t-operations')).nativeElement;
    buttonElement = fixture.debugElement.query(By.css('.t-calculate')).nativeElement;
    ansElement = fixture.debugElement.query(By.css('.t-ans')).nativeElement;

    fixture.detectChanges();
  }));

  // it('shows default Calc Data in the form ', fakeAsync(() => {
  //   fixture.detectChanges();
  //   tick();

  //   expect(firstNoElement.value).toBe('6');
  //   expect(secondNoElement.value).toBe('4');
  //   expect(ansElement.value).toBe('10');



  // }));
});
