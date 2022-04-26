import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title = 'stipe-angular';
  amount: number = 50;
  token: any;
  onCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: '<your Publishable key>',
      locale: 'auto',
      token: (token: any) => {
        this.token = `token : ${token.id}`;
      }
    });
    handler.open({
      name: 'The Code Hubs',
      description: 'How to integrate with Stripe checkout',
      amount: this.amount * 100
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}
