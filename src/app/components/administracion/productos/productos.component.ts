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
    Existencia: '',
    Numeracion: '',
    Color: '',
    Tipo: '',
    Descripcion: '',
    Foto: '',
  };
  ngOnInit(): void {
    this.ConsultarTodoProducto();
  }

  GuardarProducto() {
    this.productoServicio.GuardarProduc(this.producto).subscribe(
      (res) => {
        this.toastr.success('Producto Registrado');
        this.ConsultarTodoProducto();
      },
      (err) => console.log(err)
    );
    this.limpiarCampos();
  }

  ModificarProducto() {
    this.productoServicio.ModificarProduc(this.producto).subscribe(
      (res) => {
        this.toastr.success('Producto modificado correctamente');
        this.ConsultarTodoProducto();
      },
      (err) => console.log(err)
    );
  }

  eliminarProducto(_idProducto: number) {
    this.productoServicio.EliminarProduc(_idProducto).subscribe(
      (res) => {
        this.toastr.success('Producto eliminado correctamente');
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
    this.producto.Existencia = '';
    this.producto.Color = '';
    this.producto.Descripcion = '';
    this.producto.Numeracion = '';
    this.producto.Foto = '';
  }
}
