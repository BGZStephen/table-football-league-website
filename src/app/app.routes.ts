import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';

import * as website from 'app/modules/website/components/website-components-barrel';
import * as dashboard from 'app/modules/dashboard/components/dashboard-components-barrel';

const APP_ROUTES: Routes = [
  {path: '', component: website.WebsiteViewWrapperComponent, children: [
    {path: '', component: website.WebsiteHomeViewComponent},
    {path: 'login', component: website.WebsiteLoginViewComponent},
    {path: 'register', component: website.WebsiteRegisterViewComponent},
    {path: 'contact', component: website.WebsiteContactViewComponent},
    {path: '__styles__', component: website.WebsiteBrandGuidelinesComponent},
  ]},
  {path: 'dashboard', component: dashboard.DashboardViewWrapperComponent, children: [
    {path: '', component: dashboard.DashboardHomeComponent},
    {path: 'teams', component: dashboard.DashboardTeamsViewComponent},
    {path: 'teams/create', component: dashboard.DashboardTeamsCreateComponent},
    {path: 'leagues', component: dashboard.DashboardLeaguesComponent},
    {path: 'fixtures', component: dashboard.DashboardFixturesComponent},
    {path: 'account', component: dashboard.DashboardAccountComponent},
  ], canActivate: [AuthGuard]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
