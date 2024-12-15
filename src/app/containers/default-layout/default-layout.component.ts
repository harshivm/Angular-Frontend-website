import { Component } from '@angular/core';
import { AuthService } from './../../auth.service';
import { navItems } from './_nav';
import {p_navItems} from './p_nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  // public currentUser: any;
  public users: any = [];
  public role!: string;
  public navItems = navItems;
  public p_navItems = p_navItems;
  public userType = localStorage.getItem('userType');
  

  constructor(private auth: AuthService, private router: Router) { }
  isCustomerRoute(): boolean {
    return this.router.url.startsWith('/customer');
  }
  
  isPartnerRoute(): boolean {
    return this.router.url.startsWith('/partner');
  }
  // currentUser(): boolean {
  //   return this.router.url.startsWith('/navItems') || this.router.url.startsWith('/p_navItems');  
  // }
}
