import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';
import * as moment from 'moment'

@Component({
  selector: 'app-panel-create-fixture',
  templateUrl: './panel-create-fixture.component.html',
})
export class PanelCreateFixtureComponent implements OnInit {

  formValues = {
    date: {
      display: 'Date',
      hasError: false,
      message: '',
    },
    teams: {
      display: 'Teams',
      hasError: false,
      message: '',
    }
  }

  fixture: object = {
    date: moment().startOf('day').format('YYYY-MM-D'),
    teams: []
  };

  constructor (
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {}

  addTeam(team) {
    for (const currentTeam of this.fixture['teams']) {
      if (currentTeam._id === team._id) {
        return this.globalService.notification.error({message: 'This team is already a part of the fixture'});
      }
    }

    if (this.fixture['teams'][0]) {
      this.fixture['teams'][1] = team
      return;
    }

    this.fixture['teams'][0] = team
  }

  removeTeam(index) {
    this.fixture['teams'].splice(index, 1)
  }

  resetFixture() {
    this.fixture = {teams: []};
  }

  createFixture() {
    if (this.validateFixture()) {
      this.dashboardApi.fixtures.create({
        body: this.fixture
      })
      .subscribe(
        res => {
          this.globalService.notification.show({message: 'Fixture created successfully'})
        },
        error => {
          this.globalService.errorHandler.process(error)
        }
      )
    }
  }

  validateFixture() {
    let hasError = false;

    if (!this.fixture['date']) {
      this.formValues.date.hasError = true;
      this.formValues.date.message = 'Please selsect a date for the fixture';
      hasError = true;
    }

    if (this.fixture['teams'].length < 2) {
      this.formValues.teams.hasError = true;
      this.formValues.teams.message = 'A requires requires 2 teams';
      hasError = true;
    }

    return hasError ? false : true;
  }
}
