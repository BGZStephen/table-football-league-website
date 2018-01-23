import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-current-leagues',
  templateUrl: './panel-current-leagues.component.html'
})
export class PanelCurrentLeaguesComponent implements OnInit {

  leagues: Array<object> = [];

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.dashboardApi.users.getLeagues(user._id, {
      teams: true,
      fixtures: true,
    })
    .subscribe(
      res => {
        console.log(res)
        this.leagues = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
