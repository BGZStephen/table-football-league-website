import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-create-league',
  templateUrl: './panel-create-league.component.html',
})
export class PanelCreateLeagueComponent implements OnInit {

  formValues = {
    leagueName: {
      display: 'League name'
    },
    teams: [],
  };
  searchTeams = false;
  user: object = {};
  league: object = {
    name: '',
    teams: []
  };

  constructor (
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.dashboardApi.users.get(user._id, {
      teams: true,
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

  onTeamsSelect(teams) {
    if (this.formValues.teams.length > 0) {
      const teamAddDuplicates = [];
      const currentTeams = this.formValues.teams.map(team => team._id);

      for (const team in teams) {
        if (currentTeams.indexOf(team['_id']) >= 0) {
          teamAddDuplicates.push(team);
        } else {
          this.formValues.teams.push(team);
        }
      }

      if (teamAddDuplicates.length === 1) {
        this.globalService.notification.error({message: 'One of the teams you selected is already part of this league'})
      } else if (teamAddDuplicates.length > 1) {
        this.globalService.notification.error({message: 'Some of the teams you selected is already part of this league'})
      }
    } else {
      this.formValues.teams = this.formValues.teams.concat(teams);
    }
  }

  resetLeague() {
    this.league = {name: '', teams: []};
  }
}
