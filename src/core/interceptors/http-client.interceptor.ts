import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ProgressBarService } from 'src/service/progress-bar.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private progressBarService: ProgressBarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          this.progressBarService.start();
          return event;
        },
        error: (error) => {
          this.progressBarService.stop();
          return error;
        },
        complete: () => {
          this.progressBarService.stop();
        },
      })
    );
  }
}
