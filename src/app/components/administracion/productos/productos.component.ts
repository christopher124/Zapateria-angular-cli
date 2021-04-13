import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: [
    './productos.component.css',
    '../../../../assets/css/sb-admin-2.min.css',
  ],
})
export class ProductosComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private productoServicio: ProductoService,
    public iniciosesionServicio: LoginService
  ) {}

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
      NombresPro: '',
      DireccionPro: '',
      TelefonoPro: '',
      EmailPro: '',
    },
  };
  ngOnInit(): void {
    this.ConsultarTodoProducto();
  }

  GuardarProducto() {
    this.productoServicio.GuardarProduc(this.producto).subscribe(
      (res) => {
        this.toastr.success('Empleado Registrado');
        this.ConsultarTodoProducto();
      },
      (err) => console.log(err)
    );
    this.limpiarCampos();
    
  }

  ModificarProducto(product: object) {
    this.productoServicio.ModificarProduc(product);
    console.log(product);
  }

  ElimEmpleado(_idProducto: Number) {
    this.productoServicio.EliminarProduc(_idProducto).subscribe(
      (res) => {
        this.toastr.success('Empleado Eliminado');
        this.ConsultarTodoProducto();
      },
      (err) => console.log(err)
    );
    
  }

  ConsulEmpleado() {
    this.productoServicio.ConsultarProduc(this.producto.Nombre).subscribe(
      (res) => {
        this.producto = res;
      },
      (err) => console.log(err)
    );
  }
  ConsultarTodoProducto() {
    this.productos = this.productoServicio.ConsultarTodoProduc();
  }

  limpiarCampos() {
    this.productos = null;
    this.producto._idProducto = '';
    this.producto.Nombre = '';
    this.producto.Precio = '';
    this.producto.Existensia = '';
    this.producto.Categoria[0].Color = [''];
    this.producto.Categoria[0].Descrip = '';
    this.producto.Categoria[0].Numeracion = [''];
    this.producto.Categoria[0].Foto_Prod = '';
    this.producto.Proveedor.NombresPro = '';
    this.producto.Proveedor.TelefonoPro = '';
    this.producto.Proveedor.EmailPro = '';
    this.producto.Proveedor.DireccionPro = '';
  }
}
