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

  constructor (
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {}

  teamsSearchOpen() {
    this.searchTeams = true;
  }

  teamsSearchClose() {
    this.searchTeams = false;
  }

  removeTeam(index) {
    this.formValues.teams.splice(index, 1);
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
}
