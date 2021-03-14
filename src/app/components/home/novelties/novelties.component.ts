import { Component, OnInit } from '@angular/core';

import {ProductsService} from "../../../services/products.service"


@Component({
  selector: 'app-novelties',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.css']
})
export class NoveltiesComponent implements OnInit {

  productos: any [] = [];

  constructor(private productosServices: ProductsService) {
    // console.log("constructor");
   }


  ngOnInit(): void {
    this.productos = this.productosServices.getProductos();
    // console.log(this.productos);    
  }

  

}
