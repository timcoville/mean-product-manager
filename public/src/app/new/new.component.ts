import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product: any
  errors: any
  constructor(
    private _http: HttpService,
    private _route: Router
  ) { }

  ngOnInit() {
    this.product = {
      url: '',
      price: '',
      title: '',
    }
    this.errors = []
  }

  createProduct(){
    this._http.serviceCreateProduct(this.product)
      .subscribe(data=>{
        if(data['errors']){
          if(this.errors.length != 0){
            this.errors = []
          }
          console.log(data['errors'])
          this.errors.push(data['errors'])
        }
        else{
          return this._route.navigate(['products'])
      }
      })
  }
}
