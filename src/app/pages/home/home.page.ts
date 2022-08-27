import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  catalogue$: Observable<any> = new Observable<any>();
  filterValue: string;
  hidden = false;
  showCounter = false;

  constructor(private catalogueService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
    this.filterValue = 'burgers';
    this.catalogue$ = this.catalogueService.getCatalogue();
  }

  hide() {
    this.hidden = true;
  }

  show() {
    this.hidden = false;
  }

  getFilterValue(widget: any) {
    this.filterValue = widget.target.value;
  }

  onClick() {
    this.showCounter = true;
  }

  getAmount(amount: number) {
    if (amount === 0) {
      this.showCounter = false;
    }
  }

  goTo(id: any) {
    console.log('display -details', id);
    this.router.navigate(['/details', id]);
  }
}
