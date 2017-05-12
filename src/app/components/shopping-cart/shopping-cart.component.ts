import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  providers: [CounterService]
})
export class ShoppingCartComponent implements OnInit {

  total;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.total = this.counterService.getTotal();
  }

}
