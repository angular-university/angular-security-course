
import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {User} from "../model/user";
import * as _ from 'lodash';
import {Subscription} from "rxjs/Subscription";



@Directive({
    selector: "[rbacAllow]"
})
export class RbacAllow implements OnDestroy {

    user: User;
    sub:Subscription;
    allowedRoles: string[];

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private authService: AuthService) {

        this.sub = authService.user$.subscribe(user => {
            this.user = user;
            this.showIfUserAllowed();
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    @Input()
    set rbacAllow(allowedRoles:string[]) {
        this.allowedRoles = allowedRoles;
        this.showIfUserAllowed();

    }

    showIfUserAllowed() {

        console.log("calling showIfUserAllowed()");

        if (!this.allowedRoles || this.allowedRoles.length == 0 || !this.user) {
            this.viewContainer.clear();
            console.log("exiting", this.allowedRoles, this.user);
            return;
        }

        const isUserAllowed = _.intersection(this.user.roles, this.allowedRoles).length > 0;

        if (isUserAllowed) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }

    }

}

