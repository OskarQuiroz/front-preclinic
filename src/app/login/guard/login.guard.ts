import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './../service/login.service'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  retorno = false
  constructor(private service: LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.service.getRol()){
        this.retorno=true
      }
    return this.retorno;
  }
  
}
