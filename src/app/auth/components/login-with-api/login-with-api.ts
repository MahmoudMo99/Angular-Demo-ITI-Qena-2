import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-with-api',
  imports: [ReactiveFormsModule],
  templateUrl: './login-with-api.html',
  styleUrl: './login-with-api.css',
})
export class LoginWithApi {
  private auth = inject(Auth);
  private router = inject(Router);

  loginForm!: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('emilys'),
      password: new FormControl('emilyspass'),
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    this.auth.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.router.navigate(['/posts']);
      },
    });
  }
}
