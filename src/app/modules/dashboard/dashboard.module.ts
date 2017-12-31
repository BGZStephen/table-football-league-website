import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';

import { UsersSearchComponent } from 'app/components/users/users-search/users-search.component';
import * as dashboardComponents from 'app/modules/dashboard/components/dashboard-components-barrel';
import * as panels from 'app/modules/dashboard/components/panel-components-barrel';

@NgModule({
  declarations: [
    dashboardComponents.HomeViewComponent,
    dashboardComponents.NavbarComponent,
    dashboardComponents.ViewWrapperComponent,
    dashboardComponents.FixturesViewComponent,
    dashboardComponents.TeamsViewComponent,
    dashboardComponents.TeamsCreateComponent,
    dashboardComponents.LeaguesViewComponent,
    dashboardComponents.AccountEditComponent,
    dashboardComponents.NavbarComponent,
    panels.PanelNoTeamsComponent,
    panels.PanelAddTeamComponent,
    panels.PanelCreateTeamComponent,
    panels.PanelNoLeaguesComponent,
    panels.PanelAddLeagueComponent,
    panels.PanelNoFixturesComponent,
    panels.PanelAddFixtureComponent,
    panels.PanelAccountEditComponent,
    UsersSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class DashboardModule { }
