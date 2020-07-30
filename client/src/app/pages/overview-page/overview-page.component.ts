import { Component, OnInit } from '@angular/core';
import {OverviewService} from "../../_services/overview.service";
import {Finance} from "../../_models/classes";

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  companyName = 'ТСН "Рига"';
  currentDate = Date.now();
  finance = new Finance(0);

  constructor(
    private overviewService: OverviewService,
  ) {
    console.log(this.finance);
  }

  ngOnInit(): void {
    // this.loadFianceAnalytic();
  }

  // load temporary data
  loadFianceAnalytic() {
    this.overviewService.loadFinancialAnalytics().subscribe(
      finance => {
        this.finance = finance;
      }
    );
  }
}
