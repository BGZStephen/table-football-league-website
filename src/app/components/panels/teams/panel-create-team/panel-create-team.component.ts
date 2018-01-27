import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-create-team',
  templateUrl: './panel-create-team.component.html',
})
export class PanelCreateTeamComponent implements OnInit {

  formValues = {
    teamName: {
      display: 'Team name',
    }
  }
  team: object = {
    name: '',
    users: []
  }

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.dashboardApi.users.get({
      params: {userId: user._id}
    })
    .subscribe(
      res => {
        this.team['users'].push(res);
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

  resetTeam() {
    this.team = {name: '', users: []};
  }
}
