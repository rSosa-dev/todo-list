import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    console.log("Is user logged? ", this.isUserLoggedIn());
    if(username === "Raúl Sosa" && password === "123") {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }
}
