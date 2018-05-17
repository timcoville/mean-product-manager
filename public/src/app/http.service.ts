import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {}

  serviceGetProduct(){
    return this._http.get('/api/products')
    };

  serviceCreateProduct(product){
    return this._http.post('/api/products', product)
    }

  serviceGrabProduct(id){
    return this._http.get('/api/products/'+id)
    }

  serviceUpdateProduct(product){
    return this._http.put('/api/products/'+product.id, product)
    }

  serviceDeleteProduct(id){
    return this._http.delete('/api/products/'+id)
    }


}
