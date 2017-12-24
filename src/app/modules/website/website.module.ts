import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutes } from 'app/app.routes';
import { FormsModule } from '@angular/forms';
import * as components from 'app/modules/website/components/website-components-barrel';

@NgModule({
  declarations: [
    components.WebsiteNavbarComponent,
    components.WebsiteHomeComponent,
    components.WebsiteLoginComponent,
    components.WebsiteViewWrapperComponent,
    components.WebsiteRegisterComponent,
    components.WebsiteContactComponent,
    components.WebsiteBrandGuidelinesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutes,
    FormsModule,
  ],
  providers: [],
})
export class WebsiteModule { }
