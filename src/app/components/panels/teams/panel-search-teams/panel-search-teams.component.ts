import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-search-teams',
  templateUrl: './panel-search-teams.component.html',
})
export class PanelSearchTeamsComponent implements OnInit {

  searchResults: Array<object> = [];

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
  }

  getMyTeams() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.dashboardApi.users.get(user._id, {
      teams: true,
    })
    .subscribe(
      res => {
        this.searchResults = res.teams;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
