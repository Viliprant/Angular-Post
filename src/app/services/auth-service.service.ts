import { AuthData } from './../models/AuthData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authData: AuthData = new AuthData();

  constructor() {
  }

  getAuth(): Observable<AuthData> {
    return of(this.authData);
  }

  signIn(): void{
    this.authData.IsAuth = true;
  }
  signOut(): void{
    this.authData.IsAuth = false;
  }
}
