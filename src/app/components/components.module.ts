import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityBoxComponent } from './quantity-box/quantity-box.component';
import { CardComponent } from './card/card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductListComponent,
    CardComponent,
    QuantityBoxComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ProductListComponent,
    CardComponent,
    QuantityBoxComponent
  ]
})
export class ComponentsModule { }
