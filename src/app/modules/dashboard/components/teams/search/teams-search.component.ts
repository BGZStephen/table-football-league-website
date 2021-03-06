import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-teams-search',
  templateUrl: './teams-search.component.html',
})
export class TeamsSearchComponent implements OnInit {

  @Input() selectLabel: string;
  @Output()
  onTeamSelect: EventEmitter<number> = new EventEmitter<number>();
  searchResults: Array<object> = [];
  searchTerm: String;

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {}

  getMyTeams() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.dashboardApi.users.get({
      params: {userId: user._id},
      query: {teams: 1}
    })
    .subscribe(
      res => {
        this.searchResults = res.teams;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

  searchTeams(form) {
    this.dashboardApi.teams.search({
      query: {
        name: form.searchTerm,
      }
    })
    .subscribe(
      res => {
        this.searchResults = res;
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

  onClick(team) {
    this.onTeamSelect.emit(team)
  }

}
