import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';
import * as dashboard from 'app/modules/dashboard/components/dashboard-components-barrel';
import { PanelAddTeamComponent } from 'app/components/teams/panel-add-team/panel-add-team.component';
import { PanelNoTeamsComponent } from 'app/components/teams/panel-no-teams/panel-no-teams.component';

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
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class DashboardModule { }
