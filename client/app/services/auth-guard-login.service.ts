import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService, private router: Router) { }

  canActivate() {
    let loggedIn = this.auth.loggedIn;

    if (!loggedIn) {
      this.router.navigate(['/login'])
    }
    return loggedIn;
  }


}
