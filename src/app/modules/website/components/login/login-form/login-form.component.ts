import { User, LoginForm } from 'app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PublicApiService } from 'app/services/public-api.service';
import { GlobalService } from 'app/services/global.service';
import { environment } from 'environments/environment'

@Component({
  selector: 'app-website-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor (
    private publicApi: PublicApiService,
    private globalService: GlobalService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]],
    });
  }

  onLogin() {
    if (!this.loginForm.valid) {
      this.globalService.notification.error({message: 'An error occured, please try logging in again'})
    }

    const user: User = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.publicApi.users.authenticate({
      body: user,
    })
    .subscribe(
      res => {
        localStorage.setItem('token', res['token']);
        localStorage.setItem('user', res['user']);
        this.globalService.notification.show({message: 'Login successful'});
        this.globalService.redirection.delayed('/dashboard', 300)
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }
}
