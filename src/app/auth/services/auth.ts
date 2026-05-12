import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILoginRequest } from '../models/ilogin-request';
import { Observable, tap } from 'rxjs';
import { ILoginResponse } from '../models/ilogin-response';
import { API_URLS } from '../../constants/API_URLS';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);

  private tokenKey = 'token';

  login(loginData: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(API_URLS.login, loginData).pipe(
      tap((response) => {
        this.saveToken(response.accessToken);
      }),
    );
  }

  saveToken(tokenValue: string) {
    localStorage.setItem(this.tokenKey, tokenValue);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  deleteToken() {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();

    // if (this.getToken()) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
}
