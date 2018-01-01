import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
})
export class UsersSearchComponent implements OnInit {

  @Output()
  close: EventEmitter<number> = new EventEmitter<number>();
  userSelect: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  onBackgroundClick(event) {
    if (event.target.className === 'modal-background') {
      this.close.emit();
    }
  }

  onClose() {
    this.close.emit();
  }

  onUserSelect(user) {
    this.userSelect.emit(user)
  }
}
