import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backward-arrears-page',
  templateUrl: './backward-arrears-page.component.html',
  styleUrls: ['./backward-arrears-page.component.scss']
})
export class BackwardArrearsPageComponent implements OnInit {
  companyName = 'ТСН "Рига"';
  currentDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
