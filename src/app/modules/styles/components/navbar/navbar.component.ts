import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  currentSubmenuActive: number = -1;
  menuVisible: boolean = false;
  menuItems: Array<object> = [
    {name: 'Home', iconClass: 'fa fa-home fa-lg', link: '/'},
    {name: 'Profile', iconClass: 'fa fa-user fa-lg', link: '/user'},
    {name: 'Messages', iconClass: 'fa fa-envelope fa-lg', link: '/messages'},
    {name: 'UI Kits', iconClass: 'fa fa-briefcase fa-lg', link: '/ui-kits'},
    {name: 'Layouts', iconClass: 'fa fa-th-large fa-lg', link: '/ui-kits'},
    {name: 'Tables', iconClass: 'fa fa-table fa-lg', link: '/ui-kits'},
    {name: 'Fonts', iconClass: 'fa fa-font fa-lg', link: '/ui-kits'},
    {name: 'Charts', iconClass: 'fa fa-chart-bar fa-lg', link: '/ui-kits'},
    {name: 'Login', iconClass: 'fa fa-sign-in-alt fa-lg', link: '/ui-kits'},
    {name: 'Maps', iconClass: 'fa fa-map-marker fa-lg', link: '/ui-kits'},
    {name: 'Extra', iconClass: 'fa fa-gift fa-lg', link: '/ui-kits'},
    {name: 'Levels', iconClass: 'fa fa-bolt fa-lg', link: '/ui-kits'},
  ]

  constructor() { }

  ngOnInit() {}

  toggleSubmenuActive(index) {
    if (index === this.currentSubmenuActive) {
      this.currentSubmenuActive = -1;
    } else {
      this.currentSubmenuActive = index;
    }
  }

  submenuActiveStyle(index) {
    if (index === this.currentSubmenuActive && document.getElementsByClassName('navbar-submenu')[index]) {
      const height = document.getElementsByClassName('navbar-submenu')[index].clientHeight;
      return {'height': `${68 + height}px`}
    } else {
      return {'height': '68px'};
    }
  }

  toggleMenuVisible() {
    this.menuVisible = !this.menuVisible;
  }

  menuResizeToggle() {
    if (screen.width > 1024) {
      this.menuVisible = true;
    } else {
      this.menuVisible = false;
    }
  }

  primaryMenuStyle() {
    if (screen.width > 1024) {
      return {'max-height': `100vh`}
    } else if (this.menuVisible) {
      return {'max-height': `100vh`}
    } else {
      return {'max-height': '0'};
    }
  }

}
