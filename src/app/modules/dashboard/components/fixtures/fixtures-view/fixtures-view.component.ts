import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-fixtures-view',
  templateUrl: './fixtures-view.component.html',
})
export class FixturesViewComponent implements OnInit {

  userId: String = JSON.parse(localStorage.getItem('user'))._id;
  fixtures: Array<object>;
  fixtureAction: string = '';

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    
  }

  setFixtureAction(action) {
    this.fixtureAction = action;
  }

}
