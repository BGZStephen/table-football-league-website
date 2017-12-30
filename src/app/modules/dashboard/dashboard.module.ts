import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';
import * as dashboard from 'app/modules/dashboard/components/dashboard-components-barrel';
import * as panels from 'app/modules/dashboard/components/panel-components-barrel';

@NgModule({
  declarations: [
    dashboard.DashboardHomeComponent,
    dashboard.DashboardNavbarComponent,
    dashboard.DashboardViewWrapperComponent,
    dashboard.DashboardFixturesComponent,
    dashboard.DashboardTeamsViewComponent,
    dashboard.DashboardTeamsCreateComponent,
    dashboard.DashboardLeaguesComponent,
    dashboard.DashboardAccountComponent,
    dashboard.DashboardNavbarComponent,
    panels.PanelNoTeamsComponent,
    panels.PanelAddTeamComponent,
    panels.PanelCreateTeamComponent,
    panels.PanelNoLeaguesComponent,
    panels.PanelAddLeagueComponent,
    panels.PanelNoFixturesComponent,
    panels.PanelAddFixtureComponent,
    panels.PanelAccountManageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class DashboardModule { }
