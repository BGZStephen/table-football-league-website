import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';
import * as dashboard from 'app/modules/dashboard/components/dashboard-components-barrel';
import { PanelAddTeamComponent } from 'app/components/teams/panel-add-team/panel-add-team.component';
import { PanelNoTeamsComponent } from 'app/components/teams/panel-no-teams/panel-no-teams.component';
import { PanelNoLeaguesComponent } from 'app/components/leagues/panel-no-leagues/panel-no-leagues.component';
import { PanelAddLeagueComponent } from 'app/components/leagues/panel-add-league/panel-add-league.component';
import { PanelNoFixturesComponent } from 'app/components/fixtures/panel-no-fixtures/panel-no-fixtures.component';
import { PanelAddFixtureComponent } from 'app/components/fixtures/panel-add-fixture/panel-add-fixture.component';
import { PanelAccountManageComponent } from 'app/components/account/panel-account-manage/panel-account-manage.component';

@NgModule({
  declarations: [
    dashboard.DashboardHomeComponent,
    dashboard.DashboardNavbarComponent,
    dashboard.DashboardViewWrapperComponent,
    dashboard.DashboardFixturesComponent,
    dashboard.DashboardTeamsComponent,
    dashboard.DashboardLeaguesComponent,
    dashboard.DashboardAccountComponent,
    dashboard.DashboardNavbarComponent,
    PanelNoTeamsComponent,
    PanelAddTeamComponent,
    PanelNoLeaguesComponent,
    PanelAddLeagueComponent,
    PanelNoFixturesComponent,
    PanelAddFixtureComponent,
    PanelAccountManageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class DashboardModule { }
