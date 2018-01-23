import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';

import * as dashboardComponents from 'app/modules/dashboard/components/dashboard-components-barrel';
import * as panels from 'app/modules/dashboard/components/panel-components-barrel';

@NgModule({
  declarations: [
    dashboardComponents.HomeViewComponent,
    dashboardComponents.NavbarComponent,
    dashboardComponents.ViewWrapperComponent,
    dashboardComponents.FixturesViewComponent,
    dashboardComponents.TeamViewComponent,
    dashboardComponents.TeamsViewComponent,
    dashboardComponents.LeaguesViewComponent,
    dashboardComponents.AccountEditComponent,
    dashboardComponents.NavbarComponent,
    dashboardComponents.NotificationBarComponent,
    panels.PanelCreateTeamComponent,
    panels.PanelCurrentTeamsComponent,
    panels.PanelCreateLeagueComponent,
    panels.PanelCurrentLeaguesComponent,
    panels.PanelCurrentFixturesComponent,
    panels.PanelCreateFixtureComponent,
    panels.PanelSearchTeamsComponent,
    panels.PanelSearchLeaguesComponent,
    panels.PanelAccountEditComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class DashboardModule { }
