import { Component,OnInit } from '@angular/core';
import { MySharedService } from '../shared.service';
import { reduce } from 'rxjs/operators';
import { timer} from 'rxjs';
import { interval } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
@Component({
   
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//  greeting: Promise<number>;
products:any;
cartItems;
product: any;
grandtotal;


    constructor(
        private mySharedService: MySharedService,
        private router: Router,
      ) 
      { 
      //this.greeting=this.getdata();
      }
    ngOnInit() {
       this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
       this.grandtotal = this.mySharedService.getTotalPrice();
        }
        removeItemFromCart(productId) {
            this.mySharedService.removeProductFromCart(productId);
            this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
          }
        //   getdata() {
        //     return new Promise<number>((resolve, reject) => { 
        //      setInterval(()=>{ localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        //      this.grandtotal = this.mySharedService.getTotalPrice();},1000);
        //     })
        //  }
        
      updatecart()
      {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.grandtotal = this.mySharedService.getTotalPrice();
      }
}
