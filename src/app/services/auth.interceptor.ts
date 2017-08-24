

import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor}
    from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>,
              next: HttpHandler):Observable<HttpEvent<any>> {

        const clonedRequest = req.clone({
            headers: req.headers.set(
                'Authorization Bearer',
                this.authService.getAuthToken())
        });

        console.log("new headers", clonedRequest.headers.keys());

        return next.handle(clonedRequest);
    }
}