import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  @Output() access = new EventEmitter();
  tipoInputPassword = "password"

  credentials = {
    username: "matheus01",
    password: "password123"
  }

  @Output() nome =  new EventEmitter();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  Autenticar(){
    if(this.loginForm.value.username == this.credentials.username && this.loginForm.value.password == this.credentials.password){
      this.access.emit(true)
      this.GetUserName()
    }else{
      this.access.emit(false)
    }
  }

  CheckCredentials(){
    if(this.loginForm.value.username.split().strip() == "" || this.loginForm.value.password.split().strip() == ""){
      return false
    }
    return true
  }

  Show(){
    this.tipoInputPassword = this.tipoInputPassword == "password"? "text": "password"
  }

  GetUserName(){
    this.nome.emit(this.credentials.username)
  }
}
