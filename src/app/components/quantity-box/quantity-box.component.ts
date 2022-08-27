import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-box',
  templateUrl: './quantity-box.component.html',
  styleUrls: ['./quantity-box.component.scss'],
})
export class QuantityBoxComponent implements OnInit {
  @Output() amountChanged = new EventEmitter();
  quantity = 1;

  constructor() { }

  ngOnInit() { }

  increment() {
    this.quantity += 1;
    this.amountChanged.emit(this.quantity);
  }

  decrement() {
    this.quantity -= 1;
    if (this.quantity < 0) {
      this.quantity = 0;
    }
    this.amountChanged.emit(this.quantity);
  }
}
