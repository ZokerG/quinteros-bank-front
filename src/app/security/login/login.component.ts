import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Router, RouterModule } from '@angular/router';
import { BackendService } from '../../service/bakend.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    CardModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [BackendService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  valCheck: string[] = ['remember'];
  singInForm!: FormGroup;
  password!: string;
  clientId: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private backendService: BackendService
  ) {
    this.singInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  login() {
    if (this.singInForm.valid) {
      this.backendService.signIn(this.singInForm.value).subscribe(
        (response) => {
          this.clientId = response?.body.clientId;
          localStorage.setItem('clientId', this.clientId);
          localStorage.setItem('token', response.body.jwt);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  singUp() {
    this.router.navigate(['/sing-up']);
  }

}
