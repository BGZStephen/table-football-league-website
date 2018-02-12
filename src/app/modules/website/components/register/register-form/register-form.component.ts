import { User, RegistrationForm } from 'app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PublicApiService } from 'app/services/public-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-website-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private publicApi: PublicApiService,
    private globalService: GlobalService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [<any>Validators.required]],
      email: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]],
      repeatPassword: ['', [<any>Validators.required]],
    });
  }

  onRegister({form, valid}: {form: RegistrationForm, valid: boolean}) {
    const user: User = {
      name: form.name,
      email: form.email,
      password: form.password
    }

    this.publicApi.users.create({
      body: user,
    })
    .subscribe(
      res => {
        localStorage.setItem('token', res['token']);
        this.globalService.notification.show({message: 'Registration successful'});
        this.globalService.redirection.delayed('/dashboard', 300);
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }
}
