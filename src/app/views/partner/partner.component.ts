import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent {
  loginId: any = '';
  password: any = '';


  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.authService.login(this.loginId, this.password)) {
      this.router.navigate(['/partner-dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
