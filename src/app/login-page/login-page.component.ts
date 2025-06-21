import { Component, EventEmitter, Output, } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { credentials } from './credentials-data';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  standalone: true
})
export class LoginPageComponent {
  wrong: boolean = false
  @Output() access = new EventEmitter();
  tipoInputPassword = "password"

  @Output() nome =  new EventEmitter();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.loginForm = this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  Autenticar(){
    sessionStorage.setItem('nomeUser', credentials.username);
    
    if(this.loginForm.value.username == credentials.username && this.loginForm.value.password == credentials.password){
      this.router.navigate(['/home']);
      
    }else{
      this.wrong = true
    }
  }

  
  Show(){
    if(this.loginForm.get('password')?.value == ""){
      this.tipoInputPassword = "password"
      return
    }

    this.tipoInputPassword = this.tipoInputPassword == "password"? "text": "password"
  }

  EsqueceuSenha(){
    alert(`Esqueceu a senha, senhor(a)? Aqui vai hein... Sua senha é ${credentials.password}`)
  }

  // GetUserName(){
  //   this.nome.emit(credentials.username)
  // }

}
