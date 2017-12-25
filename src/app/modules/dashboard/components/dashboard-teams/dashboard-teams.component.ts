import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-teams',
  templateUrl: './dashboard-teams.component.html',
})
export class DashboardTeamsComponent implements OnInit {

  userId: String = JSON.parse(localStorage.getItem('user'))._id;
  teams: Array<object>;

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.dashboardApi.users.getTeams(this.userId)
    .subscribe(
      res => {
        this.teams = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
