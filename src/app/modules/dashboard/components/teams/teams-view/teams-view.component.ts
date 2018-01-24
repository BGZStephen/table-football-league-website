import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-teams-view',
  templateUrl: './teams-view.component.html',
})
export class TeamsViewComponent implements OnInit {

  teamAction: string = '';

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {}

  setTeamAction(action) {
    this.teamAction = action;
  }

}
