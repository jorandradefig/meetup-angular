import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  total = 0;

  constructor() {}

  printToConsole() {
    console.log('Service called');
  }

  addToCart() {
    this.total++;
    console.log('Total: ' + this.total);
  }

  getTotal() {
    return this.total;
  }

}
