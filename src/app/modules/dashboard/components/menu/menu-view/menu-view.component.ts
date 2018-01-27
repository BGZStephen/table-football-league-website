import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-menu-view',
  templateUrl: './menu-view.component.html',
})
export class MenuViewComponent implements OnInit {

  currentSubmenuActive: number = -1;
  menuVisible: boolean = false;
  menuItems: Array<object> = [];

  constructor(
    private globalService: GlobalService,
    private router: Router,
  ) {}

  ngOnInit() {}

  toggleSubmenuActive = (index) => {
    if (index === this.currentSubmenuActive) {
      this.currentSubmenuActive = -1;
    } else {
      this.currentSubmenuActive = index;
    }
  }

  submenuActiveStyle = (index) => {
    if (index === this.currentSubmenuActive && document.getElementsByClassName('navbar-submenu')[index]) {
      const height = document.getElementsByClassName('navbar-submenu')[index].clientHeight;
      return {'height': `${68 + height}px`}
    } else {
      return {'height': '68px'};
    }
  }

  toggleMenuVisible = () => {
    this.menuVisible = !this.menuVisible;
  }

  menuResizeToggle = () => {
    if (screen.width > 1024) {
      this.menuVisible = true;
    } else {
      this.menuVisible = false;
    }
  }

  primaryMenuStyle = () => {
    if (screen.width > 1024) {
      return {'max-height': `100vh`}
    } else if (this.menuVisible) {
      return {'max-height': `100vh`}
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
