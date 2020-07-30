import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  constructor( private authService: AuthService) {
  }

  ngOnInit() {
    const potencialToken = localStorage.getItem('auth-token')
    if (potencialToken !== null) {
      this.authService.setToken(potencialToken)
    }
  }
}
