import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private _http: HttpService) {

   }

  ngOnInit() {
    console.log("refreshed")
    this.products = []
    this.getProduct()
  }

  getProduct(){
    this._http.serviceGetProduct()
      .subscribe(data=>{
        this.products = data
        console.log("Products", this.products)
      })
  }
  deleteProduct(product){
    this._http.serviceDeleteProduct(product)
      .subscribe(data=>{
        console.log(data)
        this.getProduct()
      })
  }

}
