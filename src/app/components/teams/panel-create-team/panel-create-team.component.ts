import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-panel-create-team',
  templateUrl: './panel-create-team.component.html',
})
export class PanelCreateTeamComponent implements OnInit {

  formValues = {
    teamName: {
      display: 'Team name'
    },
    players: [],
  };
  searchUsers = true;

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.dashboardApi.users.get(user._id)
    .subscribe(
      res => {
        this.formValues.players.push(res);
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

  getPlayerPosition(index) {
    const player = this.formValues.players[index];
    if (player.position.striker && player.position.defender) {
      return '(Striker / Defender)';
    }

    if (player.position.striker) {
      return '(Striker)';
    }

    if (player.position.defender) {
      return '(Defender)';
    }
  }

  usersSearchClose() {
    this.searchUsers = false;
  }

  usersSearchOpen() {
    this.searchUsers = true;
  }

  onUserSelect(user) {
    this.formValues.players.push(user)
  }
}
