import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInterface } from '../../interfaces/login.interface';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  isFormError: boolean = false;
  errorMessage: string = 'Formulario Incompleto';
  loginForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private loginS: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login() {
    this.isFormError = false;
    if (this.loginForm.invalid) {
      this.isFormError = true;
      this.errorMessage = 'Formulario Incompleto';
      return;
    }
    const loginData: LoginInterface = this.loginForm.value;
    this.loginS.login(loginData).subscribe({
      next: (res) => {
        if (res) {
          this.isFormError = false;
          this.router.navigateByUrl('/app/inicio')
        } else {
          this.isFormError = true;
          this.errorMessage = 'Usuario o contraseña incorrecta';
        }
      },
    });
  }
}
