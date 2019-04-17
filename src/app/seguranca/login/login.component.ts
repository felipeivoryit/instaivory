import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo = 'Instraivory'

  loginForm: FormGroup

  constructor(private fb: FormBuilder,
              private router: Router,) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required]),  
      })
  }

  login(){
    this.router.navigate(['/home'])
  }

}
