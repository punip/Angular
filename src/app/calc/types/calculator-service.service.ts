import { Injectable } from '@angular/core';
import axios from 'axios';
import { calInfo } from './cal-info';

const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor() { }
  async fetchDefaultCalcData() {
    const response = await axios.get<calInfo>(url);
     const calcInfo: calInfo = response.data;
     return calcInfo;
  }
}
