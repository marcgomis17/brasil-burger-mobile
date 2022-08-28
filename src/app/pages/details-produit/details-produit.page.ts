import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private detailsProduit: DetailsProduitService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.id;
    });
    this.detailsProduit$ = this.detailsProduit.getProductDetails(this.productId);
  }

  getAmount(quantity: number) {
    if (quantity === 0) {
      this.showCounter = false;
    }
  }
}
