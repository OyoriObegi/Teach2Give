import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin() {
    console.log('Login clicked with:', this.email, this.password);
    alert('Logged in (mock)');
  }

}
