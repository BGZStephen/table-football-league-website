import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PublicApiService } from 'app/services/public-api.service';
import { GlobalService } from 'app/services/global.service';
import { environment } from 'environments/environment'

@Component({
  selector: 'app-website-login-form',
  templateUrl: './website-login-form.component.html',
})
export class WebsiteLoginFormComponent implements OnInit {

  formValues = {
    email: {
      display: 'Email'
    },
    password: {
      display: 'Password'
    },
  };

  constructor (
    private publicApi: PublicApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {}

  onLogin(user) {
    const validation = this.validateForm(user);
    if (validation) {
      this.publicApi.users.authenticate(user)
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

    if(errorFlag) {
      return false;
    }

    return true;
  }
}
