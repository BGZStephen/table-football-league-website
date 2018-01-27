import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalService } from 'app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem;
  @Output()
  onClick: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private globalService: GlobalService,
    private router: Router,
  ) {}

  ngOnInit() {}

  onMenuItemClick(menuItem) {
    this.onClick.emit(menuItem);
  }
}
