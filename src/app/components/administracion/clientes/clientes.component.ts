import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../../../services/cliente.service';
import {LoginService} from '../../../services/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['../../../../assets/css/sb-admin-2.min.css', '../../administracion/clientes/clientes.component.css']
})
export class ClientesComponent implements OnInit {
clientes:any;
cliente = {
  _idCliente: "",
  Nombres:"",
  Apellidos:"",
  Direccion:"",
  Email:"",
  Password:""

}
  constructor( public iniciosesionServicio: LoginService,  private clienteServico:ClienteService  ) { }

  ngOnInit(): void {
    this.clientes=this.clienteServico.ConsultarTodoCliente();
  }

  GuarClien(){
this.clienteServico.GuardarCliente(this.cliente).subscribe(res =>{
  alert("Cliente Registrado");
},
err =>console.log(err));
  }


  ModCliente(){
this.clienteServico.ModificarCliente(this.cliente).subscribe(res =>{
  alert("Cliente Modificado");
},
err=>console.log(err));
  }

  ElimCliente(){
this.clienteServico.EliminarCliente(parseInt(this.cliente._idCliente)).subscribe(res=>{
alert("Cliente Eliminado");
},
err=>console.log(err));
  }

  ConsulClient(){
this.clienteServico.ConsultarCliente(this.cliente.Nombres).subscribe(res=>{
  this.cliente=res;
},
err=>console.log(err)
);
  }
  
}
