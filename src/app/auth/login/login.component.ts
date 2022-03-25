import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup = new FormGroup({
    'userName': new FormControl('',[Validators.required,Validators.minLength(6)]),
    'password': new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get userName() {
    return this.loginForm.get('userName');
  } 

  onSubmit() {

  }
}
