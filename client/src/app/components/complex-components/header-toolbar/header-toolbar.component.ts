import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(event: Event) {
    event.preventDefault()
    this.authService.logout()
    this.router.navigate(['/'])
  }

  onHome(event: Event) {
    event.preventDefault()
    this.router.navigate(['/overview'])
  }
}
