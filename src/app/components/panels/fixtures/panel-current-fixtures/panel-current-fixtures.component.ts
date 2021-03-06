import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-current-fixtures',
  templateUrl: './panel-current-fixtures.component.html',
})
export class PanelCurrentFixturesComponent implements OnInit {

  fixtures: Array<object> = [];

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.dashboardApi.users.getFixtures({
      params: {userId: user._id},
      query: {
        leagueId: 1,
        teams: 1
      }
    })
    .subscribe(
      res => {
        this.fixtures = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }
}
