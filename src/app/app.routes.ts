import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';

import * as websiteComponents from 'app/modules/website/components/website-components-barrel';
import * as dashboardComponents from 'app/modules/dashboard/components/dashboard-components-barrel';

const APP_ROUTES: Routes = [
  {path: '', component: websiteComponents.ViewWrapperComponent, children: [
    {path: '', component: websiteComponents.HomeViewComponent},
    {path: 'login', component: websiteComponents.LoginViewComponent},
    {path: 'register', component: websiteComponents.RegisterViewComponent},
    {path: 'contact', component: websiteComponents.ContactViewComponent},
    {path: '__styles__', component: websiteComponents.BrandGuidelinesComponent},
  ]},
  {path: 'dashboard', component: dashboardComponents.ViewWrapperComponent, children: [
    {path: '', component: dashboardComponents.HomeViewComponent},
    {path: 'teams', component: dashboardComponents.TeamsViewComponent},
    {path: 'teams/create', component: dashboardComponents.TeamsCreateComponent},
    {path: 'leagues', component: dashboardComponents.LeaguesViewComponent},
    {path: 'leagues/create', component: dashboardComponents.LeaguesCreateComponent},
    {path: 'fixtures', component: dashboardComponents.FixturesViewComponent},
    {path: 'account', component: dashboardComponents.AccountEditComponent},
  ], canActivate: [AuthGuard]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
