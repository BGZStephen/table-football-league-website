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
  };
  league: object = {
    name: '',
    teams: []
  };

  constructor (
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {}

  addTeam(team) {
    for (const currentTeam of this.league['teams']) {
      if (currentTeam._id === team._id) {
        return this.globalService.notification.error({message: 'This team is already a part of the league'});
      }
    }

    this.league['teams'].push(team)
  }

  resetLeague() {
    this.league = {name: '', teams: []};
  }
}
