import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate{

  isSignedIn: boolean = false;

  constructor(private _router: Router, private _authService: AuthService, private _snackBar: MatSnackBar) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this._authService.getAuth().subscribe(authData => {
      this.isSignedIn = authData.IsAuth || false;
    })

    if (!this.isSignedIn) {
      this._router.navigate(['home']);
      this._snackBar.open('Vous devez être connecté !', 'X', {
        duration: 3000,
        panelClass: 'toast-alert',
      });
    }

    return this.isSignedIn;
  }
}
