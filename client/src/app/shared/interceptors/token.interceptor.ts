import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  intercept(
    request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Добавляем свою логику при перехвате запроса
    if (this.authService.isAuthenticated()) {
      request = request.clone({ //обновляем текущий request, чтобы он не мутировал
        setHeaders: {
          Authorization: this.authService.getToken()
        }
      })
    }

    //Отправляем запрос с добавленной логикой или данными
    return next.handle(request)
      .pipe(
        catchError(
          (error: HttpErrorResponse) => this.handleAuthError(error)
        )
      )
  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401) {
      this.router.navigate(['/login'], {
        queryParams: {
          sessionFailed: true
        }
      })
    }
    return throwError(error)
  }
}
