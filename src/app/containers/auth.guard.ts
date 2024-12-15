import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserRoleService } from '../user-role.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userRoleService: UserRoleService,
    private router: Router
  ) {}


  canActivate(): Observable<boolean> {
    return this.userRoleService.getUserRole().pipe(
      map((userRole: string) => {
        if (userRole === 'customer' || userRole === 'partner') {
          return true;
        } else {
          this.router.navigate(['/unauthorized']);
          return false;
        }
      })
    );
  }
}





// // auth.guard.ts
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { UserRoleService } from '../user-role.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private userRoleService: UserRoleService,
//     private router: Router
//   ) {}

//   canActivate(): boolean {
//     const userRole = this.userRoleService.getUserRole();

//     if (userRole === 'customer' || userRole === 'partner') {
//       return true;
//     } else {
//       this.router.navigate(['/unauthorized']);
//       return false;
//     }
//   }
// }
