import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {Product} from '../services/product';

@Component({
  selector: 'app-products',
  imports: [
    NgIf
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone : true
})
export class Products implements OnInit {
    products: any;

    constructor(private productService : Product ) {
      this.productService = productService;
    }

  ngOnInit(): void {
    this.getAllProducts();
     }

  getAllProducts(): void {
      this.productService.getAllproducts().subscribe({
        next : resp  => {

          console.log('Products loaded:', resp);
          this.products = resp;

        },
        error : err => {
          console.log(err);
        }
      });
  }

  handleDelete(product: any) {
    if (product && this.products) {
      const conf = confirm("Are you sure you want to delete this product?");
      if (conf) {
        this.productService.deleteProduct(product).subscribe({
          next: () => {
            this.getAllProducts();
          },
          error: (err) => {
            console.log(err);
          }
        });
        this.getAllProducts();
      }
    }
  }

}
