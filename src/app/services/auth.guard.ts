import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import * as _ from 'lodash';

@Injectable()
export class AuthorizationGuard implements CanActivate {

    constructor(private allowedRoles: string[], private authService:AuthService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot):Observable<boolean> {

        return this.authService.user$
            .map(user => _.intersection(user.roles, this.allowedRoles).length > 0)
            .first()
            .do(allowed => {
                console.log(allowed);
                if(!allowed) {
                    this.router.navigate(['/lessons']);
                }
            });
    }

}