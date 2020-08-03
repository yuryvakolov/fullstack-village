import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./layouts/site-layout/site-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthGuard} from "./_guards/auth.guard";
import {OverviewPageComponent} from "./pages/overview-page/overview-page.component";
import {ActualCostsPageComponent} from "./pages/actual-costs-page/actual-costs-page.component";
import {ActualIncomePageComponent} from "./pages/actual-income-page/actual-income-page.component";
import {ApprovedBudgetPageComponent} from "./pages/approved-budget-page/approved-budget-page.component";
import {BackwardArrearsPageComponent} from "./pages/backward-arrears-page/backward-arrears-page.component";
import {ExpectedArrivalsPageComponent} from "./pages/expected-arrivals-page/expected-arrivals-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'overview', component: OverviewPageComponent},
      {path: 'actual-costs', component: ActualCostsPageComponent},
      {path: 'actual-income', component: ActualIncomePageComponent},
      {path: 'approved-budget', component: ApprovedBudgetPageComponent},
      {path: 'backward-arrears', component: BackwardArrearsPageComponent},
      {path: 'expected-arrivals', component: ExpectedArrivalsPageComponent},
    ]
  },
  {path: '404', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
