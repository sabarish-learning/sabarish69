import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetails{
  
  public companyInfo : any = 
    {
      name : 'Auto Connect',
      address : '715 Fake Street',
      city: 'Chennai',
      pincode: '600034',
      email: 'autoconnect@connect.net',
      phone : '044-43232123'
    }
    
  
} 