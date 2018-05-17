import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any
  product: any
  errors: any
  constructor(
    private _http: HttpService,
    private _route: Router,
    private _router: ActivatedRoute
  ) {    this._router.params.subscribe(params=>{
    this.id = params.id
    console.log(this.id)
    })

    }

  ngOnInit() {
    this.product = {
      url: '',
      price: '',
      title: '',
      id: this.id
    }
    this.errors = []
    this.grabProduct(this.id)
  }

  grabProduct(id){
    this._http.serviceGrabProduct(id)
      .subscribe(data=>{
        this.product.url = data['url']
        this.product.price = data['price']
        this.product.title = data['title']
        console.log(this.product)
      })
  }
  getProduct(){
    this._http.serviceGetProduct()
      .subscribe(data=>{
        console.log('products updated', data)
      })
  }

  updateProduct(id){
    this._http.serviceUpdateProduct(this.product)
      .subscribe(data=>{
        if(data['errors']){
          if (this.errors.length != 0){
            this.errors =[]
          }
          console.log(data['errors'])
          this.errors.push(data['errors'])
          this.grabProduct(this.id)
        }
        else{
          return this._route.navigate(['products'])
      }
      })
  }

}
