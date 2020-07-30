import { Component, OnInit } from '@angular/core';
import {Finance} from "../../_models/classes";
import {OverviewService} from "../../_services/overview.service";

@Component({
  selector: 'app-approved-budget-page',
  templateUrl: './approved-budget-page.component.html',
  styleUrls: ['./approved-budget-page.component.scss']
})
export class ApprovedBudgetPageComponent implements OnInit {
  companyName = 'ТСН "Рига"';
  currentDate = Date.now();
  finance = new Finance(0);
  activeView = 'year';

  constructor(
    private overviewService: OverviewService,
  ) { }

  ngOnInit(): void {
    this.loadFianceAnalytic();
  }

  loadFianceAnalytic() {
    this.overviewService.loadFinancialAnalytics().subscribe(
      finance => {
        this.finance = finance;
      }
    );
  }

  onChangeDetalisationView(view: string) {
    this.activeView = view;
  }
}
