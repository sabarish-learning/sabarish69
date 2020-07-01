import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ProductsModel{
  public data : any = [
    {
        "id": "001",
        "name": "Brake1",
        "price":1500,
        "image": "../assets/images/product-11-1.jpg",
        "description": "Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
      },
      {
        "id": "002",
        "name": "Brake2",
        "price":2000,
        "image": "../assets/images/product-2-1.jpg",
        "description": "Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
      },
      {
        "id": "003",
        "name": "Brake3",
        "price":3000,
        "image": "../assets/images/product-3-1.jpg",
        "description": "Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
      },
      {
        "id": "004",
        "name": "Brake4",
        "price":2500,
        "image": "../assets/images/product-4-1.jpg",
        "description": "Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
      },
      {
        "id": "005",
        "name": "Brake5",
        "price":900,
        "image": "../assets/images/product-5-1.jpg",
        "description": "Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
      },
      {
        "id": "006",
        "name": "Brake6",
        "price":1750,
        "image": "../assets/images/product-6-1.jpg",
        "description": "Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum."
      }
  ]
} 