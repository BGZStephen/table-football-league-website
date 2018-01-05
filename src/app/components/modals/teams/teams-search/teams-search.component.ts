import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';

@Component({
  selector: 'app-teams-search',
  templateUrl: './teams-search.component.html',
})
export class TeamsSearchComponent implements OnInit {

  @Output() close: EventEmitter<number> = new EventEmitter<number>();
  @Output() teamSelect: EventEmitter<number> = new EventEmitter<number>();
  filterTerm: String = '';
  selectedTeams: Array<object>;

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

  onTeamSelect(team) {
    if(this.selectedTeams.indexOf(team) === -1) {
      this.selectedTeams.push(team);
    }
  }
}
