import { Component, OnInit } from '@angular/core';
import {LoginService} from './../login/service/login.service'
@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {

  IsAdmin = false
  IsUser = false
  dni
  constructor(private service : LoginService) { }

  ngOnInit(): void {
    this.GetRolUser()
    this.getUserDni()
  }

  GetRolUser(){
    let rol = this.service.getRol();
    if(rol === "admin"){
      this.IsAdmin = true
    }
    if(rol === "user"){
      this.IsUser = true
    }

  }
  getUserDni(){
    this.dni = this.service.getUserDni();

  }

}
