import { Injectable } from '@angular/core';
import {Category} from '../category/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CategoryService {

  constructor( private http: HttpClient) { }
  path = "http://localhost:3000/categories";

  getCategories(): Observable<Category[]>{
   return this.http.get <Category[]>(this.path);
   
  }
}
