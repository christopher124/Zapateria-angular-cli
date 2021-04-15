import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ProductoService } from 'src/app/services/producto.service';

import {ProductsService} from "../../../services/products.service"


@Component({
  selector: 'app-novelties',
  templateUrl: './novelties.component.html',
  styleUrls: ['./novelties.component.css']
})
export class NoveltiesComponent implements OnInit {

  productos: any;
  producto = {
    _idProducto: '',
    Nombre: '',
    Precio: '',
    Existensia: '',
    Categoria: [
      {
        Tipo: '',
        Descrip: '',
        Numeracion: [''],
        Color: [''],
        Foto_Prod: '',
      },
    ],
    Proveedor: {
      NombrePro: '',
      DireccionPro: '',
      TelefonoPro: '',
      EmailPro: '',
    },
  };

  constructor(public iniciosesionServicio: LoginService,private productosServices: ProductoService, ) { }

  // verProducto(_idProducto: number){
  //   this.router.navigate( ['/product',_idProducto] );
  // }

  ngOnInit(): void {
    this.productos = this.productosServices.ConsultarTodoProduc();
    // console.log(this.productos);    
  }

  

}
