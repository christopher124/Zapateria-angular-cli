import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { UsuarioService } from '../../../services/usuario.service';
import { LoginService } from '../../../services/login.service';
// import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: [
    '../../../../assets/css/sb-admin-2.min.css',
    '../../administracion/clientes/clientes.component.css',
  ],
})
export class ClientesComponent implements OnInit {
  clientes: any;
  cliente = {
    _idCliente: '',
    Nombres: '',
    Apellidos: '',
    Direccion: '',
    Email: '',
    Password: '',
  };

  usuarios: any;
  usuario = {
    Email: '',
    Password: '',
  };

  constructor(
    private toastr: ToastrService,
    private usuarioservicio: UsuarioService,
    public iniciosesionServicio: LoginService,
    private clienteServico: ClienteService
  ) {}

  ngOnInit(): void {
    this.ConsultarTodoClient();
  }

  GuarClien() {
    this.clienteServico.GuardarCliente(this.cliente).subscribe(
      (res) => {
        this.toastr.success('Cliente Registrado');},
      (err) => console.log(err)
    );
    this.usuarioservicio.GuardarUsuario(this.usuario).subscribe(
      (res) => {
        // this.toastr.success('Usuario Registrado');
      },
      (err) => console.log(err)
    );
    this.limpiarCampos();
    this.ConsultarTodoClient();
  }

  ModificarCliente(cliene : Object){
this.clienteServico.ModificarCliente(cliene).subscribe(
  (res) => {
    this.toastr.success('Cliente Modificado');
  },
  (err) => console.log(err)
);
  }

  ElimCliente(_idCliente: Number, Email: String) {
    this.clienteServico.EliminarCliente(_idCliente).subscribe(
      (res) => {
        this.toastr.success('Cliente Eliminado');
      },
      (err) => console.log(err)
    );
    this.usuarioservicio.EliminarUsuario(Email).subscribe(
      (res) => {
        this.toastr.success('Usuario Eliminado');
      },
      (err) => console.log(err)
    );
    this.ConsultarTodoClient();
  }

  ConsulClient() {
    this.clienteServico.ConsultarCliente(this.cliente.Nombres).subscribe(
      (res) => {
        this.cliente = res;
      },
      (err) => console.log(err)
    );
  }
  ConsultarTodoClient() {
    this.clientes = this.clienteServico.ConsultarTodoCliente();
  }

  limpiarCampos() {
    this.clientes = null;
    this.cliente._idCliente = '';
    this.cliente.Nombres = '';
    this.cliente.Apellidos = '';
    this.cliente.Direccion = '';
    this.cliente.Email = '';
    this.cliente.Password = '';
  }
}
