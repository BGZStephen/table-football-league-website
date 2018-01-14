import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
})
export class TeamViewComponent implements OnInit {

  team: Array<any> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      this.dashboardApi.teams.get(params.id, {
        users: true,
      })
      .subscribe(
        res => {
          console.log(res)
          this.team = res;
        },
        error => {
          this.globalService.errorHandler.process(error);
        }
      )
    })
  }
}
