import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';
import * as moment from 'moment'

@Component({
  selector: 'app-panel-create-fixture',
  templateUrl: './panel-create-fixture.component.html',
})
export class PanelCreateFixtureComponent implements OnInit {

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

    this.fixture['teams'].push(team)
  }

  resetFixture() {
    this.fixture = {teams: []};
  }
}
