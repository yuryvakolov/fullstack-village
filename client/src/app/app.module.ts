import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {SiteLayoutComponent} from './layouts/site-layout/site-layout.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {TokenInterceptor} from "./_interceptors/token.interceptor";
import {OverviewPageComponent} from './pages/overview-page/overview-page.component';
import {LoaderComponent} from './components/simple-components/loader/loader.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PageTitleComponent} from './components/simple-components/page-title/page-title.component';
import {DataCellComponent} from './components/simple-components/data-cell/data-cell.component';
import {RoutableIconComponent} from './components/simple-components/routable-icon/routable-icon.component';
import {HeaderToolbarComponent} from './components/complex-components/header-toolbar/header-toolbar.component';
import {RowFourCellsComponent} from './components/complex-components/row-four-cells/row-four-cells.component';
import {RowTwoCellsComponent} from './components/complex-components/row-two-cells/row-two-cells.component';
import {TopIconsBlockComponent} from './components/complex-components/top-icons-block/top-icons-block.component';
import {ActualCostsPageComponent} from './pages/actual-costs-page/actual-costs-page.component';
import {ActualIncomePageComponent} from './pages/actual-income-page/actual-income-page.component';
import {ApprovedBudgetPageComponent} from './pages/approved-budget-page/approved-budget-page.component';
import {BackwardArrearsPageComponent} from './pages/backward-arrears-page/backward-arrears-page.component';
import {ExpectedArrivalsPageComponent} from './pages/expected-arrivals-page/expected-arrivals-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import { SidebarComponent } from './components/complex-components/sidebar/sidebar.component';
import { TopMenuComponent } from './components/complex-components/top-menu/top-menu.component';
import { LiveTapePageComponent } from './pages/live-tape-page/live-tape-page.component';
import { DirectoryPageComponent } from './pages/directory-page/directory-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewPageComponent,
    LoaderComponent,
    PageTitleComponent,
    DataCellComponent,
    RoutableIconComponent,
    HeaderToolbarComponent,
    RowFourCellsComponent,
    RowTwoCellsComponent,
    TopIconsBlockComponent,
    ActualCostsPageComponent,
    ActualIncomePageComponent,
    ApprovedBudgetPageComponent,
    BackwardArrearsPageComponent,
    ExpectedArrivalsPageComponent,
    PageNotFoundComponent,
    SidebarComponent,
    TopMenuComponent,
    LiveTapePageComponent,
    DirectoryPageComponent,
    SettingsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'ru'
    },
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
