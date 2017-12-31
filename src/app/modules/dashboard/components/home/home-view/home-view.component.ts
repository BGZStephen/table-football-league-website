import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-dashboard-home-view',
  templateUrl: './home-view.component.html',
})
export class HomeViewComponent implements OnInit {

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit() {}

}
