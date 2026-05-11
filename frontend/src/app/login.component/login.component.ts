import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  handleLogin() {
    // console.log(this.username);

    if(this.username === "Raúl Sosa" && this.password === "dummy") {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
