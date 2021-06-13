import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  login() {
    console.log("Username : " + this.form.controls['username'].value);
    console.log("Password : " + this.form.controls['password'].value);
  }
}
