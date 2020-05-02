import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/products';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor( private http: HttpClient) { }
  path = "http://localhost:3000/products";

  getProducts(categoryId): Observable<Product[]>{
   let newpath= this.path
   if(categoryId){
     newpath= newpath+"?categoryID="+categoryId
   }
   return this.http.get<Product[]>(newpath);
   
  }
  
  addProduct(product:Product):Observable<Product>{
    const httpOptions= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions)
  }

}
