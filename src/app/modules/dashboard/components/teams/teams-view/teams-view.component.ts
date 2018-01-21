import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-teams-view',
  templateUrl: './teams-view.component.html',
})
export class TeamsViewComponent implements OnInit {

  userId: String = JSON.parse(localStorage.getItem('user'))._id;
  teams: Array<object>;
  teamAction: string = '';

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.dashboardApi.users.get(this.userId, {
      teams: true,
    })
    .subscribe(
      res => {
        this.teams = res.teams;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

  setTeamAction(action) {
    console.log(action)
    this.teamAction = action;
  }

}
