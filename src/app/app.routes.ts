import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/guards/auth.guard';

import * as website from 'app/modules/website/components/website-components-barrel';
import * as dashboard from 'app/modules/dashboard/components/dashboard-components-barrel';
import * as styles from 'app/modules/styles/components/styles-components-barrel';

const APP_ROUTES: Routes = [
  {path: 'login', component: website.LoginViewComponent},
  {path: 'register', component: website.RegisterViewComponent},
  {path: '', component: website.ViewWrapperComponent, children: [
    {path: '', component: website.HomeViewComponent},
    {path: 'contact', component: website.ContactViewComponent},
  ]},
  {path: 'dashboard', component: dashboard.ViewWrapperComponent, children: [
    {path: '', component: dashboard.HomeViewComponent},
    {path: 'teams', component: dashboard.TeamsViewComponent},
    {path: 'teams/:id', component: dashboard.TeamViewComponent},
    {path: 'leagues', component: dashboard.LeaguesViewComponent},
    {path: 'fixtures', component: dashboard.FixturesViewComponent},
    {path: 'account', component: dashboard.AccountEditComponent},
    {path: 'messages', component: dashboard.MessagesViewComponent},
  ], canActivate: [AuthGuard]},
  {path: '__styles__', component: styles.ViewWrapperComponent, children: [
    {path: '', component: styles.HomeViewComponent},
  ]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
