import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/models';

@Component({
  selector: 'app-form-cmp',
  templateUrl: './form-cmp.component.html',
  styleUrls: ['./form-cmp.component.css']
})
export class FormCmpComponent implements OnInit, OnChanges {
  @Input() item:CartItem;
  @Output() onUpdate = new EventEmitter<CartItem>();
  constructor(private fb: FormBuilder, private cartSvc: CartService) { };
  
  cartForm: FormGroup = this.createForm();
  
  ngOnInit() {
  }
  
  ngOnChanges() {
    this.cartForm = this.createForm(this.item);
  }
  
  updateCart() {
    const value = this.cartForm.value as CartItem;
    this.onUpdate.next(value);
    this.cartForm.reset();
  }

  createForm (item:CartItem = null):FormGroup {
    return this.fb.group({
      id: this.fb.control(item?.id, [ Validators.required ]),
      name: this.fb.control(item?.name, [ Validators.required ]),
      quantity: this.fb.control(item?.quantity, [ Validators.required ])
    })
  }
}
