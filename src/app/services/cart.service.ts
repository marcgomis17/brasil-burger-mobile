import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Produit } from '../models/produit';
import { ProduitCommande } from '../models/produitCommande';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  produits: ProduitCommande[] = [];

  constructor(private storage: Storage) { }

  addToCart(quantite: number, produit: Produit) {
    const produitCommande: ProduitCommande = {
      quantite,
      produit
    };
    this.produits.push(produitCommande);
    this.storage.set('produits', JSON.stringify(this.produits));
  }

  async getProducts() {
    const data = await this.storage.get('produits');
    return JSON.parse(data);
  }

  updateAmount(id: number, quantite: number) {
    this.produits.forEach(produitCommande => {
      const produit = produitCommande.produit;
      if (produit.id === id) {
        produitCommande.quantite = quantite;
      }
    });
    this.updateCart();
  }

  removeProduct(id: number) {
    this.produits.forEach(produitCommande => {
      const produit = produitCommande.produit;
      if (produit.id === id) {
        delete this.produits[this.produits.indexOf(produitCommande)];
        this.produits = this.produits.filter(el => el !== null);
      }
    });
    this.updateCart();
  }

  updateCart() {
    this.storage.set('produits', JSON.stringify(this.produits));
  }
}
