import { Component } from '@angular/core';
import { HistoricoComponent } from '../historico-CRUD/historico/historico.component';
import { CreateInputComponent } from '../historico-CRUD/create-input/create-input.component';

@Component({
  selector: 'app-funcionalidade-page',
  imports: [HistoricoComponent, CreateInputComponent],
  templateUrl: './funcionalidade-page.component.html',
  standalone: true,
  styleUrl: './funcionalidade-page.component.css'
})
export class FuncionalidadePageComponent {
  accessFunc: boolean = true;
  requisicao: string = '';

  EnviarInput(value: string) {
    this.requisicao = value;
    setTimeout(() => {
      this.requisicao = '';
    }, 100);
  }

}
