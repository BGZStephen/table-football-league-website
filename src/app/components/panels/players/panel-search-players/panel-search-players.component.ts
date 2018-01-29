import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service'
import { GlobalService } from 'app/services/global.service'

@Component({
  selector: 'app-panel-search-players',
  templateUrl: './panel-search-players.component.html',
})
export class PanelSearchPlayersComponent implements OnInit {

  @Input() selectLabel: string;
  @Output()
  onPlayerSelect: EventEmitter<number> = new EventEmitter<number>();
  searchResults: Array<object> = [];
  searchTerm: String;

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {}

  searchPlayers(form) {
    this.dashboardApi.users.search({
      query: {
        q: form.searchTerm,
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

  onClick(player) {
    this.onPlayerSelect.emit(player)
  }

}
