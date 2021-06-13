import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { 
  }

  public isAuthenticated() {
    // TODO : Check local storage
    return true;
  }

  public authenticate(username: string, password: string): boolean {
    // TODO : Call web-service to validate token
    // TODO : Save authentication token to local storage
    // TODO : Return result
    return true;
  }

  public logout(): void {
    // TODO : Call web-service to invalidate token
    // TODO : Delete authentication token in local storage
  }
}
