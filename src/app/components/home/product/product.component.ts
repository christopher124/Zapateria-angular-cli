import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ProductsService } from '../../../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  producto: any = {};


  constructor( private ActivatedRoute: ActivatedRoute, private _ProductsService:ProductsService) {

    this.ActivatedRoute.params.subscribe( params =>{
      this.producto = this._ProductsService.getProducto (params['id'])
    })

   }

}
