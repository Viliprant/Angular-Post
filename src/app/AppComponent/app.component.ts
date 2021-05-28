import { Router } from '@angular/router';
import { AuthService } from './../services/auth-service.service';
import { Component } from '@angular/core';
import { AuthData } from '../models/AuthData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  authData: AuthData = new AuthData();

  constructor(private _authService : AuthService, private _router: Router, private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this._authService.getAuth().subscribe({
      next: authData =>{
        this.authData = authData;
        
        if(!this.authData.IsAuth){
          this._router.navigate(['home']);
          this._snackBar.open('Vous avez été deconnecté 😱', 'X', {
            duration: 3000,
            panelClass: 'toast-alert',
          });
        }
        else{
          this._snackBar.open('Vous êtes connecté 😇', 'X', {
            duration: 3000,
            panelClass: 'toast-success',
          });
        }
      }
    });
  }

  signIn(): void{
    this._authService.signIn();
  }
  signOut(): void{
    this._authService.signOut();
  }
}
