import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../services/empleado.service';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: [
    './empleado.component.css',
    '../../../../assets/css/sb-admin-2.min.css',
  ],
})
export class EmpleadoComponent implements OnInit {
  empleados: any;
  empleado = {
    _idEmpleado: '',
    Nombres: '',
    Apellidos: '',
    Direccion: '',
    Telefono: '',
    Email: '',
    Password: '',
    Rol: '',
    Sueldo: '',
    Fecha_ingre: '',
  };

  usuarios: any;
  usuario = {
    Email: '',
    Password: '',
  };

  constructor(
    private empleadoServicio: EmpleadoService,
    public iniciosesionServicio: LoginService,
    private toastr: ToastrService,
    private usuarioservicio: UsuarioService
  ) {}

  ngOnInit(): void {
    this.ConsultarTodoEmpleado();
  }

  GuarEmple() {
    this.empleadoServicio.GuardarEmp(this.empleado).subscribe(
      (res) => {
        this.toastr.success('Empleado Registrado');
        this.ConsultarTodoEmpleado();
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
  }

  ModificarEmpleado() {
    this.empleadoServicio.ModificarEmp(this.empleado).subscribe(
      (res) => {
        this.toastr.success('Empleado modificado con exito');
      },
      (err) => console.log(err)
    );
    this.usuarioservicio.ModificarUsuario(this.usuario).subscribe(
      (res) => {
        // this.toastr.success('Usuario Registrado');
      },
      (err) => console.log(err)
    );
  }

  ElimEmpleado(_idEmpleado: number, Email: string) {
    this.empleadoServicio.EliminarEmp(_idEmpleado).subscribe(
      (res) => {
        this.toastr.success('Empleado Eliminado');
        this.ConsultarTodoEmpleado();
      },
      (err) => console.log(err)
    );
    this.usuarioservicio.EliminarUsuario(Email).subscribe(
      (res) => {
        this.toastr.success('Usuario Eliminado');
      },
      (err) => console.log(err)
    );
  }

  ConsulEmpleado() {
    this.empleadoServicio.ConsultarEmp(this.empleado.Nombres).subscribe(
      (res) => {
        this.empleado = res;
      },
      (err) => console.log(err)
    );
  }
  ConsultarTodoEmpleado() {
    this.empleados = this.empleadoServicio.ConsultarTodoEmp();
  }

  limpiarCampos() {
    this.empleados = null;
    this.empleado._idEmpleado = '';
    this.empleado.Nombres = '';
    this.empleado.Apellidos = '';
    this.empleado.Direccion = '';
    this.empleado.Telefono = '';
    this.empleado.Email = '';
    this.empleado.Password = '';
    this.empleado.Rol = '';
    this.empleado.Sueldo = '';
    this.empleado.Fecha_ingre = '';
  }
}
