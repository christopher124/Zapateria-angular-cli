import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IItem } from 'src/app/interfaces/item.interface';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  public listProducts!: Array<IItem>;
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

  constructor(
    private CartService: CartService,
    public iniciosesionServicio: LoginService,
    private productosServices: ProductoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.productos = this.productosServices.ConsultarTodoProduc();
  }

  public addCart(product: IItem) {
    this.CartService.changeCart(product);
    this.toastr.success('Producto añadido al carrito');
  }
}
