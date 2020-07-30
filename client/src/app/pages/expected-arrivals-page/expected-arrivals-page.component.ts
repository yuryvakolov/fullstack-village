import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expected-arrivals-page',
  templateUrl: './expected-arrivals-page.component.html',
  styleUrls: ['./expected-arrivals-page.component.scss']
})
export class ExpectedArrivalsPageComponent implements OnInit {
  companyName = 'ТСН "Рига"';
  currentDate = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
