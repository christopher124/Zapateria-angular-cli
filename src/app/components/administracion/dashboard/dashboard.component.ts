import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../../assets/css/sb-admin-2.min.css']
})
export class DashboardComponent implements OnInit {
  usuarios: any;
  usuario = {
    Nombres: '',
  };
  constructor(public iniciosesionServicio: LoginService) { 
    this.iniciosesionServicio.ereEmpleado(this.usuario.Nombres).subscribe(result =>{
      console.log(result);
      
    })
  }

  ngOnInit(): void {
  }

}
