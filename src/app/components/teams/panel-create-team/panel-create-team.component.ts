import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel-create-team',
  templateUrl: './panel-create-team.component.html',
})
export class PanelCreateTeamComponent implements OnInit {

  formValues = {
    teamName: {
      display: 'First name'
    },
    players: [],
  };

  constructor() { }

  ngOnInit() {
  }

}
