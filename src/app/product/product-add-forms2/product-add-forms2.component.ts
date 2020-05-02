import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Product } from '../products';
import { CategoryService } from '../../service/category.service';
import { Category } from 'src/app/category/category';
import { ProductService } from 'src/app/service/product.service';
import { AlertifyService } from 'src/app/service/alertify.service';
@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProductService, AlertifyService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(
     private formBuilder: FormBuilder,
     private categoryService: CategoryService, 
     private productService: ProductService, 
     private alertifyService: AlertifyService
     ) { }


  productAddForm: FormGroup;

  product: Product = new Product();
  categories: Category[];
  createProductAddFrom() {
    this.productAddForm = this.formBuilder.group({
      name: new FormControl("",Validators.required),
      price: new FormControl("",Validators.required),
      categoryID: new FormControl("",Validators.required),
      description: new FormControl("",Validators.required),
      url: new FormControl("",Validators.required)

    });
  }

  ngOnInit() {
    this.createProductAddFrom();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }
  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value)

    }
    this.productService.addProduct(this.product).subscribe(data => {
      this.alertifyService.success(data.name + " Başarıyla Eklendi")
    });
  }

}
