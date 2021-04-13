import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  constructor(private router: Router ,private toastr: ToastrService, private clienteServico: ClienteService,    private usuarioservicio: UsuarioService,
    ) { }

  ngOnInit(): void {
  }
  add() {
    this.clienteServico.GuardarCliente(this.cliente).subscribe(
      (res) => {
        this.toastr.success('Registro con exito');},
        (err)=> console.log(err));
    this.usuarioservicio.GuardarUsuario(this.usuario).subscribe(
      (res) => {
        this.toastr.success('ingrese sus credenciales acontinuación para iniciar sesión');
      },
      (err) => console.log(err)
    );
    this.limpiarCampos();
    this.router.navigate(['/iniciosesion']);
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
