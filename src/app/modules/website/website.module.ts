import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutes } from 'app/app.routes';
import { FormsModule } from '@angular/forms';
import * as websiteComponents from 'app/modules/website/components/website-components-barrel';

@NgModule({
  declarations: [
    websiteComponents.NavbarComponent,
    websiteComponents.HomeViewComponent,
    websiteComponents.LoginViewComponent,
    websiteComponents.LoginFormComponent,
    websiteComponents.ViewWrapperComponent,
    websiteComponents.RegisterViewComponent,
    websiteComponents.RegisterFormComponent,
    websiteComponents.ContactViewComponent,
    websiteComponents.ContactFormComponent,
    websiteComponents.HomeFeaturesComponent,
    websiteComponents.HomeActionsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutes,
    FormsModule,
  ],
  providers: [],
})
export class WebsiteModule { }
