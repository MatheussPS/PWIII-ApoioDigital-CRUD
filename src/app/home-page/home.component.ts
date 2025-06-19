import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { credentials } from '../login-page/credentials-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nomeUser = ""
  @Output() accessFunc = new EventEmitter()


  constructor(private router: Router) {
    const nomeSalvo = sessionStorage.getItem('nomeUser');
    if (nomeSalvo && nomeSalvo.trim() !== '') {
      this.nomeUser = nomeSalvo;
    }

  }
}

