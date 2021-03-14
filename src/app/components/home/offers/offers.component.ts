import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {ProductsService} from "../../../services/products.service"

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  productos: any [] = [];

  constructor(private productosServices: ProductsService, private router:Router) {
    // console.log("constructor");
   }

   verProducto(idx: number){
    // console.log(idx);
    this.router.navigate( ['/product',idx] );
    
  }

  ngOnInit(): void {
    this.productos = this.productosServices.getProductos();
    // console.log(this.productos);    
  }

  

}