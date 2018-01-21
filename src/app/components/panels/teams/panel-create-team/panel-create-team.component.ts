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
      display: 'Team name'
    },
  };
  searchUsers = false;
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
    this.dashboardApi.users.get(user._id)
    .subscribe(
      res => {
        console.log(this.team)
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
