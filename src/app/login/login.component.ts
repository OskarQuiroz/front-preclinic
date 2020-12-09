import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// importar servicio de login
import {LoginService} from './service/login.service'

import Swal from'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variables del formulario que enviare
  email: String;
  password : String;


  constructor( private serviceLogin: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email) //mostrando lo que enviare
    console.log(this.password)  //mostrando lo que enviare
    //consumo el servicio
    Swal.showLoading()
    this.serviceLogin.Login(this.email,this.password).subscribe(   
      (data) => {
        console.log(data) //con esto vere lo que me devuelve el back
        this.serviceLogin.setToken(data['token']) //aquii guardare el toen e localStorage
        this.serviceLogin.setIsadmin(data['is_staff'])
        
        Swal.fire({
          icon: 'success',
          title: 'Usuario válido',
          showConfirmButton: true,
        }).then( () => {
          this.router.navigate(['../inicio']);;
        })
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Algo paso ...',
          text: error['error'].message,
          showConfirmButton: true,
        })
      }
    )
      
  }

}

