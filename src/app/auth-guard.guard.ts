import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateFn
} from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { session } from './utils/session';

Injectable({ providedIn: 'root' })

export const AuthGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) => {
        // const router: Router = inject(Router);
        // const protectedRoutes: string[] = ['/dashboard', '/customer', '/partner'];
        // return protectedRoutes.includes(state.url) && !session
        //     ? router.navigate(['/'])
        //     : false;
        return false;
    }