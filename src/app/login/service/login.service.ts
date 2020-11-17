import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpCliente: HttpClient) { }

  Login(email: String, contraseña: String){
    return this.httpCliente.post('url/login', { 'email': email, 'contraseña': contraseña})
  }

  //guardo el token
  setToken(token){
    localStorage.setItem("accessToken",token)
  }
  //obtengo eltoken, si lo requiero
  getToken() {
    return localStorage.getItem("accessToken");
  }

  // guardo, sí es administrador
  setIsadmin(user){
    localStorage.setItem("admi",user)
  }
    // obtnego,sí es administrador
  getisadmi() {
    return localStorage.getItem("admi");
  }
}
