import { Observable } from 'rxjs';
import { AuthInteface } from './auth-inteface';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error = null;

  constructor(private authService: AuthService) { }

  onSwitchLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    //in case where the user would 'hack' the disable button into the browser tools
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    let authObservable: Observable<AuthInteface>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.authService.signIn(email, password).subscribe;
    } else {
      authObservable = this.authService.signUp(email, password).subscribe;
    }

    authObservable.subscribe(
      responseData => {
        console.log(responseData);
        this.isLoading = false;
      }, errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage
        this.isLoading = false;
      });

    form.reset();
  }



  ngOnInit(): void {
  }

}
