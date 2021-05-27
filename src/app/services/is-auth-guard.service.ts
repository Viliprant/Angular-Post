import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthData } from '../models/AuthData';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate{

  isSignedIn: boolean = false;

  constructor(private _router: Router, private _authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this._authService.getAuth().subscribe(authData => {
      this.isSignedIn = authData.IsAuth;
    })

    if (this.isSignedIn !== true) {
      this._router.navigate(['home']);
    }

    return this.isSignedIn;
  }
}
