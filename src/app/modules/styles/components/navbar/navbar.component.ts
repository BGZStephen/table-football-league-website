import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  menuItems: Array<object> = [];

  constructor() { }

  ngOnInit() {
  }

}
