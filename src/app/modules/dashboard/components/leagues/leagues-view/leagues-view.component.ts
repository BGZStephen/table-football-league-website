import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-leagues',
  templateUrl: './leagues-view.component.html',
})
export class LeaguesViewComponent implements OnInit {

  leagueAction: string = '';

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {}

  setLeagueAction(action) {
    this.leagueAction = action;
  }

}
