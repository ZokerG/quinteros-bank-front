import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from '../../service/bakend.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [CardModule, RouterModule, PasswordModule, InputTextModule, DropdownModule, AnimateOnScrollModule, ButtonModule, InputNumberModule, HttpClientModule, ReactiveFormsModule, MessagesModule, ToastModule],
  providers: [BackendService, MessageService],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent implements OnInit {

  signUpForm!: FormGroup;
  documentType: any = [
    { name: 'C.C', code: 'NY' },
    { name: 'T.I', code: 'RM' },
    { name: 'PASAPORTE', code: 'LDN' },
];

  ngOnInit() {
}

  constructor(
    private router: Router,
    private backendService: BackendService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
    this.initForm();
   }

  singIn() {
    this.router.navigate(['/login']);
  }

  initForm(){
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  signUp(){
    this.backendService.signUp(this.signUpForm.value).subscribe({
      next: (response) => {
        this.signUpForm.reset();
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Registro exitoso'});
        this.singIn();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
