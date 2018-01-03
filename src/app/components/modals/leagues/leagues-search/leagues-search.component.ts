import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues-search',
  templateUrl: './leagues-search.component.html',
})
export class LeaguesSearchComponent implements OnInit {

  @Output() close: EventEmitter<number> = new EventEmitter<number>();
  @Output() leagueSelect: EventEmitter<number> = new EventEmitter<number>();
  searchResult: object;

  constructor(
    private dashboardApi: DashboardApiService
  ) { }

  ngOnInit() {}

  onBackgroundClick(event) {
    if (event.target.className === 'modal-background') {
      this.close.emit();
    }
  }

  onClose() {
    this.close.emit()
  }

  onUserSelect(league) {
    this.leagueSelect.emit(league);
    this.close.emit()
  }

  onSearch() {
    if (query) {
      this.dashboardApi.leagues.getAll()
      .subscribe(res => {
        this.searchResult = res;
      })
    }
  }

}
