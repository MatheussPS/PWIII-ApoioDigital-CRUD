import { Component } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home-page/home.component';
import { HistoricoComponent } from './historico-CRUD/historico/historico.component';
import { CreateInputComponent } from './historico-CRUD/create-input/create-input.component';
import { FuncionalidadePageComponent } from './funcionalidade-page/funcionalidade-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LoginPageComponent, HomeComponent, HistoricoComponent, CreateInputComponent, FuncionalidadePageComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApoioDigitalCRUD';

  accessFunc: boolean = true;
  access: boolean = false;
  nome: string = '';


  Autenticar(value: boolean) {
    this.access = value
  }

  GetUserName(value: string) {
    this.nome = value
  }

  AcessarFuncionalidades(value: boolean) {
    this.accessFunc = value;
  }

  Back() {
    this.accessFunc = true;
  }
}
