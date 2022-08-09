import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  // Bloquear/Permitir o acesso as rotas privadas.
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(UserService.authUser()) { //verifica se o usuário existe
      return true;
    }
    else{
      alert("Usuário e/ou senha inválido!")
      this.router.navigate(["/login"]); // joga pra tela de login
      return false;
    }
  }
}
