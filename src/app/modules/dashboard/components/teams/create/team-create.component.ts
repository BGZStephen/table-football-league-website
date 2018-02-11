import { Component, OnInit } from '@angular/core';
import { DashboardApiService } from 'app/services/dashboard-api.service';
import { GlobalService } from 'app/services/global.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
})
export class TeamCreateComponent implements OnInit {

  formValues = {
    teamName: {
      display: 'Team name',
      hasError: false,
      message: '',
    },
    users: {
      display: 'Players',
      hasError: false,
      message: '',
    },
  }
  team: object = {
    name: '',
    users: []
  }

  constructor(
    private dashboardApi: DashboardApiService,
    private globalService: GlobalService,
  ) {}

  ngOnInit() {
    this.populateCurrentUser();
  }

  populateCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.dashboardApi.users.get({
      params: {userId: user._id}
    })
    .subscribe(
      res => {
        this.team['users'].push(res);
      },
      error => {
        this.globalService.errorHandler.process(error);
      }
    )
  }

  addPlayer(player) {
    for (const user of this.team['users']) {
      if (user._id === player._id) {
        return this.globalService.notification.error({message: 'This player is already part of the team'})
      }
    }

    this.team['users'].push(player);
  }

  resetTeam() {
    this.team = {name: '', users: []};
    this.populateCurrentUser();
  }

  createTeam() {
    if (this.validateTeam()) {
      this.dashboardApi.teams.create({
        body: this.team
      })
      .subscribe(
        res => {
          this.globalService.notification.show({message: 'Team creatd successfully'});
          this.resetTeam();
        },
        error => {
          this.globalService.errorHandler.process(error);
        }
      )
    } else {
      return;
    }
  }

  validateTeam() {
    let hasError;
    if (!this.team['name']) {
      this.formValues.teamName.hasError = true;
      this.formValues.teamName.message = 'Team name is required';
      hasError = true;
    }

    if (this.team['users'].length < 2) {
      this.formValues.users.hasError = true;
      this.formValues.users.message = 'A team must have 2 players';
      hasError = true;
    }

    return hasError ? false : true;
  }
}
