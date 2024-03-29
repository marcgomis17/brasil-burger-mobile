import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() produits: Produit[];
  @Input() display: string;
  @Input() prix: number | undefined;

  constructor() { }

  ngOnInit() { }

}
