import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-create-fixture',
  templateUrl: './panel-create-fixture.component.html',
})
export class PanelCreateFixtureComponent implements OnInit {

  fixture: object = {
    teams: []
  };

  constructor (
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {}

  resetFixture() {
    this.fixture = {teams: []};
  }
}
