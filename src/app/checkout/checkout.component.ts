import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MyMainService } from '../main.service';
import { MySharedService } from '../shared.service';
import { Router } from '@angular/router';
import { CompanyDetails } from '../_models/companyInfo';
@Component({
    selector: 'checkout',
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.css']
})
export class CheckoutComponent {
    public companyDetails: any ={};
    public customerDetails: any ={};
    public invoiceDate: any = new Date();
    public invoiceNo: any = Math.floor(Math.random()*10000);
    products:any;
  cartItems;
  product: any;
  grandtotal;
   
    constructor(
      private myMainService: MyMainService,
      private mySharedService: MySharedService,
      private router: Router,
     private company:CompanyDetails,
    )
    {
  
    }
  
    ngOnInit(){
        
      this.customerDetails = JSON.parse(localStorage.getItem('billing'));
    this.companyDetails =this.company.companyInfo;
   this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
         this.grandtotal = this.mySharedService.getTotalPrice();
      
}
    clearCart(){
      this.mySharedService.emptryCart();
      this.router.navigateByUrl('/checkout', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
      }); 
    }
  
    print(){
      this.mySharedService.emptryCart();
  window.focus();
  window.print();
  }
 
}
