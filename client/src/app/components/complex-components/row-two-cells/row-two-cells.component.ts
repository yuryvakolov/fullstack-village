import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row-two-cells',
  templateUrl: './row-two-cells.component.html',
  styleUrls: ['./row-two-cells.component.scss']
})
export class RowTwoCellsComponent implements OnInit {

  @Input() openExpenseGroup;
  @Input() name;
  @Input() group;

  constructor() {
  }

  ngOnInit(): void {
  }

}
