import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister() {
    console.log('Register clicked with:', {
      fullName: this.fullName,
      email: this.email,
      password: this.password
    });

    alert('Registered successfully (mock)');
  }

}
