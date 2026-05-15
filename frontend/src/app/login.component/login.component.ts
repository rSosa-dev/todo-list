import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = 'Raúl Sosa'
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor(
    private readonly router: Router,
    private readonly hardcodedAuthService: HardcodedAuthService) { }

  handleLogin() {
    if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
