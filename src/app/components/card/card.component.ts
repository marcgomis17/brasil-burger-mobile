import { Component, OnInit, Input } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() produit: Produit;
  @Input() prix: number | undefined;
  showCounter = false;
  amount = 1;

  constructor(private cart: CartService) { }

  ngOnInit() { }

  getAmount(amount: number) {
    if (amount === 0) {
      this.showCounter = false;
      this.cart.removeProduct(this.produit.id);
    }
    this.amount = amount;
    this.cart.updateAmount(this.produit.id, amount);
  }

  addToCart() {
    this.showCounter = true;
    this.cart.addToCart(1, this.produit);
  }
}
