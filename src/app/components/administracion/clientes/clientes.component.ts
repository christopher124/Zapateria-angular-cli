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
        this.toastr.success('Cliente Registrado');
        this.ConsultarTodoClient();
      },

      (err) => console.log(err)
    );
    this.usuarioservicio.GuardarUsuario(this.usuario).subscribe(
      (res) => {
        // this.toastr.success('Usuario Registrado');
      },
      (err) => console.log(err)
    );
    this.limpiarCampos();

    return;
  }

  ModificarCliente() {
    this.clienteServico.ModificarCliente(this.cliente).subscribe(
      (res) => {
        this.toastr.success('Cliente Modificado');
      },
      (err) => console.log(err)
    );
    this.usuarioservicio.ModificarUsuario(this.usuario).subscribe(
      (res) => {
        // this.toastr.success('Usuario Registrado');
      },
      (err) => console.log(err)
    );
    this.ConsultarTodoClient();
    return;
  }

  ElimCliente(Email: string) {
    this.clienteServico.EliminarCliente(Email).subscribe(
      (res) => {
        this.toastr.success('Cliente Eliminado');
        this.ConsultarTodoClient();
      },
      (err) => console.log(err)
    );
    this.usuarioservicio.EliminarUsuario(Email).subscribe(
      (res) => {
        this.toastr.success('Usuario Eliminado');
        this.ConsultarTodoClient();
      },
      (err) => console.log(err)
    );
  }

  ConsulClient(Nombres: string) {
    this.clienteServico.ConsultarCliente(Nombres).subscribe(
      (res) => {
        this.cliente = res;
      },
      (err) => console.log(err)
    );
    this.ConsultarTodoClient();
  }

  ConsultarTodoClient() {
    this.clientes = this.clienteServico.ConsultarTodoCliente();
    return;
  }

  limpiarCampos() {
    this.clientes = null;
    this.cliente.Nombres = '';
    this.cliente.Apellidos = '';
    this.cliente.Direccion = '';
    this.cliente.Email = '';
    this.cliente.Password = '';
  }
}
