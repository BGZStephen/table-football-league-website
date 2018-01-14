import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-leagues',
  templateUrl: './leagues-view.component.html',
})
export class LeaguesViewComponent implements OnInit {

  userId: String = JSON.parse(localStorage.getItem('user'))._id;
  leagues: Array<object>;

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.dashboardApi.users.get(this.userId, {
      leagues: true,
    })
    .subscribe(
      res => {
        this.leagues = res.leagues;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
