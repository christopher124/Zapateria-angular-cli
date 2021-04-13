import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  
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

  constructor(public iniciosesionServicio: LoginService,private productosServices: ProductoService, private router:Router) { }

  verProducto(_idProducto: number){
    this.router.navigate( ['/product',_idProducto] );
  }

  ngOnInit(): void {
    this.productos = this.productosServices.ConsultarTodoProduc();
    // console.log(this.productos);    
  }

}
