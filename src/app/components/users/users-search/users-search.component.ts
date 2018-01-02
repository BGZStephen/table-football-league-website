import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
})
export class UsersSearchComponent implements OnInit {

  @Output() close: EventEmitter<number> = new EventEmitter<number>();
  @Output() userSelect: EventEmitter<number> = new EventEmitter<number>();
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

  onUserSelect(user) {
    this.userSelect.emit(user);
    this.close.emit()
  }

  onSearch(query) {
    if (query) {
      this.dashboardApi.users.getByEmail(query)
      .subscribe(res => {
        this.searchResult = res;
      })
    }
  }
}
