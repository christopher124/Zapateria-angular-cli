import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ToastrService } from 'ngx-toastr'; 
import { ProductsService } from '../../../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  producto: any = {};


  constructor( private ActivatedRoute: ActivatedRoute, private _ProductsService:ProductsService, private toastr: ToastrService) {

    this.ActivatedRoute.params.subscribe( params =>{
      this.producto = this._ProductsService.getProducto (params['id'])
    })

   }

   onClick() {
    this.toastr.warning('Necesesita iniciar sesion para comprar un producto', 'error al comprar', {
      timeOut: 3000,
    });
  }


}
