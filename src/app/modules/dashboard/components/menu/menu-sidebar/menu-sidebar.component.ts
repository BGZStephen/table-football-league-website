import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
})
export class MenuSidebarComponent implements OnInit {

  menuVisible: boolean = false;
  menuItems: Array<object> = [];

  constructor(
    private globalService: GlobalService,
    private router: Router,
  ) {
    this.menuItems = [
      {name: 'Home', iconClass: 'fa fa-home fa-fw', link: '/dashboard'},
      {name: 'Fixtures', iconClass: 'fa fa-calendar fa-fw', link: '/dashboard/fixtures'},
      {name: 'Teams', iconClass: 'fa fa-users fa-fw', link: '/dashboard/teams'},
      {name: 'Leagues', iconClass: 'fa fa-list-alt fa-fw', link: '/dashboard/leagues'},
      {name: 'Account', iconClass: 'fa fa-cog fa-fw', link: '/dashboard/account'},
      {name: 'Logout', iconClass: 'fa fa-power-off fa-fw', action: this.onLogout},
    ]
  }

  ngOnInit() {}

  onMenuItemClick(menuItem) {
    if (menuItem.action) {
      return menuItem.action();
    }
  }

  toggleMenuVisible = () => {
    console.log(this.menuVisible)
    this.menuVisible = !this.menuVisible;
  }

  menuResizeToggle = () => {
    if (screen.width > 400) {
      this.menuVisible = true;
    } else {
      this.menuVisible = false;
    }
  }

  onLogout = () => {
    this.globalService.notification.show({message: 'Logout successful'})
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
