import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private customerCredentials = { loginId: 'c123', password: '123' };
  private partnerCredentials = { loginId: 'p456', password: '456' };
  private adminCredentials = { loginId: 'a111', password: '111' };


  login(loginId: string, password: string): string {
    if (loginId === this.customerCredentials.loginId && password === this.customerCredentials.password) {
      return 'customer'; // Return a user type identifier
    }
    else if (loginId === this.partnerCredentials.loginId && password === this.partnerCredentials.password) {
      return 'partner'; // Return a user type identifier
    }
    else if (loginId === this.adminCredentials.loginId && password === this.adminCredentials.password) {
      return 'admin'; // Return a user type identifier
    }
    else {
      return ''; // Invalid credentials
    }
  }
}
