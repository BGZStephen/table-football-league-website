import { Component, OnInit } from '@angular/core';
import { PublicApiService } from 'app/services/public-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-website-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit {

  formValues = {
    firstName: {
      display: 'First name'
    },
    lastName: {
      display: 'Last name'
    },
    username: {
      display: 'Username'
    },
    email: {
      display: 'Email'
    },
    password: {
      display: 'Password'
    },
    confirmPassword: {
      display: 'Password confirmation'
    },
  };

  constructor(
    private publicApi: PublicApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
  }

  onRegister(formValues) {
    const validation = this.validateForm(formValues);
    if (validation) {
      this.publicApi.users.create({
        body: {user: formValues},
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

  validateForm(form) {
    let errorFlag;
    Object.keys(this.formValues).forEach((key) => {
      if(!form[key]) {
        errorFlag = true;
        this.formValues[key]['hasError'] = true;
        this.formValues[key]['message'] = `${this.formValues[key].display} is required`;
      } else {
        this.formValues[key]['hasError'] = false;
        this.formValues[key]['message'] = undefined;
      }
    })

    if (form.confirmPassword !== form.password) {
      errorFlag = true;
      this.formValues.confirmPassword['hasError'] = true;
      this.formValues.confirmPassword['message'] = 'The entered passwords do not match';
    }

    if(errorFlag) {
      return false;
    }

    return true;
  }

  clearFormError(field) {
    this.formValues[field].hasError = false;
    this.formValues[field].message = null;
  }
}
