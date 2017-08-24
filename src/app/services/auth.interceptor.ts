

import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor}
    from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler):Observable<HttpEvent<any>> {

        const token = localStorage.getItem("ID_TOKEN");

        if (token) {
            const clonedRequest = req.clone({
                headers: req.headers.set('Authorization Bearer', token)
            });
            console.log("new headers", clonedRequest.headers.keys());

            return next.handle(clonedRequest);

        }
        else {
            return next.handle(req);
        }

    }
}