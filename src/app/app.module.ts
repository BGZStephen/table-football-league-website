import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GlobalService } from './services/global.service';
import { RedirectionService } from './services/redirection.service';
import { NotificationService } from './services/notification.service';
import { ErrorHandlerService } from './services/error-handler.service';

import { PublicApiService } from './services/public-api.service'
import { DashboardApiService } from './services/dashboard-api.service'

import { AuthGuard } from 'app/guards/auth.guard';

import { AppRoutes } from './app.routes';

import { WebsiteModule } from 'app/modules/website/website.module';
import { DashboardModule } from 'app/modules/dashboard/dashboard.module';
import { StylesModule } from 'app/modules/styles/styles.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    WebsiteModule,
    DashboardModule,
    StylesModule,
  ],
  providers: [AuthGuard, GlobalService, PublicApiService, DashboardApiService, NotificationService, RedirectionService, ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
