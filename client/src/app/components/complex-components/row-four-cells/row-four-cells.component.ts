import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row-four-cells',
  templateUrl: './row-four-cells.component.html',
  styleUrls: ['./row-four-cells.component.scss']
})
export class RowFourCellsComponent implements OnInit {
  @Input() openExpenseGroup;
  @Input() name;
  @Input() group;

  constructor() { }

  ngOnInit(): void {
  }

}
