import { AuthService } from './../services/auth-service.service';
import { Component } from '@angular/core';
import { AuthData } from '../models/AuthData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  authData: AuthData = new AuthData();

  constructor(private _authService : AuthService){}

  ngOnInit(): void {
    this._authService.getAuth().subscribe(authData =>{
      this.authData = authData;
    });
  }

  signIn(): void{
    this._authService.signIn();
  }
  signOut(): void{
    this._authService.signOut();
  }
}
