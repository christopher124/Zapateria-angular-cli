import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../../services/producto.service'
import {UsuarioService} from '../../../services/usuario.service'
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css', '../../../../assets/css/sb-admin-2.min.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productoServicio: ProductoService, 
    private usuarioservicio: UsuarioService,) { }
  
  usuarios:any;
  usuario = {
    _id : '',
    Password: '',
    Email:''
  }

  productos:any;
  producto = {
    _idProduc:"",
    Nombre:"",
    Precio:"",
    Existencia:"",
    Categoria:{
      Tipo:"",
      Descrip:"",
      Numeracion:[],
      Color:[],
      Foto_Prod:""
    },
    Proveedor:{
      Nombres:"",
      Direccion:"",
      Telefono:"",
      Email:""
    }

  
  }
  ngOnInit(): void {
    this.ConsultarTodoClient();
  }

  ConsultarTodoClient() {
    this.usuarios = this.usuarioservicio.ConsultarTodoCliente();
  }


// GuardarProducto(){
// this.productoServicio.GuardarProduc(this.producto).subscribe(res=>{
//   alert("Producto Agregado");
// },
// err=>console.log(err));
// }

// ModificarProducto(){
// this.productoServicio.ModificarProduc(this.producto).subscribe(res=>{
//   alert("Producto Modificado");
// },
// err=>console.log(err));
// }

// EliminarProducto(){
// this.productoServicio.EliminarProduc(parseInt(this.producto._idProduc)).subscribe(res=>{
//   alert("Producto Eliminado");
// },
// err=>console.log(err));
// }

// ConsultarProducto(){
// this.productoServicio.ConsultarProduc(this.producto.Nombre).subscribe(res=>{
//   this.producto=res;
// },
// err=>console.log(err));
// }
// ConsultaTodoProducto(){
// this.productos=this.productoServicio.ConsultarTodoProduc();
// }
}
