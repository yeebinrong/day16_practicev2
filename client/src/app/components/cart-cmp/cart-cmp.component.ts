import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/app/models';

@Component({
  selector: 'app-cart-cmp',
  templateUrl: './cart-cmp.component.html',
  styleUrls: ['./cart-cmp.component.css']
})
export class CartCmpComponent {
  @Input() cart:CartItem[] = []
  @Output() cartClicked = new EventEmitter<string>();

  onClick(i) {
    this.cartClicked.next(i);
  }
}
