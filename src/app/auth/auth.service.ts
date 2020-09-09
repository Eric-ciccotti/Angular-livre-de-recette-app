import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInteface } from './auth-inteface';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signUp(email: string, password: string) {
    return this.http.post<AuthInteface>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAt1bRVbt0WN9S1hfBXfiOnyV6naj-iYnQ', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(errorResponse => {
        let errorMessage = 'Une erreur inconnue s\'est produite';
        //if there is no error, or if the error response is an unknow error
        if (!errorResponse.error || !errorResponse.error.error) {
          return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'Cette adresse mail existe déja';
        }
        return throwError(errorMessage);
      }))
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthInteface>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAt1bRVbt0WN9S1hfBXfiOnyV6naj-iYnQ', {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }


  constructor(private http: HttpClient) { }
}
