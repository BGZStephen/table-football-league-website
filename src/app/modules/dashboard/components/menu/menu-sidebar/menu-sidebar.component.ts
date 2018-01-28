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
      {name: 'Home', iconClass: 'fa fa-home fa-2x', link: '/dashboard'},
      {name: 'Fixtures', iconClass: 'fa fa-calendar fa-2x', link: '/dashboard/fixtures'},
      {name: 'Teams', iconClass: 'fa fa-users fa-2x', link: '/dashboard/teams'},
      {name: 'Leagues', iconClass: 'fa fa-list-alt fa-2x', link: '/dashboard/leagues'},
      {name: 'Account', iconClass: 'fa fa-cog fa-2x', link: '/dashboard/account'},
      {name: 'Logout', iconClass: 'fa fa-power-off fa-2x', action: this.onLogout},
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

  primaryMenuStyle = () => {
    const primaryMenuHeight = `${document.getElementsByClassName('dashboard-menu-sidebar')[0].querySelector('ul').children.length *  36}px`

    if (screen.width > 1024) {
      return {'max-height': primaryMenuHeight}
    } else if (this.menuVisible) {
      return {'max-height': primaryMenuHeight}
    } else {
      return {'max-height': '0'};
    }
  }

  onLogout = () => {
    this.globalService.notification.show({message: 'Logout successful'})
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
