import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-routable-icon',
  templateUrl: './routable-icon.component.html',
  styleUrls: ['./routable-icon.component.scss']
})
export class RoutableIconComponent implements OnInit {
  @Input() routerLink;
  @Input() src;
  @Input() alt;
  @Input() class;

  constructor() { }

  ngOnInit(): void {
  }

}
