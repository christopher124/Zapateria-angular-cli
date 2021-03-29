import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../../../assets/css/sb-admin-2.min.css']
})
export class DashboardComponent implements OnInit {

  constructor(public iniciosesionServicio: LoginService) { }

  ngOnInit(): void {
  }

}
