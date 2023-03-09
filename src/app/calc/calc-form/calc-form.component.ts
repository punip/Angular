import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { calInfo } from '../types/cal-info';
// import { calInfo } from 'src/app/types/cal-info';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit, OnChanges {

  // constructor() { }

  // ngOnInit(): void {
  // }

   // @Input()
   firstNo = '';

   // @Input()
   secondNo = '';
 
   // @Input()
   operatation = '+';
 
   // @Input()
   ans = '';
 
   @Input()
   defaultCalcData : calInfo | null = null;
 
   constructor() { }
 
   ngOnChanges(changes: SimpleChanges): void {
     // console.log(changes);
     if(changes['defaultCalcData'] &&
         changes['defaultCalcData'].previousValue != changes['defaultCalcData'].currentValue ){
           const defaultCalcData = changes['defaultCalcData'].currentValue as calInfo;
 
           this.firstNo = defaultCalcData.firstNo.toString();
           this.secondNo = defaultCalcData.secondNo.toString();
           this.operatation = defaultCalcData.operatation;
           this.ans = defaultCalcData.ans.toString();
 
           this.calculated.emit(defaultCalcData);
         }
   }
 
   ngOnInit(): void {
   }
 
   @Output()
   calculated : EventEmitter<calInfo> = new EventEmitter();
 
   // @Input()
   cal(){
     let ans;
     const iFirst = parseFloat(this.firstNo);
     const iSecond = parseFloat(this.secondNo);
     switch(this.operatation){
       case '+' : ans = iFirst + iSecond;
                  break;
       case '-' : ans = iFirst - iSecond;
                  break;
       default : ans = iFirst * iSecond;     
     }
 
     this.ans = ans.toString();
 
     //send out the data of(firstNo, secondNo,operat,calculate) to parent class
 
     this.calculated.emit({
       firstNo : iFirst,
       secondNo : iSecond,
       operatation : this.operatation,
       ans : ans
     });
 
 
   }
 

}
