import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { calInfo } from '../types/cal-info';
import { CalculatorServiceService } from '../types/calculator-service.service';
// import { calInfo } from 'src/app/types/cal-info';

const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }

  firstNo = '';

  secondNo = '';

  operatation = '+';

  calculate = '';

  defaultCalcData : calInfo | null = null;

  constructor(private calcService: CalculatorServiceService) { }

  async ngOnInit(){
    //lifecycle method
    // called only at the start when the component is mounted on the DOM

   try{
     const calcInfo: calInfo = await this.calcService.fetchDefaultCalcData();
    this.defaultCalcData = calcInfo;
    //  console.log(res);
   }catch(err){
    console.log(err);
   }

   //mounting of the component and its children does not wait for the above
   // async IO call to get over

  }

  // async ngOnInit(): Promise<void> {
  //   //lifecycle method
  //   // called only at the start when the component is mounted on the DOM

  //  await axios.get(url);

  // }

  onCalculate(data : calInfo){
     const {firstNo,secondNo,operatation,ans} = data;
     this.firstNo = firstNo.toString();
     this.secondNo = secondNo.toString();
     this.operatation = operatation;
     this.calculate = ans.toString();
     
  }

  // cal(){
  //   let ans;
  //   const iFirst = parseFloat(this.firstNo);
  //   const iSecond = parseFloat(this.secondNo);
  //   switch(this.operat){
  //     case '+' : ans = iFirst + iSecond;
  //                break;
  //     case '-' : ans = iFirst - iSecond;
  //                break;
  //     default : ans = iFirst * iSecond;     
  //   }

  //   this.calculate = ans.toString();

  //   // if(this.operat === '+'){
  //   //  ans = (parseFloat(this.firstNo)+ parseFloat(this.secondNo));
  //   //  this.calculate=ans.toString();
  //   // }else if(this.operat === '-'){
  //   //   ans = (parseFloat(this.firstNo) - parseFloat(this.secondNo));
  //   //  this.calculate=ans.toString();
  //   // }else if(this.operat === '*'){
  //   //   ans = (parseInt(this.firstNo) * parseInt(this.secondNo));
  //   //  this.calculate=ans.toString();
  //   // }
  // }

}
