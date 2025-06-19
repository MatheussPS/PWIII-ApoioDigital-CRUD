import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() nomeUser = ""
  @Output() accessFunc = new EventEmitter()

  AcessarFuncionalidades(){
    this.accessFunc.emit(false)
  }

  constructor(private router: Router) {
  const nav = this.router.getCurrentNavigation();
  this.nomeUser = nav?.extras?.state?.['nomeUser'] ?? '';
}

}
