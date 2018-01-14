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

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.dashboardApi.users.get(this.userId, {
      fixtures: true,
    })
    .subscribe(
      res => {
        this.fixtures = res.fixtures;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
