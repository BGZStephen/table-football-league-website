import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-fixtures',
  templateUrl: './dashboard-fixtures.component.html',
})
export class DashboardFixturesComponent implements OnInit {

  userId: String = JSON.parse(localStorage.getItem('user'))._id;
  fixtures: Array<object>;

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.dashboardApi.users.getFixtures(this.userId)
    .subscribe(
      res => {
        this.fixtures = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
