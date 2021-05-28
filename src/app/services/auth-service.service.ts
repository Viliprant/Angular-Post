import { AuthData } from './../models/AuthData';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authData: AuthData = new AuthData();
  private authDataSubject: Subject<AuthData> = new Subject();

  constructor() {
  }

  getAuth(): Subject<AuthData> {
    return this.authDataSubject;
  }

  isSignedIn(){
    return this.authData.IsAuth;
  }

  signIn(): void{
    this.authData.IsAuth = true;
    this.authDataSubject.next(this.authData);
  }
  signOut(): void{
    this.authData.IsAuth = false;
    this.authDataSubject.next(this.authData);
  }
}
