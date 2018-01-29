import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel-search-players',
  templateUrl: './panel-search-players.component.html',
  styleUrls: ['./panel-search-players.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PanelSearchPlayersComponent implements OnInit {

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

  searchTeams(form) {
    this.dashboardApi.players.search({
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

  onClick(player) {
    this.onPlayerSelect.emit(player)
  }

}
