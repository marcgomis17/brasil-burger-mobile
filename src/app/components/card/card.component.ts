import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() produit: Produit;
  showCounter = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onClick() {
    this.showCounter = true;
  }

  getAmount(amount: number) {
    if (amount === 0) {
      this.showCounter = false;
    }
  }

  showDetails(id: any) {
    this.router.navigateByUrl(`details/${id}`);
  }
}