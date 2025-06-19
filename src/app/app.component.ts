import { Component } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home-page/home.component';
import { HistoricoComponent } from './historico-CRUD/historico/historico.component';
import { CreateInputComponent } from './historico-CRUD/create-input/create-input.component';
import { FuncionalidadePageComponent } from './funcionalidade-page/funcionalidade-page.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LoginPageComponent, HomeComponent, HistoricoComponent, CreateInputComponent, FuncionalidadePageComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApoioDigitalCRUD';
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        this.showHeader = !currentUrl.includes('/login');
      }
    });
  }

}
