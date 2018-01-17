import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from 'app/app.routes';
import * as stylesComponents from 'app/modules/styles/components/styles-components-barrel';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    stylesComponents.ViewWrapperComponent,
    stylesComponents.HomeViewComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutes,
  ],
  providers: [],
})
export class StylesModule { }
