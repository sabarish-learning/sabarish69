import { Component,OnInit } from '@angular/core';
import { MySharedService } from '../shared.service';
import { reduce } from 'rxjs/operators';
import { timer} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
   
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
products:any;
cartItems;
product: any;
grandtotal;


    constructor(
        private mySharedService: MySharedService,
        private router: Router,
      ) { }
    ngOnInit() {
      
       this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
       this.grandtotal = this.mySharedService.getTotalPrice();
       
        }

        removeItemFromCart(productId) {
            this.mySharedService.removeProductFromCart(productId);
            this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
            
          }
       updatecart(i:any){
        
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
       
      this.grandtotal = this.mySharedService.getTotalPrice();
       }
     
        
}
