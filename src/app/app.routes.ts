import { RouterModule, Routes } from '@angular/router';

import * as website from 'app/components/website-components-barrel';

const APP_ROUTES: Routes = [
  {path: '', component: website.WebsiteViewWrapperComponent, children: [
    {path: '', component: website.WebsiteHomeComponent},
    {path: 'login', component: website.WebsiteLoginComponent},
    {path: 'register', component: website.WebsiteRegisterComponent},
    {path: 'contact', component: website.WebsiteContactComponent},
    {path: '__styles__', component: website.WebsiteBrandGuidelinesComponent},
  ]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
