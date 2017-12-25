import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-leagues',
  templateUrl: './dashboard-leagues.component.html',
})
export class DashboardLeaguesComponent implements OnInit {

  userId: String = JSON.parse(localStorage.getItem('user'))._id;
  leagues: Array<object>;

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.dashboardApi.users.getLeagues(this.userId)
    .subscribe(
      res => {
        this.leagues = res;
        console.log(res);
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

}
