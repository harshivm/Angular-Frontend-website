import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
})
export class ResetComponent implements OnInit {
  ResetForm!: FormGroup;
  forbiddenEmails: any;
  errorMessage!: string;
  successMessage!: string;
  IsvalidForm = true;
  authService: any;

  constructor(
    // private authService: AuthService,
    private router: Router,
  ) {

  }


  ngOnInit() {

    this.ResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }


  ResetUser(form: { valid: any; }) {
    console.log(form)
    if (form.valid) {
      this.IsvalidForm = true;
      this.authService.Reset(this.ResetForm.value).subscribe(
        (        data: any) => {
          this.ResetForm.reset();
          this.successMessage = "Reset password link send to email sucessfully.";
          setTimeout(() => {
            // this.successMessage = null;
            this.router.navigate(['sign-in']);
          }, 3000);
        },
        (        err: { error: { message: string; }; }) => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } else {
      this.IsvalidForm = false;
    }
  }
}