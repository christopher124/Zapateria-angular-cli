import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../services/empleado.service';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
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
    Fecha_Nacimiento: '',
    Email: '',
    Password: '',
    Rol: {
      Nombre: '',
      Sueldo: '',
      Fecha_ingre: '',
    },
    Sucursal: {
      NombreSuc: '',
      DireccionSuc: '',
      TelefonoSuc: '',
      CiudadSuc: '',
    },
  };

  constructor(
    private empleadoServicio: EmpleadoService,
    public iniciosesionServicio: LoginService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.ConsultarTodoEmpleado();
  }

  GuarEmple() {
    this.empleadoServicio.GuardarEmp(this.empleado).subscribe(
      (res) => {
        this.toastr.success('Empleado Registrado');
      },
      (err) => console.log(err)
    );
    this.limpiarCampos();
    this.ConsultarTodoEmpleado();
  }

  ModificarEmpleado(emplea: Object) {
    this.empleadoServicio.ModificarEmp(emplea).subscribe(
      (res) => {
        this.toastr.success('Empleado Modificado');
      },
      (err) => console.log(err)
    );
    this.ConsultarTodoEmpleado();
  }

  ElimEmpleado(_idEmpleado: Number) {
    this.empleadoServicio.EliminarEmp(_idEmpleado).subscribe(
      (res) => {
        this.toastr.success('Empleado Eliminado');
      },
      (err) => console.log(err)
    );
    this.ConsultarTodoEmpleado();
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
    this.empleado.Fecha_Nacimiento = '';
    this.empleado.Email = '';
    this.empleado.Password = '';
    this.empleado.Rol.Nombre = '';
    this.empleado.Rol.Sueldo = '';
    this.empleado.Rol.Fecha_ingre = '';
    this.empleado.Sucursal.NombreSuc = '';
    this.empleado.Sucursal.DireccionSuc = '';
    this.empleado.Sucursal.TelefonoSuc = '';
    this.empleado.Sucursal.CiudadSuc = '';
  }
}
