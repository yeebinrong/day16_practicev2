import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  cart:CartItem[] = [];
  item:CartItem;

  constructor(private cartSvc:CartService) {}

  async ngOnInit() {
    this.cart = await this.cartSvc.getCart();
    console.info(this.cart);
  }

  async getCartClicked(id:string) {
    this.item = await this.cartSvc.getItem(id);
    console.info(this.item)
  }

  async updateCartClicked(item:CartItem) {
    await this.cartSvc.updateItem(item);
    this.cart = await this.cartSvc.getCart();
  }
}
