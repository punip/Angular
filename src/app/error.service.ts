import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  errorMessage = '';
  showError() {
    this.errorMessage = 'Error'
  }
}
