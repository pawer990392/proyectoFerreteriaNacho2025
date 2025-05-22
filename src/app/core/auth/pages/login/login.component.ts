import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent implements OnInit {

  isLoginMode = true;

  loginForm!: FormGroup;
  registerCustomer!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registerCustomer = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  toggleMode(mode: boolean) {
    this.isLoginMode = mode;
    console.log('Modo cambiado:', this.isLoginMode);
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login:', this.loginForm.value);
      // Aquí puedes poner la lógica de autenticación
    }
  }

  onRegister() {
    if (this.registerCustomer.valid) {
      console.log('Register:', this.registerCustomer.value);
      // Aquí puedes poner la lógica para registrar usuario
    }
  }
}
