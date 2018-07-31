import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CienabobyComponent } from './cienaboby/cienaboby.component';
import { ContentComponent } from './content/content.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenLargeDirective } from './screen-large.directive';
import { ScreenBelowLargeDirective } from './screen-below-large.directive';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';

@NgModule({
  declarations: [
    AppComponent,
    CienabobyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLargeDirective,
    ScreenBelowLargeDirective,
    MenuComponent,
    MenuItemComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    PopupMenuComponent,
    CountryMaintComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
