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
      display: 'League name',
      hasError: false,
      message: '',
    },
    teams: {
      display: 'Teams',
      hasError: false,
      message: '',
    },
  };
  league: object = {
    name: '',
    teams: [],
    administrators: [],
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

  createLeague() {
    if(this.validateLeague()) {
      const user = JSON.parse(localStorage.getItem('user'))
      this.league['administrators'].push(user._id);
      this.dashboardApi.leagues.create({
        body: this.league
      })
      .subscribe(
        res => {
          this.globalService.notification.show({message: 'League created successfully'})
        },
        error => {
          this.globalService.errorHandler.process(error);
        }
      )
    } else {
      return;
    }
  }

  validateLeague() {
    let hasError = false;

    if (!this.league['name']) {
      this.formValues.leagueName.hasError = true;
      this.formValues.leagueName.message = 'A league name is required';
      hasError = true;
    }

    if (this.league['teams'].length < 1) {
      this.formValues.teams.hasError = true;
      this.formValues.teams.message = 'A league requires at least 1 team';
      hasError = true;
    }

    return hasError ? false : true;
  }
}
