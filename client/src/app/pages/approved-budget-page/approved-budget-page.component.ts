import { Component, OnInit } from '@angular/core';
import {ExpensesCategory, Finance} from "../../_models/classes";
import {ExpensesService} from "../../_services/expenses.service";

@Component({
  selector: 'app-approved-budget-page',
  templateUrl: './approved-budget-page.component.html',
  styleUrls: ['./approved-budget-page.component.scss']
})
export class ApprovedBudgetPageComponent implements OnInit {
  companyName = 'ТСН "Рига"';
  currentDate = Date.now();
  expensesCategory = new ExpensesCategory('')
  categories
  activeView = 'year';

  constructor(
    private expensesService: ExpensesService,
  ) { }

  ngOnInit(): void {
    this.loadExpensesCategory();
  }

  loadExpensesCategory() {
    this.expensesService.loadExpensesCategory().subscribe(
      categories => {
        this.categories = categories;
      }
    );
  }

  onChangeDetalisationView(view: string) {
    this.activeView = view;
  }
}
