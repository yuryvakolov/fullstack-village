import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actual-income-page',
  templateUrl: './actual-income-page.component.html',
  styleUrls: ['./actual-income-page.component.scss']
})
export class ActualIncomePageComponent implements OnInit {
  companyName = 'ТСН "Рига"';
  currentDate = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
