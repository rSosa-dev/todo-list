import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = 'Raúl Sosa'
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(private router: Router) { }

  handleLogin() {
    // console.log(this.username);

    if(this.username === "Raúl Sosa" && this.password === "dummy") {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username])

      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
