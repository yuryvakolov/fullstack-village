import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {
  @Input() labelBeforeDynamic;
  @Input() firstDynamicLabeltext;
  @Input() labelAfterDynamic;
  @Input() data;
  @Input() routerLink;
  @Input() class;
  @Input() showIcon = true;


  constructor() { }

  ngOnInit(): void {
  }

}
