import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarMenu = [
    {name: 'Живая лента', link: '/live-tape'},
    {name: 'Финансовый обзор', link: '/overview'},
    {name: 'Поступления', link: '/actual-income'},
    {name: 'Расходы', link: '/actual-costs'},
    {name: 'Должники', link: '/backward-arrears'},
    {name: 'Справочники', link: '/directory'},
    {name: 'Настройки', link: '/settings'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
