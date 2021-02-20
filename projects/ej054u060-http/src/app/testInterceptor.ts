import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      const modReq = req.clone({headers: req.headers.set('tI_Autorizacion','token')});
      return next.handle(modReq);
    }
}
