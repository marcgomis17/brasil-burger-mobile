import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsProduitService } from 'src/app/services/details-produit.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.page.html',
  styleUrls: ['./details-produit.page.scss'],
})
export class DetailsProduitPage implements OnInit {
  detailsProduit$: Observable<any> = new Observable<any>();

  constructor(private detailsProduit: DetailsProduitService) { }

  ngOnInit() {
    this.detailsProduit$ = this.detailsProduit.getProductDetails();
  }

}
