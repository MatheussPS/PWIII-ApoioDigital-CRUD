import { Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FuncionalidadePageComponent } from './funcionalidade-page/funcionalidade-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'funcionalidade', component: FuncionalidadePageComponent },
  { path: 'contato', component: ContactPageComponent }
];
