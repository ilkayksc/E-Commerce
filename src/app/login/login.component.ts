import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { User } from './user';
import { ActivatedRoute,Router} from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = new User()

  constructor(private accountService: AccountService,private _router: Router) { }

  ngOnInit() {
  }
  deneme(){
    Swal.close();
   this._router.navigate(['products']);
   
 }
  login(form: NgForm) {
    
    this.accountService.login(this.model);
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
     html:' <a routerLink="products"  routerLinkActive="active">links</a>'
     
    })
    // <button class"btn btn-success" (click)="deneme()">Goto</button>
   
  }
  
}
