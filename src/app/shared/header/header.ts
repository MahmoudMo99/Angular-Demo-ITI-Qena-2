import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Auth } from '../../auth/services/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public auth = inject(Auth);
  private router = inject(Router);

  logout() {
    this.auth.deleteToken();
    this.router.navigate(['/login-with-api']);
  }
}
