import { Component, importProvidersFrom } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public LoginForm!: FormGroup;
  USERNAME: any;
  password: any;
  // public LoginForm = new FormGroup({
  //   loginId: new FormControl("", [Validators.required]),
  //   password: new FormControl("", [Validators.required]),
  // });

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.formIni();
  }

  public formIni() {
    this.LoginForm = this.fb.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    this.login();
  }

  login() {
    this.USERNAME = this.LoginForm.value.loginId;
    this.password = this.LoginForm.value.password;
    console.log(this.USERNAME);
    console.log(this.password);
    const userType = this.authService.login(this.USERNAME, this.password);

    if (userType == 'customer') {
      // Redirect to customer dashboard
      this.navigateToCustomerDashboard();
    } else if (userType == 'partner') {
      // Redirect to partner dashboard
      this.navigateToPartnerDashboard();
    } else if (userType == 'admin') {
      // Redirect to Admin dashboard
      this.navigateToAdminDashboard();
    } else {
      // Invalid credentials, you can show an error message
      alert('Invalid login credentials. Please try again.');
    }

    localStorage.setItem('userType', userType);

  }

  private navigateToCustomerDashboard() {
    this.router.navigate(['/customer']);
    // Implement navigation to customer dashboard
    alert('Redirecting to Customer Dashboard');
  }

  private navigateToPartnerDashboard() {
    this.router.navigate(['/partner']);
    // Implement navigation to partner dashboard
    alert('Redirecting to Partner Dashboard');
  }
  private navigateToAdminDashboard() {
    this.router.navigate(['/admin']);
    // Implement navigation to Admin dashboard
    alert('Redirecting to Admin Dashboard');
  }

  navigateToCusRegister() {
    this.router.navigate(['/cus-register']);
  }

  navigateToPartnerRegister() {
    this.router.navigate(['/register']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToReset() {
    this.router.navigate(['/reset']);

  }
}