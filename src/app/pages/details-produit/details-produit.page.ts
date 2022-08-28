import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/models/produit';
import { CartService } from 'src/app/services/cart.service';
import { DetailsProduitService } from 'src/app/services/details-produit.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.page.html',
  styleUrls: ['./details-produit.page.scss'],
})
export class DetailsProduitPage implements OnInit {
  detailsProduit$: Observable<any> = new Observable<any>();
  productId = 0;
  showCounter = false;
  produit: Produit;

  constructor(private detailsProduit: DetailsProduitService, private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.id;
    });
    this.detailsProduit$ = this.detailsProduit.getProductDetails(this.productId);
  }

  getAmount(quantity: number) {
    if (quantity === 0) {
      this.cart.removeProduct(this.produit.id);
      this.showCounter = false;
    }
    this.cart.updateAmount(this.produit.id, quantity);
  }

  addToCart() {
    this.showCounter = true;
    this.detailsProduit$.subscribe(res => {
      this.produit = res.produit;
      this.cart.addToCart(1, this.produit);
    });
  }
}
