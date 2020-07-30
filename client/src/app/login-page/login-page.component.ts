import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../_services/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ToastService} from "../_services/toast.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  form: FormGroup
  aSub: Subscription

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })

    this.route.queryParams.subscribe((params) => {
      if (params['registered']) {
        this.toastService.show('Теперь вы можете зайти в систему, используя свои данные')
      } else if (params['accessDenied']) {
        this.toastService.show('Для начала авторизуйтесь в системе')
      } else if (params['sessionFailed']) {
        this.toastService.show('Пожалуйста войдите в систему снова')
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
    }
    this.aSub = this.authService.login(user).subscribe(
      () => this.router.navigate(['overview']), //todo: Создать страницу и роут 'overview'
      error => {
        this.toastService.show(error.error.message)
        this.form.enable()
      }
    )
  }
}
