import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginService } from 'src/app/login/service/login.service';


@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {
  httpOptions : any
  token
  constructor(private httpCliente: HttpClient, private login : LoginService) {
    this.token = this.login.getToken()
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'access-token': this.token
      })
    };
   }

  User(forma){
    
    return this.httpCliente.post('https://nameless-plains-49486.herokuapp.com/api/users', forma,this.httpOptions);

  }
}