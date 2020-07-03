import { Component } from '@angular/core';
import { MyMainService } from '../main.service';
import { MySharedService } from '../shared.service';
import { FormBuilder } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { billing } from '../_models/billing';
import { Router } from '@angular/router';

@Component({
   
    selector: 'billing',
    templateUrl: 'billing.component.html',
    styleUrls: ['billing.component.css']
})
export class BillingComponent {
    cartItems;
  product: any;
  grandtotal;
     state = ["select","Tamil nadu", "Kerala", "Andhra pradesh","Karnataka"];
     payment= ["select","COD", "UPI"];
     model= new billing("","","","","","","",this.state[0],"",this.payment[0]);
     //details = new companyInfo('Auto Connect','715 Fake Street','Chennai','600034','autoconnect@connect.net', '+9243567-8679');
     constructor(
        private router: Router,
        private myMainService: MyMainService,
      private mySharedService: MySharedService,
      )
      {}
      ngOnInit(){
      this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
      this.grandtotal = this.mySharedService.getTotalPrice();}
     onSubmit() { 
       console.log(this.model);
        localStorage.setItem('billing',JSON.stringify(this.model));
        this.router.navigateByUrl('/billing', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/checkout']);
        }); 
    }
}
