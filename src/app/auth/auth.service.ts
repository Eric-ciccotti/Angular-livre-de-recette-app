import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInteface } from './auth-inteface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUp(email: string, password: string) {
    return this.http.post<AuthInteface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAt1bRVbt0WN9S1hfBXfiOnyV6naj-iYnQ', {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  constructor(private http: HttpClient) { }
}
