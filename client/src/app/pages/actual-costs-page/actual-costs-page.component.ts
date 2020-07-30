import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actual-costs-page',
  templateUrl: './actual-costs-page.component.html',
  styleUrls: ['./actual-costs-page.component.scss']
})
export class ActualCostsPageComponent implements OnInit {
  companyName = 'ТСН "Рига"';
  currentDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
