import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-account-manage',
  templateUrl: './panel-account-manage.component.html',
})
export class PanelAccountManageComponent implements OnInit {
  passwordChange = false;
  user: object = {};

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.dashboardApi.users.get(user._id)
    .subscribe(
      res => {
        this.user = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

  onUserUpdate(form) {

    const user = {
      _id: this.user['id'],
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      email: form.email,
      password: undefined,
    }

    if (form.newPassword && !form.confirmNewPassword) {
      return this.globalService.notification.error({message: 'Please confirm your password'});
    }

    if (!form.newPassword && form.confirmNewPassword) {
      return this.globalService.notification.error({message: 'Please enter your new password'});
    }

    if (form.newPassword && form.confirmNewPassword && form.newPassword !== form.confirmNewPassword) {
      return this.globalService.notification.error({message: 'New password and confirmation do not match.'});
    }

    if (form.newPassword && form.confirmNewPassword && form.newPassword === form.confirmNewPassword) {
      user.password = form.newpassword;
    }

    this.dashboardApi.users.update(user)
    .subscribe(user => {
      this.user = user;
      return this.globalService.notification.show({message: 'Account update successful'});
      // return this.globalService.notification.error({message: error});
    })
  }

  enablePasswordChange() {
    this.passwordChange = !this.passwordChange;
  }
}
