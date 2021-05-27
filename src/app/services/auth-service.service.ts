import { AuthData } from './../models/AuthData';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authData: AuthData = new AuthData();

  constructor() {
  }

  getAuth(): Observable<AuthData> {
    return of(this.authData);
  }

  isSignedIn(){
    return this.authData.IsAuth;
  }

  signIn(): void{
    this.authData.IsAuth = true;
  }
  signOut(): void{
    this.authData.IsAuth = false;
  }
}
