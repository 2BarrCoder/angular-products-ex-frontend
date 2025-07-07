<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {

  constructor(private http: HttpClient) {

  }
  getAllproducts(): Observable<any> {
    return this.http.get("http://localhost:8089/products");
  }

  deleteProduct(product : any) : Observable<any> {
        return this.http.delete("http://localhost:8089/products/" + product.id );
  }
}
=======
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {

  constructor(private http: HttpClient) {

  }
  getAllproducts(): Observable<any> {
    return this.http.get("http://localhost:8089/products");
  }

  deleteProduct(product : any) : Observable<any> {
        return this.http.delete("http://localhost:8089/products/" + product.id );
  }
}
>>>>>>> a226567c738cfb8c44ccf1ff26fccc2b22bbc1b2
