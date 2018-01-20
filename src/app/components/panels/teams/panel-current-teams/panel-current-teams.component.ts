import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-current-teams',
  templateUrl: './panel-current-teams.component.html'
})
export class PanelCurrentTeamsComponent implements OnInit {

  player: object = {};

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.dashboardApi.users.get(user._id, {
      teams: true,
    })
    .subscribe(
      res => {
        console.log(res)
        this.player = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }
}