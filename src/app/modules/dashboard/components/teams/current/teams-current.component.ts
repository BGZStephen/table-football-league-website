import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-teams-current',
  templateUrl: './teams-current.component.html'
})
export class TeamsCurrentComponent implements OnInit {

  user: Object = {};

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.dashboardApi.users.get({
      params: {userId: user._id},
      query: {teams: 1}
    })
    .subscribe(
      res => {
        this.user = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }
}
