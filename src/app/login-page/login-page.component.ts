import { Component, EventEmitter, Output, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  standalone: true
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

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  Autenticar(){
    if(this.loginForm.value.username == this.credentials.username && this.loginForm.value.password == this.credentials.password){
      this.access.emit(true)
      this.GetUserName()
      this.router.navigate(['/home']);
      this.router.navigate(['/home'], { state: { nomeUser: this.credentials.username } });
    }else{
      this.access.emit(false)
    }
  }

  
  Show(){
    if(this.loginForm.get('password')?.value == ""){
      this.tipoInputPassword = "password"
      return
    }

    this.tipoInputPassword = this.tipoInputPassword == "password"? "text": "password"
  }

  GetUserName(){
    this.nome.emit(this.credentials.username)
  }

}
