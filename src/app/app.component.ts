import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPageComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApoioDigitalCRUD';

  access: boolean = false;
  nome: string = '';
  a = "oi"

  Autenticar(value:boolean) {
    this.access = value
  }

  GetUserName(value: string){
    this.nome = value
  }
}
