import { Component, OnInit } from '@angular/core';

import {ProductsService} from '../../../services/products.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any [] = [];

  constructor(private productosServices: ProductsService) {
    console.log("constructor");
    
   }

  ngOnInit(): void {

    this.productos = this.productosServices.getProductos();

    console.log(this.productos);
    
  }

}
